import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdatePortfolioWorkExperienceDto{
  @IsNotEmpty()
  @IsNotEmpty()
  role: string

  @IsNotEmpty()
  @IsNotEmpty()
  company: string

  @IsNotEmpty()
  @IsString()
  from: string

  @IsOptional()
  @IsString()
  to: string
}