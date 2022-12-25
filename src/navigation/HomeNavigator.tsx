import { createDrawerNavigator } from "@react-navigation/drawer"

import Header from '@features/Home/components/Header'
import HeaderRight from '@features/Home/components/HeaderRight'
import HomeScreens from '@features/Home'


const Drawer = createDrawerNavigator()

const HomeNavigator =()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Home' options={{
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
export default HomeNavigator