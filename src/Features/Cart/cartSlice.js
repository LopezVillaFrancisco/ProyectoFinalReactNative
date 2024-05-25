import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {
            user: "UserIdLogged", 
            updatedAt: new Date().toLocaleString(),
            total: null,
            items: []
        }, 
    }, 
    reducers: {
        addCartItem : (state, { payload }) => {
            const zapatillaRepetida = state.value.items.find(
                (item) => item.id === payload.id
            ) 
            if (zapatillaRepetida) {
                const itemsUpdated = state.value.items.map((item) => {
                    if (item.id === payload.id) {
                        item.quantity += payload.quantity
                        return item
                    } 
                }) 
                const total = itemsUpdated.reduce((acc, item) =>(acc += item.precio*item.quantity) , 0 )
                state.value = {
                    ...state.value,
                    updatedAt: new Date().toLocaleString(),
                    total,
                    items: itemsUpdated, 
                } 
            }else{
                state.value.items.push(payload)
                const total = state.value.items.reduce((acc, item) =>(acc += item.precio*item.quantity) , 0 ) 
                state.value = {
                    ...state.value,
                    updatedAt: new Date().toLocaleString(),
                    total,
                } 
            }
        }, 
        removeCartItem: (state, { payload }) => {
            const updatedItems = state.value.items.filter(item => item.id !== payload.id);
            const total = updatedItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);        
            state.value = {
                ...state.value,
                updatedAt: new Date().toLocaleString(),
                total,
                items: updatedItems,
            };
        }, 
        clearCart: (state) => {
            state.value = {
                updatedAt: new Date().toLocaleString(),
                total: null,
                items: []
            };
        },
    }
}) 
 
export const {addCartItem , removeCartItem, clearCart} = cartSlice.actions 
export default cartSlice.reducer