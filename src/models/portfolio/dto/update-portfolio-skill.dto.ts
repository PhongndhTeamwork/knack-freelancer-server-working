import { IsNotEmpty, IsString } from "class-validator";

export class UpdatePortfolioSkillDto{
  @IsNotEmpty()
  @IsString()
  name: string
}