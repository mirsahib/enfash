import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { NavigatorScreenParams, RouteProp } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ProductType } from "@utils/containerTypes"
import { OrderStatusTypes } from "@features/Profile/types"
type AuthNavParams = {
    SignIn: any,
    Login: any
}
type HomeNavParams = {
    Home: any,
    Settings: any
}
type ProductNavParams = {
    Product: ProductType,
    Cart: any
}
type ProfileNavParams = {
    Profile:any
    OrderHistory:any,
    OrderDetails:{
        orderId:string
        orderStatus:OrderStatusTypes,
        total:number,
        orderDate:string
        productList:{
            product:ProductType,
            quantity:number
        }[],
        address:string
    },
    Payment:any
    Address:any
    PromoCode:any
    TrackOrder:any
    Faq:any
}
type TabNavParams = {
    HomeTab: HomeNavParams,
    MessageTab: any,
    CartTab: any,
    AccountTab: any,
    WishlistTab: any
}
type MainNavParams = {
    HomeNav: any,
    Search:any,
    ProductNav: any,
    MessageNav: any,
    CartNav: any,
    AccountNav: NavigatorScreenParams<ProfileNavParams>,
    WishlistNav: any
}

//screen props
type AuthRouteProps = RouteProp<AuthNavParams>
type HomeRouteProps = RouteProp<HomeNavParams>
type ProductsRouteProps = RouteProp<ProductNavParams, 'Product'>
type TabRouteProps = RouteProp<TabNavParams>
type OrderDetailsRouteProps = RouteProp<ProfileNavParams,'OrderDetails'>

//route props
type TabScreenProps = BottomTabScreenProps<TabNavParams>
type ProductScreenProps = NativeStackScreenProps<ProductNavParams>
type MainScreenProps = NativeStackScreenProps<MainNavParams>
type ProfileScreenProps = NativeStackScreenProps<ProfileNavParams>

export type {
    AuthNavParams,
    HomeNavParams,
    ProductNavParams,
    ProfileNavParams,
    TabNavParams,
    MainNavParams,
    AuthRouteProps,
    HomeRouteProps,
    ProductsRouteProps,
    TabRouteProps,
    OrderDetailsRouteProps,
    TabScreenProps,
    ProductScreenProps,
    MainScreenProps,
    ProfileScreenProps
}