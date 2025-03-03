import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePortfolioWorkExperienceDto{
  @IsOptional()
  @IsString()
  role: string

  @IsString()
  @IsNotEmpty()
  company: string

  @IsOptional()
  @IsString()
  from: string

  @IsOptional()
  @IsString()
  to: string
}