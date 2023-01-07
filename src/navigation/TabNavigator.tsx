import React from 'react'
import HomeScreens from '@features/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabNavParams } from './utils/NavigationTypes'
import TabNavigatorOptions from './utils/TabNavigatorOptions'
import { View } from 'react-native'
import WishlistScreens from '@features/Wishlist'
import ProfileNavigator from './ProfileNavigator'
import Cart from '@container/Cart'


const Tab = createBottomTabNavigator<TabNavParams>()

const TabNavigator = () => {

    return (
        <Tab.Navigator >
            <Tab.Screen name='HomeTab' component={HomeScreens.Home} options={TabNavigatorOptions} />
            <Tab.Screen name='MessageTab' component={View} 
                options={TabNavigatorOptions} />
            <Tab.Screen name='CartTab' component={Cart}
                options={TabNavigatorOptions} />
            <Tab.Screen name='WishlistTab' component={WishlistScreens.Wishlist} options={TabNavigatorOptions}/>
            <Tab.Screen name='AccountTab' component={View}
                options={TabNavigatorOptions} />
        </Tab.Navigator>
    )
}

export default TabNavigator