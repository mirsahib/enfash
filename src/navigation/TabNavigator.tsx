import React from 'react'
import HomeScreens from '@features/Home'
import MessageScreens from '@features/Messages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabNavParams } from './utils/NavigationTypes'
import HomeNavigator from './HomeNavigator'
import TabNavigatorOptions from './utils/TabNavigatorOptions'

const Tab = createBottomTabNavigator<TabNavParams>()

const TabNavigator = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name='HomeTab' component={HomeNavigator} options={TabNavigatorOptions} />
            <Tab.Screen name='Message' component={MessageScreens.Message} 
                options={TabNavigatorOptions} />
            <Tab.Screen name='Cart' component={HomeScreens.Cart}
                options={TabNavigatorOptions} />
            <Tab.Screen name='Account' component={HomeScreens.Profile}
                options={TabNavigatorOptions} />
        </Tab.Navigator>
    )
}

export default TabNavigator