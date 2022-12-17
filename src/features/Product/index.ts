import { RouteProp } from "@react-navigation/native";
import Header from "./components/Header";
import Product from "./container/Product";
import HeaderRight from "./components/HeaderRight";
import Cart from "../../container/Cart";
import NavigationOptions from "./components/NavigationOptions";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ProductNavParams ={
    Product:{
        id:string,
        productImage:string,
        productName:string,
        productPrice:number,
    },
    Cart:any
}

export type ProductNavProps = RouteProp<ProductNavParams,'Product'>
export type Props =  NativeStackScreenProps<ProductNavParams>

const screen = {
    Header:Header,
    Product:Product,
    HeaderRight:HeaderRight,
    Cart:Cart,
    NavigationOptions:NavigationOptions
}

export default screen