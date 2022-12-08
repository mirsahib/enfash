//import { RouteProp } from "@react-navigation/native";
import SignIn from "./container/SignIn";
import Login from "./container/Login";

export type AuthNavigationParams = {
    SignIn: any,
    Login: any
}

//export type CameraRouteProps = RouteProp<AuthNavigationParams>

const screen = {
    SignIn:SignIn,
    Login:Login
}

export default screen