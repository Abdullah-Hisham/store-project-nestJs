import { UsersService } from "./users.service";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        email: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
        orders: {
            id: number;
            status: import(".prisma/client").$Enums.OrderStatus;
            totalAmount: number;
        }[];
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        email: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        orders: ({
            items: ({
                product: {
                    name: string;
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    price: number;
                    stock: number;
                    image: string | null;
                    categoryId: number;
                };
            } & {
                id: number;
                orderId: number;
                productId: number;
                quantity: number;
                price: number;
            })[];
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            userId: number;
            status: import(".prisma/client").$Enums.OrderStatus;
            totalAmount: number;
        })[];
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<{
        name: string;
        email: string;
        password: string;
        id: number;
        role: import(".prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
