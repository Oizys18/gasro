import { IsString } from "class-validator";
import { BlobDataType } from "sequelize";

export class CreatePostDto {
  @IsString()
  public title: string;

  @IsString()
  public content: string;

  @IsString()
  public image: string;

  @IsString()
  public youtube: string;
}
