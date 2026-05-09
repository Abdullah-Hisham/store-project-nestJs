import { IsEmail, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty({ example: "user@example.com", description: "Email address" })
  @IsEmail({}, { message: "Invalid email address" })
  email: string;

  @ApiProperty({ example: "123456", description: "Password" })
  @IsString()
  @MinLength(6, { message: "Password must be at least 6 characters" })
  password: string;
}
