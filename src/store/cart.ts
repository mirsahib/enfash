import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '@utils/containerTypes';

type InitialStateType = {
    itemList: Array<{
        product: ProductType | null;
        count: number;
        productPrice: number;
    }>;
    totalPrice: number;
    totalItem: number;
};

const initialState: InitialStateType = {
    itemList: [
        {
            product: null,
            count: 0,
            productPrice: 0
        }
    ],
    totalPrice: 0,
    totalItem: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ProductType>) {
            const newItem = action.payload;
            const productCount = state.totalItem;
            //check if cart is empty
            if (productCount == 0) {
                state.itemList = [
                    { product: newItem, count: 1, productPrice: newItem.price }
                ];
                state.totalItem = state.totalItem + 1;
                state.totalPrice = state.totalPrice + newItem.price;
            } else {
                const productIndex = state.itemList.findIndex(
                    (item) => item.product?.id == newItem.id
                );
                //check if product exist
                if (productIndex == -1) {
                    state.itemList.push({
                        product: newItem,
                        count: 1,
                        productPrice: newItem.price
                    });
                    state.totalItem = state.totalItem + 1;
                    state.totalPrice = state.totalPrice + newItem.price;
                }
            }
        },
        increaseCart(state, action: PayloadAction<ProductType>) {
            const newItem = action.payload;
            const productCount = state.totalItem;
            //check if cart is empty
            if (productCount == 0) {
                state.itemList = [
                    { product: newItem, count: 1, productPrice: newItem.price }
                ];
            } else {
                const productIndex = state.itemList.findIndex(
                    (item) => item.product?.id == newItem.id
                );
                //check if product exist
                if (productIndex != -1) {
                    const stateProduct = state.itemList[productIndex];
                    stateProduct.count = stateProduct.count + 1;
                    stateProduct.productPrice =
                        stateProduct.productPrice + newItem.price;
                    state.itemList[productIndex] = stateProduct;
                } else {
                    state.itemList.push({
                        product: newItem,
                        count: 1,
                        productPrice: newItem.price
                    });
                }
            }
            state.totalPrice = state.totalPrice + newItem.price;
        },
        decreaseCart(state, action: PayloadAction<ProductType>) {
            const newItem = action.payload;
            const productCount = state.totalItem;
            //check if cart is empty
            if (productCount != 0) {
                const productIndex = state.itemList.findIndex(
                    (item) => item.product?.id == newItem.id
                );
                //check if product exist
                if (productIndex != -1) {
                    if (state.itemList[productIndex].count == 1) {
                        state.itemList.splice(productIndex, 1);
                    } else {
                        const stateProduct = state.itemList[productIndex];
                        stateProduct.count = stateProduct.count - 1;
                        stateProduct.productPrice =
                            stateProduct.productPrice - newItem.price;
                        state.itemList[productIndex] = stateProduct;
                    }
                    state.totalPrice = state.totalPrice - newItem.price;
                    state.totalItem = state.totalItem - 1;
                }
            }
        },
        removeFromCart(state, action: PayloadAction<ProductType>) {
            const newItem = action.payload;
            const productIndex = state.itemList.findIndex(
                ({ product }) => product?.id === newItem.id
            );
            const productPrice = state.itemList[productIndex].productPrice;
            const count = state.itemList[productIndex].count;
            state.itemList.splice(productIndex, 1);
            state.totalItem = state.totalItem - 1;
            state.totalPrice = state.totalPrice - productPrice;
        }
    }
});

export const { addToCart, increaseCart, removeFromCart, decreaseCart } =
    cartSlice.actions;
export default cartSlice.reducer;
