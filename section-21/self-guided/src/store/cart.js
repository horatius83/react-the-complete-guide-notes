import { createSlice } from "@reduxjs/toolkit";

// { name: string, quantity: number }
const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const index = state.items.findIndex((item) => item.title === action.payload.title);
            if (index > -1) {
                state.items[index].quantity++;
            } else {
                state.items.push({title: action.payload.title, price: action.payload.price, quantity: 1});
            }
        },
        removeItem(state, action) {
            const index = state.items.findIndex((item) => item.title === action.payload.title);
            if (index > -1) {
                if (state.items[index].quantity === 1) {
                    state.items = state.items.filter(item => item.title !== action.payload.title);
                } else {
                    state.items[index].quantity--;
                }
            } else {
                console.error(`Item ${action.payload} does not exist in cart`);
            }
        },
        clearItems(state) {
            state.items = [];
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;