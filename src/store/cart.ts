import { createSlice } from '@reduxjs/toolkit'

type InitialStateType = {
    cartList: Array<any>,
}

const initialState: InitialStateType = {
    cartList: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addcart(state, action){
            const cartList = action.payload
            state.cartList =cartList
        }, 
    }
})

export const { addcart } = cartSlice.actions
export default cartSlice.reducer