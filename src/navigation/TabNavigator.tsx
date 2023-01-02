import React from 'react'
import HomeScreens from '@features/Home'
import MessageScreens from '@features/Messages'
import ProfileScreen from '@features/Profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabNavParams } from './utils/NavigationTypes'
import HomeNavigator from './HomeNavigator'
import TabNavigatorOptions from './utils/TabNavigatorOptions'
import { View } from 'react-native'

const Tab = createBottomTabNavigator<TabNavParams>()

const TabNavigator = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name='HomeTab' component={HomeNavigator} options={TabNavigatorOptions} />
            <Tab.Screen name='MessageTab' component={MessageScreens.Message} 
                options={TabNavigatorOptions} />
            <Tab.Screen name='CartTab' component={View}
                options={TabNavigatorOptions} />
            <Tab.Screen name='WishlistTab' component={View} options={TabNavigatorOptions}/>
            <Tab.Screen name='AccountTab' component={View}
                options={TabNavigatorOptions} />
        </Tab.Navigator>
    )
}

export default TabNavigator