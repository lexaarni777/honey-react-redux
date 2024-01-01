import { configureStore } from "@reduxjs/toolkit";
import fetchProductsSlice from "./slices/product/fetchProductSlice";
import userSlice from "./slices/user/userSlice";
import cartSlice from "./slices/cart/cartSlice";
import addProdSlice from "./slices/addProd/addProdSlice";

//создаем стор всего приложения
const  store = configureStore({
    reducer: {
        products: fetchProductsSlice, //сдесь грузятся все товары
        user: userSlice,
        cart: cartSlice,
        addProd: addProdSlice
    }
})

console.log(store)

export default store