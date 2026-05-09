import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable data validation (Validation) automatically
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove unknown fields from DTO
      transform: true, // Automatically convert types
      forbidNonWhitelisted: true, // Reject requests with unknown fields
    }),
  );

  // Enable global error filter
  app.useGlobalFilters(new HttpExceptionFilter());

  // Setup Swagger (interactive API documentation)
  const config = new DocumentBuilder()
    .setTitle("E-commerce Store API")
    .setDescription("API for the e-commerce store")
    .setVersion("1.0")
    .addBearerAuth() // Add JWT authentication in Swagger
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document); // Access via /api

  // Enable CORS to allow requests from Frontend
  app.enableCors();

  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`🚀 Application running on: http://localhost:${port}`);
  console.log(`📚 Swagger UI: http://localhost:${port}/api`);
}
bootstrap();
