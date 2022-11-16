/**
 * @author
 * @file index.js
 * @fileBase test
 * @path test\index.js
 * @dir D:\code\snippets\test
 * @desc 
 * @todo
 *
 * @done
 * @example
 */

import { View, Text } from 'react-native'
import React, { useState, useEffect, memo } from 'react'

 function Componen() {
  return (
    <View>
      <Text>Componen</Text>
    </View>
  )
}
export default memo(Componen)
