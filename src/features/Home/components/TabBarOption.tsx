import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import SearchComponent from "./SearchComponent"
import {Props} from "../"
import Icon from 'react-native-vector-icons/AntDesign'


const TabBarOptions = (props:Props)=>{
    const routeName = props.route.name
    let result:BottomTabNavigationOptions={}

    switch(routeName) {
        case 'Home':
            result={
                headerTitle: () => <SearchComponent />,
                tabBarIcon: () => <Icon name="home" color={"black"} size={25} />,
                tabBarLabel: "Home"
            }
            break
        case 'Message':
            result={
                headerShown: false,
                tabBarIcon: () => <Icon name="message1" color={"black"} size={25} />,
                tabBarLabel: "Message"
            }
            break
        case 'Cart':
            result={
                headerShown: false,
                tabBarIcon: () => <Icon name="shoppingcart" color={"black"} size={25} />,
                tabBarLabel: "Cart"
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