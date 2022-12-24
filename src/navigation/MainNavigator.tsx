import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeNavigator from './HomeNavigator'
import ProductNavigator from './ProductNavigator'
import MessageScreens from '@features/Messages'
import Cart from '@container/Cart'
import { createDrawerNavigator } from '@react-navigation/drawer'
const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeNav" options={{headerShown:false}} component={HomeNavigator}/>
        <Stack.Screen name="ProductNav" options={{headerShown:false}} component={ProductNavigator}/>
        <Stack.Screen name="MessageNav" options={{headerTitle:"Message"}} component={MessageScreens.Message}/>
        <Stack.Screen name="CartNav" options={{headerTitle:"Shopping bag"}} component ={Cart}/>
    </Stack.Navigator>
  )
}


export default MainNavigator