import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeNavigator from './HomeNavigator'
import ProductNavigator from './ProductNavigator'
const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeNav" options={{headerShown:false}} component={HomeNavigator}/>
        <Stack.Screen name="ProductNav" options={{headerShown:false}} component={ProductNavigator}/>
    </Stack.Navigator>
  )
}

export default MainNavigator