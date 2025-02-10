import { Global, Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { v2 as cloudinary } from "cloudinary";

@Global()
@Module({
  providers: [{
    provide: "CLOUDINARY",
    useFactory: async (configService: ConfigService) => {
      return cloudinary.config({
        cloud_name: configService.getOrThrow("CLOUDINARY_NAME"),
        api_key: configService.getOrThrow("CLOUDINARY_API_KEY"),
        api_secret: configService.getOrThrow("CLOUDINARY_API_SECRET")
      });
    },
    inject: [ConfigService]
  }],
  exports: ["CLOUDINARY"]
})

export class CloudinaryProvider {
}