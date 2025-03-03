import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdatePortfolioFeedbackDto{
  @IsNotEmpty()
  @IsNumber()
  star: number

  @IsNotEmpty()
  @IsString()
  comment: string

  @IsNotEmpty()
  @IsString()
  customerName: string

  @IsNotEmpty()
  @IsString()
  companyName: string

  @IsNotEmpty()
  @IsString()
  customerPosition: string
}