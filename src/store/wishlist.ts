import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'
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
        addToWishlist(state,action:PayloadAction<ProductType>){
            const newItems = action.payload
            const itemIndex = state.itemList.findIndex(item => item.id==newItems.id);
            if(itemIndex==-1){
                state.itemList.push(newItems)
            }
        },
        removeFromWishlist(state,action:PayloadAction<ProductType>){
            const newItem = action.payload
            const newItemList = state.itemList.filter(item=>item.id!=newItem.id)
            state.itemList = newItemList
        }
    }
})


export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer