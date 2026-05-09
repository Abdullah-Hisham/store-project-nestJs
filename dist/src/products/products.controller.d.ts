import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    create(dto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<{
        category: {
            name: string;
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
        };
    } & {
        name: string;
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        stock: number;
        image: string | null;
        categoryId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(categoryId?: string, search?: string): import(".prisma/client").Prisma.PrismaPromise<({
        category: {
            name: string;
            id: number;
        };
    } & {
        name: string;
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        stock: number;
        image: string | null;
        categoryId: number;
    })[]>;
    findOne(id: number): Promise<{
        category: {
            name: string;
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
        };
    } & {
        name: string;
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        stock: number;
        image: string | null;
        categoryId: number;
    }>;
    update(id: number, dto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<{
        category: {
            name: string;
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            image: string | null;
        };
    } & {
        name: string;
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        stock: number;
        image: string | null;
        categoryId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProductClient<{
        name: string;
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        price: number;
        stock: number;
        image: string | null;
        categoryId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
