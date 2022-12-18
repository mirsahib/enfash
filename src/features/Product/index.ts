import { RouteProp } from "@react-navigation/native";
import Header from "./components/Header";
import Product from "./container/Product";
import HeaderRight from "./components/HeaderRight";
import Cart from "../../container/Cart";
import NavigationOptions from "./components/NavigationOptions";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type ProductType = {
    id:string,
    title:string,
    price:number,
    description:string
    category:string,
    image:string,
    rating:{rate:number,count:number}
}

export type ProductNavParams ={
    Product:ProductType
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