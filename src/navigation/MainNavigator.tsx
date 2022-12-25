import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator'
import ProductNavigator from './ProductNavigator'
import MessageScreens from '@features/Messages'
import Cart from '@container/Cart'
import {MainNavParams} from './utils/NavigationTypes'

const Stack = createNativeStackNavigator<MainNavParams>()

const MainNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeNav" options={{headerShown:false}} component={TabNavigator}/>
        <Stack.Screen name="ProductNav" options={{headerShown:false}} component={ProductNavigator}/>
        <Stack.Screen name="MessageNav" options={{headerTitle:"Message"}} component={MessageScreens.Message}/>
        <Stack.Screen name="CartNav" options={{headerTitle:"Shopping bag"}} component ={Cart}/>
    </Stack.Navigator>
  )
}


export default MainNavigator