import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/Counter/counterSlice";
import shopReducer from "../Features/Shop/shopSlice";
import cartReducer from "../Features/Cart/cartSlice"; 
import authReducer from '../Features/User/userSlice'
import { shopApi } from "../services/shopService";
import { authApi } from "../services/authService";
import { setupListeners } from "@reduxjs/toolkit/query";  

const store = configureStore({
  reducer: {
    counter: counterReducer,
    shop: shopReducer,
    cart: cartReducer, 
    auth: authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware), 
});

setupListeners(store.dispatch);

export default store;
