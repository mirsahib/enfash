import { RouteProp } from "@react-navigation/native";
import Header from "./components/Header";
import Product from "./container/Product";
import HeaderRight from "./components/HeaderRight";

export type ProductNavParams ={
    Product:{
        id:string,
        productImage:string,
        productName:string,
        productPrice:number,
    }
}

export type ProductNavProps = RouteProp<ProductNavParams,'Product'>


const screen = {
    Header:Header,
    Product:Product,
    HeaderRight:HeaderRight,
}

export default screen