const { origin: fileHeader } = require("./file_header");
const { origin: fileName } = require("./file_name");
const body = `${fileHeader}
import React, { useState, useEffect, memo } from 'react'
import { View, Text } from 'react-native'

function \${1:${fileName}}() {
  return (
    <View>
      <Text>\${1:${fileName}}</Text>
    </View>
  )
}

export default \${1:${fileName}}

`;

const description = "";

module.exports = {
  prefix: ["!rn","!reactNative"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
