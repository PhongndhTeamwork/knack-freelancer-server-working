import { Module } from "@nestjs/common";
import { UserModule } from "@model/user/user.module";
import { PortfolioModule } from './portfolio/portfolio.module';

@Module({
  imports: [UserModule, PortfolioModule],
  exports: [UserModule, PortfolioModule]
})
export class ModelModule {
}
