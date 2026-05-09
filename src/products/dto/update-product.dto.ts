import { IsString, IsNumber, IsOptional, IsInt, Min } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateProductDto {
  @ApiPropertyOptional({
    example: "iPhone 15 Pro",
    description: "Product name",
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    example: "Updated smart phone",
    description: "Product description",
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: 1099.99, description: "Product price" })
  @IsNumber()
  @Min(0)
  @IsOptional()
  price?: number;

  @ApiPropertyOptional({ example: 40, description: "Available quantity" })
  @IsInt()
  @Min(0)
  @IsOptional()
  stock?: number;

  @ApiPropertyOptional({
    example: "https://example.com/new-image.jpg",
    description: "Product image URL",
  })
  @IsString()
  @IsOptional()
  image?: string;

  @ApiPropertyOptional({ example: 2, description: "Category ID" })
  @IsInt()
  @IsOptional()
  categoryId?: number;
}
