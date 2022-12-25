import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MainNavParams, TabScreenProps } from "./NavigationTypes"
import Icon from 'react-native-vector-icons/AntDesign'
import { Pressable } from "react-native"


const TabNavigatorOptions = (props: TabScreenProps) => {
    const routeName = props.route.name
    let result: BottomTabNavigationOptions = {}
    const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>()

    switch (routeName) {
        case 'HomeTab':
            result = {
                headerShown: false,
                tabBarHideOnKeyboard: true,
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
export default TabNavigatorOptions