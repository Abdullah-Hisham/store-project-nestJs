import { IsString, IsOptional } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateCategoryDto {
  @ApiProperty({ example: "Electronics", description: "Category name" })
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: "Electronic devices and mobile phones",
    description: "Category description",
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({
    example: "https://example.com/cat.jpg",
    description: "Category image",
  })
  @IsString()
  @IsOptional()
  image?: string;
}
