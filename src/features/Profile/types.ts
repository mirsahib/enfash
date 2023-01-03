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

export type {
    OrderStatusTypes,
    OrderCardProps,
    OrderDetailsCardProps,
    PromptProps,
    TrackOrderStatusProps
}