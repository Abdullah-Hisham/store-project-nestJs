import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const adminPassword = await bcrypt.hash("admin123", 10);
  const admin = await prisma.user.upsert({
    where: { email: "admin@store.com" },
    update: {},
    create: {
      email: "admin@store.com",
      name: "Admin",
      password: adminPassword,
      role: "ADMIN",
    },
  });

  // Create regular user
  const userPassword = await bcrypt.hash("user123", 10);
  const user = await prisma.user.upsert({
    where: { email: "user@store.com" },
    update: {},
    create: {
      email: "user@store.com",
      name: "User",
      password: userPassword,
      role: "USER",
    },
  });

  // Create categories
  const electronics = await prisma.category.upsert({
    where: { name: "Electronics" },
    update: {},
    create: {
      name: "Electronics",
      description: "Electronic devices and mobile phones",
    },
  });

  const clothing = await prisma.category.upsert({
    where: { name: "Clothing" },
    update: {},
    create: {
      name: "Clothing",
      description: "Mens and womens clothing",
    },
  });

  const food = await prisma.category.upsert({
    where: { name: "Food" },
    update: {},
    create: {
      name: "Food",
      description: "Food and beverages",
    },
  });

  // Create products
  await prisma.product.createMany({
    skipDuplicates: true,
    data: [
      {
        name: "iPhone 15",
        description: "Smart phone from Apple",
        price: 999.99,
        stock: 50,
        categoryId: electronics.id,
      },
      {
        name: "Samsung Galaxy S24",
        description: "Smart phone from Samsung",
        price: 899.99,
        stock: 40,
        categoryId: electronics.id,
      },
      {
        name: "Cotton T-shirt",
        description: "100% cotton t-shirt",
        price: 19.99,
        stock: 200,
        categoryId: clothing.id,
      },
      {
        name: "Blue Jeans",
        description: "Classic blue denim pants",
        price: 49.99,
        stock: 100,
        categoryId: clothing.id,
      },
      {
        name: "Arabic Coffee",
        description: "Premium Arabic coffee 500g",
        price: 15.99,
        stock: 300,
        categoryId: food.id,
      },
    ],
  });

  console.log("✅ Seed completed successfully");
  console.log({ admin, user, electronics, clothing, food });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
