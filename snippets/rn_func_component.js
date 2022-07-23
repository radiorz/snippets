const fh = require("./file_header");
const body = `${fh.origin}
import { View, Text } from 'react-native'
import React, {useState,useEffect} from 'react'

export default function $1() {
  return (
    <View>
      <Text>rn_func_component</Text>
    </View>
  )
}



`;

const description = "";

module.exports = {
  prefix: ["!rn"],
  type: ["javascript"],
  description: description || body,
  body: body.trim(),
};
