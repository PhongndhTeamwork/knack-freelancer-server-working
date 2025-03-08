import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  const config = new DocumentBuilder()
    .setTitle("CSM API")
    .setDescription("The CMS API description")
    .addBearerAuth()
    .build()
  ;
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api/docs", app, document);

  app.enableCors({
    origin: [
      "https://knack-freelancer-working.onrender.com",
      "http://localhost:4000",
      "https://knack-freelancer-working.vercel.app"
    ], // Allow requests from this origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allowed methods
    credentials: true, // Allow cookies if needed
    allowedHeaders: "Content-Type, Authorization" // Allowed headers
  });
  const port = process.env.PORT;

  await app.listen(port);
}

bootstrap().then(() => {
  console.log("App is running");
});
