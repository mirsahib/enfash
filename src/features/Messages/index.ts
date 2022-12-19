import { RouteProp } from "@react-navigation/native"
import Message from "./container/Message"

export type MessageNavigationParams = {
    Home: any,
    Message:any,
    Cart:any,
    Account:any
}

export type HomeRouteProps = RouteProp<MessageNavigationParams>
//export type Props = BottomTabScreenProps<MessageNavigationParams>



const screen = {
    Message:Message
}

export default screen