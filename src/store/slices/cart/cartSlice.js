import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, set } from "firebase/database";
import { useAuth } from '../../../hooks/userAuth';
import axios from "../../../axios/axios";

const initialState = {
   productsCart: {},
}


export const postCart = createAsyncThunk(
    
    'cart/postCart', async (arr, {rejectWithValue, dispatch}) => {
        
        console.log(arr)
        const cart = Object.assign({},arr.cart.productsCart)
        const idProd = arr.idProd
        const id = arr.id
        console.log(idProd)
        console.log(cart)
        console.log(cart[idProd])
        console.log(id)

        if(!cart[idProd]){
            cart[idProd] = 1
            console.log(cart)
            } else{
                if(cart[idProd]){
                cart[idProd] += 1
                console.log(cart)}
                    else{
                        cart[idProd] = 1
                        console.log(cart)
                    }
            }
       
                
                    const db = getDatabase();
                    console.log(db)
                    await set(ref(db, 'cart/' + id), {
                      ...cart
                    });                
                         
        dispatch(addProdCart(cart))
     
    }
)

 export const deleteProdInCart = createAsyncThunk(
    'cart/deleteProdInCart', async(arr, {rejectWithValue, dispatch}) => {
        console.log(arr)
        const cart = Object.assign({}, arr.cart.productsCart)
        const idProd = arr.idProd
        const id = arr.id

        delete cart[idProd]

        console.log(cart)
        try{
            const db = getDatabase();
            await set(ref(db, 'cart/' + id),{
                ...cart
            });
            dispatch(deleteProdInCartR(cart))
        }catch(e){
            console.log(e)
        }

    }
 )



export const getCart = createAsyncThunk(
    'cart/getCart', async (id, {rejectWithValue, dispatch}) => {
        
        console.log(id)
                console.log('cart/'+ id + '.json')
                const response = await axios.get('cart/'+ id + '.json')
        console.log(response.data)
        dispatch(setCart(response.data))
        
    }
)



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        setCart: (state, action) => {
            state.productsCart = action.payload
            console.log(state)
        },
        addProdCart(state, action){
           console.log(action)
           state.productsCart = action.payload
        },
        deleteProdInCartR(state, action){
            state.productsCart = action.payload
        }
    },
    extraReducers:{
        [getCart.fulfilled]: () => console.log('fulfiled'),
        [getCart.pending]: () => console.log('fulfiled'),
        [getCart.rejected]: () => console.log('fulfiled'),   
    }
})

export const {setCart, addProdCart, deleteProdInCartR} = cartSlice.actions

export default cartSlice.reducer