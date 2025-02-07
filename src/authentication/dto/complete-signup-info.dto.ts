import { IsDefined, IsString } from "class-validator";


export class CompleteSignupInfoDto {
  @IsDefined()
  @IsString()
  username: string;

  @IsDefined()
  @IsString()
  phone: string;

}