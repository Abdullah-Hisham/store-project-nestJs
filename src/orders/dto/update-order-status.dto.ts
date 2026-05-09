import { IsEnum } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export enum OrderStatus {
  PENDING = "PENDING",
  CONFIRMED = "CONFIRMED",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export class UpdateOrderStatusDto {
  @ApiProperty({
    enum: OrderStatus,
    example: "CONFIRMED",
    description: "New order status",
  })
  @IsEnum(OrderStatus)
  status: OrderStatus;
}
