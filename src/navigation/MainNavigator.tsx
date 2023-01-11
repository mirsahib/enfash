import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductNavigator from './ProductNavigator'
import ProfileNavigator from './ProfileNavigator'
import HomeScreens from '@features/Home'
import {MainNavParams} from './utils/NavigationTypes'
import DrawerNavigator from './DrawerNavigator'
import MainHeaderRight from '@components/MainHeaderRight'

const Stack = createNativeStackNavigator<MainNavParams>()

const MainNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="DrawerNav" options={{headerShown:false}} component={DrawerNavigator}/>
        <Stack.Screen name="Search" options={{headerTitle:""}} component={HomeScreens.Search}/>
        <Stack.Screen name="SearchByCatagory" options={{
          headerTitle:"Catagory",
          headerRight:()=><MainHeaderRight/>
          }} component={HomeScreens.SearchByCatagory}/>
        <Stack.Screen name="ProductNav" options={{headerShown:false}} component={ProductNavigator}/>
        {/* <Stack.Screen name="MessageNav" options={{headerTitle:"Message"}} component={MessageScreens.Message}/> */}
        {/* <Stack.Screen name="AccountNav" options={{headerShown:false}} component ={ProfileNavigator}/> */}
    </Stack.Navigator>
  )
}


export default MainNavigator