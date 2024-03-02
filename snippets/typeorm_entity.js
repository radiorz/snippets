const { origin: fileName } = require("./file_name_big_camel");
const { TYPES } = require("../src/common/consts/types");

const body = `
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsOptional } from 'class-validator';
@Entity()
export class \${1:${fileName}} {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsNotEmpty()
  name: string; // 配置项的键名

  @Column({ nullable: true })
  @IsOptional()
  description: string; // 配置项的描述
}
`;
const description = "";

module.exports = {
  prefix: ["!entity"],
  type: [TYPES.typescript],
  description: description || body,
  body: body.trim(),
};
