import { IsDefined, IsEmail, IsOptional, IsString } from "class-validator";


export class SignUpByUsernameDto {
  @IsDefined()
  @IsString()
  username: string;

  @IsEmail()
  @IsOptional()
  email: string;

}