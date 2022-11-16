/**
 * @author
 * @file Component.js
 * @fileBase Component
 * @path test\Component.js
 * @dir D:\code\snippets\test
 * @desc 
 * @todo
 *
 * @done
 * @example
 */

import { View, Text } from 'react-native'
import React, { useState, useEffect, memo } from 'react'

 function Component() {
  return (
    <View>
      <Text>Component</Text>
    </View>
  )
}
export default memo(Component)
