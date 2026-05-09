import { IsInt, IsArray, Min, ValidateNested, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class OrderItemDto {
  @ApiProperty({ example: 1, description: "Product ID" })
  @IsInt()
  @Min(1)
  productId: number;

  @ApiProperty({ example: 2, description: "Quantity" })
  @IsInt()
  @Min(1)
  quantity: number;
}

export class CreateOrderDto {
  @ApiProperty({
    type: [OrderItemDto],
    description: "Order items",
    example: [{ productId: 1, quantity: 2 }],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
