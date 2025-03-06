import { IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateProminentWorkDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  description: string

  @IsOptional()
  @IsString()
  from: string

  @IsOptional()
  @IsString()
  to: string
}