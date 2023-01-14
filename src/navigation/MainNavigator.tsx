import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductNavigator from './ProductNavigator'
import HomeScreens from '@features/Home'
import {MainNavParams} from './utils/NavigationTypes'
import DrawerNavigator from './DrawerNavigator'
import MainHeaderRight from '@components/MainHeaderRight'
import ProfileScreens from '@features/Profile'
import { View } from 'react-native'

const Stack = createNativeStackNavigator<MainNavParams>()

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      animation:"slide_from_right"
    }}>
        <Stack.Screen name="DrawerNav" options={{headerShown:false}} component={DrawerNavigator}/>
        <Stack.Screen name="Search" options={{headerTitle:""}} component={HomeScreens.Search}/>
        <Stack.Screen name="SearchByCatagory" options={{
          headerTitle:"Catagory",
          headerRight:()=><MainHeaderRight/>
          }} component={HomeScreens.SearchByCatagory}/>
        <Stack.Screen name="ProductNav" options={{headerShown:false}} component={ProductNavigator}/>
        <Stack.Screen name="EditProfile" options={{headerTitle:"Edit Profile"}} component={ProfileScreens.EditProfile}/>
        <Stack.Screen name="ManageAddress" options={{headerTitle:"Manage Address"}} component={ProfileScreens.ManageAddress}/>
        <Stack.Screen name="OrderDetails" options={{headerTitle:"Details"}} component={ProfileScreens.OrderDetails}/>
    </Stack.Navigator>
  )
}


export default MainNavigator