const { TYPES } = require("../src/common/consts/types");
const { origin: fileName } = require("./file_name_big_camel");

const body = `
import {Entity, Tree, Column, PrimaryGeneratedColumn, TreeChildren, TreeParent, TreeLevelColumn} from "typeorm";

@Entity()
@Tree("closure-table")
export class \${1:${fileName}} {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @TreeChildren()
    children: $1[];

    @TreeParent()
    parent: $1;
}
`;
const description = "";

module.exports = {
  prefix: ["!typeorm_tree"],
  type: [TYPES.typescript],
  description: description || body,
  body: body.trim(),
};
