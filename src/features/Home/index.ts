//import { RouteProp } from "@react-navigation/native";
import Home from "./container/Home";
import Message from "./container/Message";
import Cart from "./container/Cart";
import Profile from "./container/Profile";
import { RouteProp } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import TabBarOptions from "./components/TabBarOption";

export type HomeNavigationParams = {
    Home: any,
    Message:any,
    Cart:any,
    Account:any
}

export type HomeRouteProps = RouteProp<HomeNavigationParams>
export type Props = BottomTabScreenProps<HomeNavigationParams>



const screen = {
    Home:Home,
    Message:Message,
    Cart:Cart,
    Profile:Profile,
    TabBarOptions:TabBarOptions
}

export default screen