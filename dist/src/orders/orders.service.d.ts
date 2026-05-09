import { PrismaService } from "../prisma/prisma.service";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderStatusDto } from "./dto/update-order-status.dto";
export declare class OrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, dto: CreateOrderDto): Promise<{
        user: {
            name: string;
            email: string;
            id: number;
        };
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
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            name: string;
            email: string;
            id: number;
        };
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
    })[]>;
    findByUser(userId: number): import(".prisma/client").Prisma.PrismaPromise<({
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
    })[]>;
    findOne(id: number): Promise<{
        user: {
            name: string;
            email: string;
            id: number;
        };
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
    }>;
    updateStatus(id: number, dto: UpdateOrderStatusDto): import(".prisma/client").Prisma.Prisma__OrderClient<{
        user: {
            name: string;
            email: string;
            id: number;
        };
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__OrderClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        status: import(".prisma/client").$Enums.OrderStatus;
        totalAmount: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
