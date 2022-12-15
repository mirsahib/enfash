import React from 'react'
import HomeScreens from '../features/Home/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchComponent from '../features/Home/components/SearchComponent'
const Tab = createBottomTabNavigator()

const HomeNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreens.Home} options={{headerTitle:()=><SearchComponent/>}} />
            <Tab.Screen name='Message' component={HomeScreens.Message} options={{ headerShown: false }} />
            <Tab.Screen name='Cart' component={HomeScreens.Cart} options={{ headerShown: false }} />
            <Tab.Screen name='Account' component={HomeScreens.Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default HomeNavigator