import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductNavigator from './ProductNavigator'
import ProfileNavigator from './ProfileNavigator'
import HomeScreens from '@features/Home'
import MessageScreens from '@features/Messages'
import {MainNavParams} from './utils/NavigationTypes'
import HomeNavigator from './DrawerNavigator'

const Stack = createNativeStackNavigator<MainNavParams>()

const MainNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="HomeNav" options={{headerShown:false}} component={HomeNavigator}/>
        <Stack.Screen name="Search" options={{headerTitle:""}} component={HomeScreens.Search}/>
        <Stack.Screen name="SearchByCatagory" options={{headerTitle:"Catagory"}} component={HomeScreens.SearchByCatagory}/>
        <Stack.Screen name="ProductNav" options={{headerShown:false}} component={ProductNavigator}/>
        <Stack.Screen name="MessageNav" options={{headerTitle:"Message"}} component={MessageScreens.Message}/>
        <Stack.Screen name="AccountNav" options={{headerShown:false}} component ={ProfileNavigator}/>
    </Stack.Navigator>
  )
}


export default MainNavigator