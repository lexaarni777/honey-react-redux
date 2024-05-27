import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, onValue  } from 'firebase/database';
import { getCart } from "../cart/cartSlice";
import { useDispatch } from "react-redux";

const initialState = {//задем начальный стейт для пользователя задавая параметры которые нам будут необходимы
    isAuth: false, //видиость окна авторизации
    isLoader: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:{//РЕДЮЧЕРЫ РАБОТЫЮТ С ПОЛЬЗОВАТЕЛЕМ И ИЗМЕНЯЮТ СТЕЙТ
        isOpenAuth(state){//получаем пользователя          
            state.isAuth = true;            
        },
        isCloseAuth(state){//удаляем пользователя из сесии обнуляя его стейт
            state.isAuth = false;
        },
        isLoaderTrue(state){
            state.isLoader = true;
        },
        isLoaderFalse(state){
            state.isLoader = false;
        },
    },
});


export const {isOpenAuth, isCloseAuth, isLoaderFalse, isLoaderTrue} = uiSlice.actions

export default uiSlice.reducer