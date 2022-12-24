import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import { Props } from "../"
import Icon from 'react-native-vector-icons/AntDesign'
import { Pressable, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import Header from "./Header"
import HeaderRight from "./HeaderRight"
type MainNavigationParams = {
    ProductNav: any,
    HomeNav: any,
    MessageNav: any,
    CartNav:any
}


const TabBarOptions = (props: Props) => {
    const routeName = props.route.name
    let result: BottomTabNavigationOptions = {}
    const navigation = useNavigation<NativeStackNavigationProp<MainNavigationParams>>()

    switch (routeName) {
        case 'Home':
            result = {
                headerShown:false,
                // headerTitle:()=><Header/>,
                // headerTitleAlign:'center',
                // headerStyle:{
                //     height:60
                // },
                // headerRight:()=><HeaderRight/>,
                // headerRightContainerStyle:{
                //     paddingHorizontal:'5%'
                // },
                tabBarIcon: () => <Icon name="home" color={"black"} size={25} />,
                tabBarLabel: "Home"
            }
            break
        case 'Message':
            result = {
                headerShown: false,
                tabBarLabel: "Message",
                tabBarShowLabel: true,
                tabBarIcon: () => <Icon name="message1" color={"black"} size={25} />,
                tabBarButton: (props) => (
                    <Pressable {...props} onPress={() => navigation.navigate("MessageNav", { screen: "Message" })}>
                        {props.children}
                    </Pressable>
                )
            }
            break
        case 'Cart':
            result = {
                headerShown: false,
                tabBarIcon: () => <Icon name="shoppingcart" color={"black"} size={25} />,
                tabBarLabel: "Cart",
                tabBarButton: (props) => (
                    <Pressable {...props} onPress={() => navigation.navigate("CartNav", { screen: "Cart" })}>
                        {props.children}
                    </Pressable>
                )
            }
            break
        case 'Account':
            result = {
                headerShown: false,
                tabBarIcon: () => <Icon name="user" color={"black"} size={25} />,
                tabBarLabel: "Account"
            }
            break
        default:
            throw new Error("Route Name is not supported")
    }
    return result
}

export default TabBarOptions