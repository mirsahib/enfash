//import { RouteProp } from "@react-navigation/native";
import Home from "./container/Home";
import Message from "./container/Message";
import Cart from "./container/Cart";
import Profile from "./container/Profile";

export type HomeNavigationParams = {
    Home: any,
    Message:any,
    Cart:any,
    Profile:any
}

//export type CameraRouteProps = RouteProp<AuthNavigationParams>

const screen = {
    Home:Home,
    Message:Message,
    Cart:Cart,
    Profile:Profile
}

export default screen