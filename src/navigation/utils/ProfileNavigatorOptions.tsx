import { ProfileScreenProps } from './NavigationTypes'
import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

const ProfileNavigatorOptions = (props: ProfileScreenProps) => {
    const routeName = props.route.name
    let options: NativeStackNavigationOptions = {}

    switch (routeName) {
        case "Profile":
            options = {
                animation: "slide_from_right",
                headerTitle: "Profile"
            }
            break
        case "OrderHistory":
            options = {
                animation: "slide_from_right",
                headerTitle: "Order History"
            }
            break
        case "Payment":
            options = {
                animation: "slide_from_right",
                headerTitle: "Payment"
            }
            break
        case "Address":
            options = {
                animation: "slide_from_right",
                headerTitle: "Address"
            }
            break
        case "PromoCode":
            options = {
                animation: "slide_from_right",
                headerTitle: "Promo Code"
            }
            break
        case "TrackOrder":
            options = {
                animation: "slide_from_right",
                headerTitle: "Track Order"
            }
            break
        case "Faq":
            options = {
                animation: "slide_from_right",
                headerTitle: "FAQ"
            }
            break
        case "OrderDetails":
            options = {
                animation: "slide_from_right",
                headerTitle: "Order Details"
            }
            break
        default:
            throw new Error("Route name not supported")
    }

    return options
}

export default ProfileNavigatorOptions