import { PrismaService } from "../prisma/prisma.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<{
        name: string;
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        _count: {
            products: number;
        };
    } & {
        name: string;
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
    })[]>;
    findOne(id: number): Promise<{
        products: {
            name: string;
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            price: number;
            stock: number;
            image: string | null;
            categoryId: number;
        }[];
    } & {
        name: string;
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
    }>;
    update(id: number, dto: UpdateCategoryDto): import(".prisma/client").Prisma.Prisma__CategoryClient<{
        name: string;
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__CategoryClient<{
        name: string;
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        image: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
