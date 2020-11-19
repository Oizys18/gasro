import { BlobDataType } from "sequelize";
export interface Post {
  id: number;
  title: string;
  content: string;
  image?: string;
  youtube?: string;
}
