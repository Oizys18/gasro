import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { BlobDataType } from "sequelize";

@Table({ modelName: "post", timestamps: true, paranoid: true })
export default class Post extends Model<Post> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(200))
  title: string;

  @AllowNull(false)
  @Column(DataType.STRING(5000))
  content: string;

  @AllowNull(true)
  @Column(DataType.BLOB)
  image: BlobDataType;

  @AllowNull(true)
  @Column(DataType.STRING(5000))
  youtube: string;
}
