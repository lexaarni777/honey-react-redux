import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../../axios/axios";
import { push } from 'firebase/database';
import { getDatabase, ref, set } from "firebase/database";
import { deleteCartInOrders, nullCart } from "../cart/cartSlice";
const initialState = {
    orders: []
}


function formatDate(date) {
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
    let year = date.getFullYear();
  
    return day + '.' + month + '.' + year;
  }
  

export const postOrders= createAsyncThunk(
    
    'orders/postOrders', async (arr, {rejectWithValue, dispatch}) => {
        
        console.log(arr)
        const cart = {...arr.cart}
        const ordersArr = arr.orders || []
        const id = arr.id
        const products = {...arr.products}
        console.log(products)

        let ordersAdd = []
        if(ordersArr.length!=0){
            ordersAdd.push(...ordersArr)
        }
        let date = formatDate(new Date())
        
        // Создаем объект order с датой
        let order = {
            date: date,
            order: {}
        };
        
        console.log(order);
        
        // Проходим циклом по каждому ключу в объекте cart (корзина)
        for (let key in cart) {
            console.log(key); // Выводим ключ товара
            console.log(order); // Выводим текущее состояние объекта order
            console.log(cart[key]); // Выводим количество товара в корзине
        
            // Убедитесь, что объект order.order уже имеет ключ товара как свойство.
            // Если нет, то создаем объект для этого свойства
            if (!order.order[key]) {
            order.order[key] = {};
            }
            
            // Теперь можно безопасно добавить свойство quantityProd, так как мы уверены,
            // что объект для этого ключа товара существует
            order.order[key].quantityProd = cart[key];
            console.log(order);
            
            // Аналогичная проверка: добавляем свойство price к товару
            if (products[key] && products[key].prise) {
            order.order[key].price = products[key].prise;
            }
            console.log(order);
        }
  
        console.log(order)
        ordersAdd.push(order)
        console.log('то что было', ordersArr)
        console.log('то что добавляем', ordersAdd)

        const db = getDatabase();
                    console.log(db)
                    await set(ref(db, 'orders/' + id), {
                      ...ordersAdd
                    });                
        

        
        dispatch(addOrders(ordersAdd))
        dispatch(deleteCartInOrders(id))
 
    }
)


export const getOrders = createAsyncThunk(
    'orders/getOrders', async (id, {rejectWithValue, dispatch}) => {
        
        console.log(id)
                console.log('cart/'+ id + '.json')
                const response = await axios.get('orders/'+ id + '.json')
        console.log(response.data)
        dispatch(setOrders(response.data))
        
    }
)

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers:{
        setOrders: (state, action)=>{
            state.orders = action.payload
        },
        addOrders: (state, action)=>{
            state.orders = action.payload
        }
    }
})

export const {setOrders, addOrders} = ordersSlice.actions

export default ordersSlice.reducer