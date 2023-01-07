import { createDrawerNavigator } from "@react-navigation/drawer"
import MainHeader from '@components/MainHeader'
import MainHeaderRight from '@components/MainHeaderRight'
import TabNavigator from "./TabNavigator"


const Drawer = createDrawerNavigator()

const DrawerNavigator =()=>{
    return(
        <Drawer.Navigator initialRouteName="TabNav">
            <Drawer.Screen name='TabNav' options={{
                drawerLabel:"Home",
                
                headerTitle:()=><MainHeader/>,
                headerTitleAlign:'center',
                headerStyle:{
                    height:60
                },
                headerRight:()=><MainHeaderRight/>,
                headerRightContainerStyle:{
                    paddingHorizontal:'5%'
                },
            }}  component={TabNavigator}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator