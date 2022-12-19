import React from 'react'
import HomeScreens,{HomeNavigationParams} from '@features/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator<HomeNavigationParams>()

const HomeNavigator = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreens.Home}
                options={HomeScreens.TabBarOptions} />
            <Tab.Screen name='Message' component={HomeScreens.Message}
                options={HomeScreens.TabBarOptions}  />
            <Tab.Screen name='Cart' component={HomeScreens.Cart}
                options={HomeScreens.TabBarOptions} />
            <Tab.Screen name='Account' component={HomeScreens.Profile}
                options={HomeScreens.TabBarOptions} />
        </Tab.Navigator>
    )
}

export default HomeNavigator