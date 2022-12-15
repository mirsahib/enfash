import { RouteProp } from "@react-navigation/native";
import Product from "./container/Product";

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
    Product:Product
}

export default screen