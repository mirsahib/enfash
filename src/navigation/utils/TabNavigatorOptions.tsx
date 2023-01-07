import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { MainNavParams, TabScreenProps } from "./NavigationTypes"
import Icon from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Pressable, View } from "react-native"
import { useTheme } from "react-native-paper"


const TabNavigatorOptions = (props: TabScreenProps) => {
    const routeName = props.route.name
    const theme = useTheme()
    let options: BottomTabNavigationOptions = {}
    const navigation = useNavigation<NativeStackNavigationProp<MainNavParams>>()

    switch (routeName) {
        case 'HomeTab':
            options = {
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarIcon: () => <Icon name="home" color={"black"} size={25} />,
                tabBarLabel: "Home",
                tabBarInactiveTintColor:'black',
                tabBarActiveTintColor:theme.colors.tertiary
            }
            break
        case 'MessageTab':
            options = {
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
        case 'CartTab':
            options = {
                headerShown: false,
                tabBarIcon: ({focused,color,size}) => (
                    <View style={{
                        backgroundColor:focused?theme.colors.primaryContainer:theme.colors.background,
                        width:80,
                        height:80,
                        borderRadius:80/2,
                        justifyContent:'center',
                        alignItems:'center',
                        borderWidth:5,
                        borderColor:'rgba(158, 150, 150, .5)',
                        bottom:10
                        }}>
                        <Icon name="shoppingcart" color={"black"} size={35} />
                    </View>
                ),
                tabBarLabel: "",
            }
            break
        case "WishlistTab":
            options = {
                headerShown: false,
                tabBarIcon: () => <MaterialIcons name="favorite-border" color={"black"} size={25} />,
                tabBarLabel: "Wishlist",
                tabBarInactiveTintColor:'black',
                tabBarActiveTintColor:theme.colors.tertiary
            }
            break
        case 'AccountTab':
            options = {
                headerShown: false,
                tabBarIcon: () => <Icon name="user" color={"black"} size={25} />,
                tabBarLabel: "Profile",
                tabBarButton: (props) => (
                    <Pressable {...props} onPress={() => navigation.navigate("AccountNav", { screen: "Profile" })}>
                        {props.children}
                    </Pressable>
                )
            }
            break
        default:
            throw new Error("Route Name is not supported")
    }
    return options
}
export default TabNavigatorOptions