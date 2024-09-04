import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, set } from "firebase/database";
import { getProducts } from "../product/fetchProductSlice";
const initialState = {
    addProd: {
        name: '',
        prise: '',
        description: '',
        img: '',
    },
    updateProd: {
        name: '',
        prise: '',
        description: '',
        img: '',
    }
}

export const updateProdFinishAsync = createAsyncThunk(
    'prod/updateProdFinishAsync', async (arr, {rejectWithValue, dispatch}) => {
        console.log(arr)
        const update = Object.assign({},arr.updateProd)
        const idProd = arr.idProd
        console.log(update, idProd)
        console.log('1')
        
        try{
            const db = getDatabase();
            await set(ref(db, 'products/' + idProd),{
                ...update
            });
            console.log('3')
            dispatch(getProducts())
            console.log('4')
        }catch(e){
            console.log(e)
        }
        
    }

)

const addProdSlice = createSlice({
    name: 'addProd',
    initialState,
    reducers:{
        imputAddProd:(state, action) => {
            state.addProd[action.payload.name] = action.payload.value
            console.log(action.payload)
        },
        imputUpdateProd:(state, action) => {
            console.log(action)
            state.updateProd[action.payload.name] = action.payload.value
            console.log(action.payload)
        },
        updateProd:(state, action) => {
            console.log(action)
            state.updateProd = action.payload
            console.log(action.payload)
        },
        imgAddProd:(state, action)=>{
            state.addProd.img = action.payload
        },
        nullImputAddProd:(state)=>{
            state.addProd = {
                name: '',
                prise: '',
                description: '',
                img: '',
            }
        },
        updateProdFinish:(state, action)=>{
            console.log(state)
            console.log(action)
        },
    }
})
export const {imputAddProd, imgAddProd, nullImputAddProd,  updateProdFinish, imputUpdateProd, updateProd} = addProdSlice.actions
export default addProdSlice.reducer
