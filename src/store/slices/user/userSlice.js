import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, onValue  } from 'firebase/database';
import { getCart } from "../cart/cartSlice";
import { useDispatch } from "react-redux";

const initialState = {//задем начальный стейт для пользователя задавая параметры которые нам будут необходимы
    email: null,
    token: null,
    id: null,
    // cart: null,
}




const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{//РЕДЮЧЕРЫ РАБОТЫЮТ С ПОЛЬЗОВАТЕЛЕМ И ИЗМЕНЯЮТ СТЕЙТ
        setUser(state, action){//получаем пользователя
            {console.log(state)}
            {console.log(action)}
            
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            
        },
        removeUser(state){//удаляем пользователя из сесии обнуляя его стейт
            state.email = null;
            state.token = null;
            state.id = null;
            
            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            localStorage.removeItem('expirationDate')
            localStorage.removeItem('email')
            {console.log(state)}
        },
    },
});


export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer