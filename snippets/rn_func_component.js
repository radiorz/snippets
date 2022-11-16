const { origin: fileHeader } = require("./file_header");
const { origin: fileName } = require("./file_name");
const body = `${fileHeader}
import { View, Text } from 'react-native'
import React, { useState, useEffect, memo } from 'react'

 function \${1:${fileName}}() {
  return (
    <View>
      <Text>\${1:${fileName}}</Text>
    </View>
  )
}
export default memo(\${1:${fileName}})


`;

const description = "";

module.exports = {
  prefix: ["!rn"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
