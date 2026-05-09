import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const error =
      typeof exceptionResponse === "string"
        ? { message: exceptionResponse, error: "Error", statusCode: status }
        : (exceptionResponse as any);

    response.status(status).json({
      success: false,
      statusCode: status,
      message: error.message || "An unexpected error occurred",
      timestamp: new Date().toISOString(),
    });
  }
}
