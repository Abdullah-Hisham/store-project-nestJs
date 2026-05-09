# 🏪 E-Commerce Store

A simple e-commerce API built with NestJS and Prisma. Started this as a learning project to understand how to build a backend system from scratch.

## What's in this project?

Honestly, I wanted to learn NestJS properly, so I decided to build a full e-commerce store instead of just doing tutorials. Here's what I covered:

- User authentication with JWT tokens
- Role-based access control (admin/user stuff)
- Products, categories, and orders
- Data validation and error handling
- API documentation with Swagger

## Getting Started

### Setup

First, install dependencies:

```bash
npm install
```

Setup the database:

```bash
# Generate Prisma client
npx prisma generate

# Create the database and run migrations
npx prisma migrate dev --name init

# Add some test data
npx prisma db seed
```

### Run it

```bash
# Development mode (auto-restarts when you change files)
npm run start:dev
```

Then go to `http://localhost:3000/api` to see the API docs.

## Project Structure

I organized it like this:

```
src/
├── auth/                 # Login/register stuff
├── users/                # User management
├── products/             # Products and their APIs
├── categories/           # Product categories
├── orders/               # Orders and order items
├── prisma/               # Database connection
└── common/               # Shared error handling
```

## How the Authentication Works

1. User signs up with email and password
2. Password gets hashed with bcrypt (not storing it plain!)
3. When they login, I verify the password and give them a JWT token
4. They send this token with every request in the `Authorization` header
5. The JWT strategy validates the token and attaches user info to the request

Simple enough, but took me a while to get the flow right.

## The Database

Using postgersql with Prisma. I defined these tables:

- **User** - People using the app (email, password, role)
- **Product** - Items for sale (name, price, stock, category)
- **Category** - Product categories
- **Order** - Customer orders
- **OrderItem** - Line items in an order (quantity, price at time of order)

The tricky part was figuring out the relationship between Order and Product. Since one order has many products and one product can be in many orders, I needed an intermediate table (OrderItem).

## API Endpoints

### Auth

- `POST /auth/register` - Sign up
- `POST /auth/login` - Login

### Products

- `GET /products` - List all (you can filter by category or search)
- `GET /products/:id` - Get one
- `POST /products` - Add new (admin only)
- `PATCH /products/:id` - Update (admin only)
- `DELETE /products/:id` - Delete (admin only)

### Categories

- `GET /categories` - List all
- `GET /categories/:id` - Get one with its products
- `POST /categories` - Add (admin only)
- `PATCH /categories/:id` - Update (admin only)
- `DELETE /categories/:id` - Delete (admin only)

### Orders

- `POST /orders` - Create an order
- `GET /orders` - View all (admin only)
- `GET /orders/my-orders` - Your own orders
- `GET /orders/:id` - Get specific order
- `PATCH /orders/:id/status` - Update status (admin only)
- `DELETE /orders/:id` - Delete (admin only)

### Users

- `GET /users` - List all (admin only)
- `GET /users/:id` - Get one
- `DELETE /users/:id` - Delete (admin only)

## Cool Things I Learned

### Guards and Decorators

Guards are like middleware that checks if you're allowed to do something. I created:

- `JwtAuthGuard` - Checks if you have a valid token
- `RolesGuard` - Checks if you have the right role (admin/user)

Then I use them like:

```typescript
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('ADMIN')
@Delete(':id')
remove(@Param('id') id: number) {
  return this.productsService.remove(id);
}
```

### Data Validation

Using `class-validator` to validate incoming data. So if someone sends bad data, the API automatically rejects it:

```typescript
export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsInt()
  @Min(0)
  stock: number;
}
```

### Prisma Transactions

When creating an order, I needed to:
1. Create the order record
2. Update product stock for each item

If step 2 fails, I want step 1 to undo. That's what transactions do:

```typescript
const order = await this.prisma.$transaction(async (tx) => {
  const newOrder = await tx.order.create({...});
  
  for (const item of items) {
    await tx.product.update({
      where: { id: item.productId },
      data: { stock: { decrement: item.quantity } }
    });
  }
  
  return newOrder;
});
```

If anything fails, the whole thing rolls back.

## Useful Commands

```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod

# Database
npx prisma studio        # Open database UI
npx prisma migrate dev   # Create new migration
npx prisma db seed       # Run seed script
```

## What I'd do differently next time

- Started with tests from the beginning (I know, I should have)
- Better error messages (some are pretty generic)
- More edge case handling
- Pagination on the list endpoints

But honestly, this was a good learning experience. Building something real teaches you way more than just watching tutorials.
