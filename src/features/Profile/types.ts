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
export type {
    OrderStatusTypes,
    OrderCardProps,
    OrderDetailsCardProps
}