import { IsNotEmpty, IsString } from "class-validator";

export class CreatePortfolioSkillDto{
  @IsNotEmpty()
  @IsString()
  name: string
}