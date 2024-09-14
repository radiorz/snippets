const { TYPES } = require("../src/common/consts/types");
const body = `
  @Field(() => Int, { description: 'id' })
  id: number;
  @Field(() => GraphQLTimestamp, { description: '创建时间' })
  createdAt: Date;
  @Field(() => GraphQLTimestamp, { description: '更新时间' })
  updatedAt: Date;
`;
const description = "";

module.exports = {
  prefix: ["!icu"],
  type: [TYPES.javascript],
  description: description || body,
  body: body.trim(),
};
