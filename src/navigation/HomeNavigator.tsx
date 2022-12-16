import React from 'react'
import HomeScreens from '../features/Home/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SearchComponent from '../features/Home/components/SearchComponent'
import Icon from 'react-native-vector-icons/AntDesign'
const Tab = createBottomTabNavigator()

const HomeNavigator = () => {
    return (
        <Tab.Navigator >
            <Tab.Screen name='Home' component={HomeScreens.Home}
                options={{
                    headerTitle: () => <SearchComponent />,
                    tabBarIcon: () => <Icon name="home" color={"black"} size={25} />,
                    tabBarLabel: "Home"
                }} />
            <Tab.Screen name='Message' component={HomeScreens.Message}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <Icon name="message1" color={"black"} size={25} />,
                    tabBarLabel: "Message"
                }} />
            <Tab.Screen name='Cart' component={HomeScreens.Cart}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <Icon name="shoppingcart" color={"black"} size={25} />,
                    tabBarLabel: "Cart"
                }}
            />
            <Tab.Screen name='Account' component={HomeScreens.Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: () => <Icon name="user" color={"black"} size={25} />,
                    tabBarLabel: "Account"
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeNavigator