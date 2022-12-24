import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '@utils/containerTypes'

type InitialStateType = {
    itemList: Array<{
        product: ProductType | null,
        count: number
        productPrice: number
    }>
    totalPrice: number
    totalProduct: number
}

const initialState: InitialStateType = {
    itemList: [
        {
            product: null,
            count: 0,
            productPrice: 0
        }
    ],
    totalPrice: 0,
    totalProduct: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCartOnce(state, action: PayloadAction<ProductType>) {
            const newItem = action.payload
            const productCount = state.totalProduct
            //check if cart is empty
            if (productCount == 0) {
                state.itemList = [{ product: newItem, count: 1, productPrice: newItem.price }]
                state.totalProduct = state.totalProduct + 1
                state.totalPrice = state.totalPrice + newItem.price
            } else {
                const productIndex = state.itemList.findIndex(item => item.product?.id == newItem.id)
                //check if product exist
                if (productIndex == -1) {
                    state.itemList.push({
                        product: newItem,
                        count: 1,
                        productPrice: newItem.price
                    })
                    state.totalProduct = state.totalProduct + 1
                    state.totalPrice = state.totalPrice + newItem.price
                }
            }
            
            //console.log('add to cart', current(state))
        },
        addTocart(state, action: PayloadAction<ProductType>) {
            const newItem = action.payload
            const productCount = state.totalProduct
            //check if cart is empty
            if (productCount == 0) {
                state.itemList = [{ product: newItem, count: 1, productPrice: newItem.price }]
            } else {
                const productIndex = state.itemList.findIndex(item => item.product?.id == newItem.id)
                //check if product exist
                if (productIndex != -1) {
                    const stateProduct = state.itemList[productIndex]
                    stateProduct.count = stateProduct.count + 1
                    stateProduct.productPrice = stateProduct.productPrice + newItem.price
                    state.itemList[productIndex] = stateProduct
                } else {
                    state.itemList.push({
                        product: newItem,
                        count: 1,
                        productPrice: newItem.price
                    })
                }
            }
            state.totalProduct = state.totalProduct + 1
            state.totalPrice = state.totalPrice + newItem.price
            //console.log('add to cart', current(state))
        },
        removeFromCart(state, action: PayloadAction<ProductType>) {
            const newItem = action.payload
            const productCount = state.totalProduct
            //check if cart is empty
            if (productCount != 0) {
                const productIndex = state.itemList.findIndex(item => item.product?.id == newItem.id)
                //check if product exist
                if (productIndex != -1) {
                    if (state.itemList[productIndex].count == 1) {
                        state.itemList.splice(productIndex, 1)
                    } else {
                        const stateProduct = state.itemList[productIndex]
                        stateProduct.count = stateProduct.count - 1
                        stateProduct.productPrice = stateProduct.productPrice - newItem.price
                        state.itemList[productIndex] = stateProduct
                    }
                    state.totalPrice = state.totalPrice - newItem.price
                    state.totalProduct = state.totalProduct - 1
                }
            }
            //console.log('remove from cart', current(state))
        }
    }
})

export const { addToCartOnce, addTocart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer