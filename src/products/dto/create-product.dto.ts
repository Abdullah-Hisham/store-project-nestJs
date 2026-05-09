import { IsString, IsNumber, IsOptional, IsInt, Min } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateProductDto {
  @ApiProperty({ example: "iPhone 15", description: "Product name" })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: "Smart phone from Apple",
    description: "Product description",
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ example: 999.99, description: "Product price" })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ example: 50, description: "Available quantity" })
  @IsInt()
  @Min(0)
  stock: number;

  @ApiPropertyOptional({
    example: "https://example.com/image.jpg",
    description: "Product image URL",
  })
  @IsString()
  @IsOptional()
  image?: string;

  @ApiProperty({ example: 1, description: "Category ID" })
  @IsInt()
  categoryId: number;
}
