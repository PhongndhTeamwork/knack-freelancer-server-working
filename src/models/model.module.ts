import { Module } from "@nestjs/common";
import { UserModule } from "@model/user/user.module";
import { ProfileModule } from "./profile/profile.module";


@Module({
  imports: [UserModule, ProfileModule],
  exports: [UserModule, ProfileModule]
})
export class ModelModule {
}
