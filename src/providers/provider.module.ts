import { Module } from "@nestjs/common";

import { JwtProvider } from "@provider/jwt.provider";
import { CloudinaryProvider } from "./cloudinary.provider";

@Module({
  imports: [JwtProvider, CloudinaryProvider],
  exports: [JwtProvider, CloudinaryProvider]
})
export class ProviderModule {
}
