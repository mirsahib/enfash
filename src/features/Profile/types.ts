import { ProductType } from "@features/Product/types"
type OrderStatusTypes = "Delivered" | "Cancelled" | "In transit"
type OrderCardProps = {
    orderId: string
    orderStatus: OrderStatusTypes,
    orderDate: string,
    productList: {
        product: ProductType
        quantity: number
    }[]
    total: number,
    address: string
}
type OrderDetailsCardProps = {
    product:ProductType,
    quantity:number
}

type PromptProps={
    title:string,
    message:string
    visibility:boolean,
    promptAction:()=>void
}

type TrackOrderStatusProps={
    title:string,
    message:string,
    icon:string
}

type ProfilePropsType = {
    isHeaderRightPressed:boolean
}
type ProfileRightHeaderProps = {
    onPressed:()=>void
}

type CanHandleRightHeaderPressed = {
    gotoEditProfile:()=>void
} 
export type {
    OrderStatusTypes,
    OrderCardProps,
    OrderDetailsCardProps,
    PromptProps,
    TrackOrderStatusProps,
    ProfilePropsType,
    ProfileRightHeaderProps,
    CanHandleRightHeaderPressed
}