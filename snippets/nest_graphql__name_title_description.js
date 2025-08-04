const { TYPES } = require("../src/common/consts/types");
const body = `
  @Field({ description: '名称' })
  name: string;

  @Field(()=> String, { nullable: true, description: '显示名称' })
  title: string | null;

  @Field(() => String, { nullable: true, description: '描述' })
  description: string | null;
`;
const description = "";

module.exports = {
  prefix: ["!ntd"],
  type: [TYPES.typescript],
  description: description || body,
  body: body.trim(),
};
