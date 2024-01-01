import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    addProd: {
        name: '',
        prise: '',
        description: '',
        img: '',
    }
}

const addProdSlice = createSlice({
    name: 'addProd',
    initialState,
    reducers:{
        imputAddProd:(state, action) => {
            state.addProd[action.payload.name] = action.payload.value
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
        }
    }
})
export const {imputAddProd, imgAddProd, nullImputAddProd} = addProdSlice.actions
export default addProdSlice.reducer
