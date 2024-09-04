import { configureStore } from "@reduxjs/toolkit";
import fetchProductsSlice from "./slices/product/fetchProductSlice";
import userSlice from "./slices/user/userSlice";
import cartSlice from "./slices/cart/cartSlice";
import addProdSlice from "./slices/addProd/addProdSlice";
import uiSlice from "./slices/uiSlice/uiSlice";
import ordersSlice from "./slices/orders/ordersSlice";

//создаем стор всего приложения
const  store = configureStore({
    reducer: {
        products: fetchProductsSlice, //сдесь грузятся все товары
        user: userSlice,
        cart: cartSlice,
        addProd: addProdSlice,
        ui: uiSlice,
        orders: ordersSlice,
    }
})

console.log(store)

export default store