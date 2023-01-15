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
type AddAddressPropsType={
    isModalVisible:boolean,
    setModalVisibility:()=>void
}

type AddAddressCardProps = {
    title: string
    address:string,
    status:"ACTIVE"|"DEACTIVE",
    selectCard:()=>void
}
type OrderDetailsCardHeaderPropsType = {
    orderId:string;
    orderStatus:OrderStatusTypes;
    total:number;
    orderDate:string;
    address:string;
};
export type {
    OrderStatusTypes,
    OrderCardProps,
    OrderDetailsCardProps,
    OrderDetailsCardHeaderPropsType,
    PromptProps,
    TrackOrderStatusProps,
    ProfilePropsType,
    ProfileRightHeaderProps,
    CanHandleRightHeaderPressed,
    AddAddressPropsType,
    AddAddressCardProps
}