import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '@utils/containerTypes'

type initialStateType = {
    itemList:ProductType[]
}

const initialState:initialStateType = {
    itemList:[]
}

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState,
    reducers:{
        addItemToWishlist(state,action:PayloadAction<ProductType>){
            const newItems = action.payload
            const itemIndex = state.itemList.findIndex(item => item.id==newItems.id);
            if(itemIndex==-1){
                state.itemList.push(newItems)
            }
        },
        removeItemFromWishlist(state,action:PayloadAction<ProductType>){
            const item = action.payload
            const newItemList = state.itemList.filter(item=>item.id!=item.id)
            state.itemList = newItemList
        }
    }
})


export const {addItemToWishlist,removeItemFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer