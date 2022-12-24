import React from 'react'
import HomeScreens,{HomeNavigationParams} from '@features/Home'
import MessageScreens from '@features/Messages'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Header from '@features/Home/components/Header'
import HeaderRight from '@features/Home/components/HeaderRight'


const Drawer = createDrawerNavigator()

const Home =()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='HomeScreen' options={{
                headerTitle:()=><Header/>,
                headerTitleAlign:'center',
                headerStyle:{
                    height:60
                },
                headerRight:()=><HeaderRight/>,
                headerRightContainerStyle:{
                    paddingHorizontal:'5%'
                },
            }}  component={HomeScreens.Home}/>
        </Drawer.Navigator>
    )
}

const Tab = createBottomTabNavigator<HomeNavigationParams>()

const HomeNavigator = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}
                options={HomeScreens.TabBarOptions} />
            <Tab.Screen name='Message' component={MessageScreens.Message} 
                options={HomeScreens.TabBarOptions} />
            <Tab.Screen name='Cart' component={HomeScreens.Cart}
                options={HomeScreens.TabBarOptions} />
            <Tab.Screen name='Account' component={HomeScreens.Profile}
                options={HomeScreens.TabBarOptions} />
        </Tab.Navigator>
    )
}

export default HomeNavigator