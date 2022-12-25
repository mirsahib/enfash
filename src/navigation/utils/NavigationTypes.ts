import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { RouteProp } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { ProductType } from "@utils/containerTypes"
type AuthNavParams={
    SignIn:any,
    Login:any
}
type HomeNavParams={
    Home:any,
    Settings:any
}
type ProductNavParams={
    Product:ProductType,
    Cart:any
}
type TabNavParams = {
    HomeTab:HomeNavParams,
    Message:any,
    Cart:any,
    Account:any,
}
type MainNavParams={
    HomeNav:any,
    ProductNav:any,
    MessageNav:any,
    CartNav:any,
}


type AuthRouteProps = RouteProp<AuthNavParams>
type HomeRouteProps = RouteProp<HomeNavParams>
type ProductsRouteProps = RouteProp<ProductNavParams,'Product'>
type TabRouteProps = RouteProp<TabNavParams>

type TabScreenProps = BottomTabScreenProps<TabNavParams>
type ProductScreenProps = NativeStackScreenProps<ProductNavParams>
type MainScreenProps = NativeStackScreenProps<MainNavParams>


export type {
    AuthNavParams,
    HomeNavParams,
    ProductNavParams,
    TabNavParams,
    MainNavParams,
    AuthRouteProps,
    HomeRouteProps,
    ProductsRouteProps,
    TabRouteProps,
    TabScreenProps,
    ProductScreenProps,
    MainScreenProps
}