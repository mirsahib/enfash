import { StyleProp, ViewStyle } from "react-native"

type ProductType = {
    id:string,
    title:string,
    price:number,
    description:string
    category:string,
    image:string,
    rating:{rate:number,count:number}
}

type ReviewCardPropsType = {
    containnerStyle?:StyleProp<ViewStyle>
    image:string,
    name:string
    ratingValue:number,
    reviewText:string
}
export type {
    ProductType,
    ReviewCardPropsType
}