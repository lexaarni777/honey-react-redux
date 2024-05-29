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
        let ordersAdd = []
        if(ordersArr.length!=0){
            ordersAdd.push(...ordersArr)
        }
        let date = formatDate(new Date())
        let order = {}
        order.date = date
        order.order = cart        
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