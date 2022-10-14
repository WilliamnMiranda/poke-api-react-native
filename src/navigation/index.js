import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './stacks'
const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack />
    </NavigationContainer>
  )
}

export default Navigation