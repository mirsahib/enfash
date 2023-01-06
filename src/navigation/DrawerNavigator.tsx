import { createDrawerNavigator } from "@react-navigation/drawer"
import Header from '@features/Home/components/Header'
import HeaderRight from '@features/Home/components/HeaderRight'
import TabNavigator from "./TabNavigator"


const Drawer = createDrawerNavigator()

const DrawerNavigator =()=>{
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
            }}  component={TabNavigator}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator