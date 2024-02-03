import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    },
    editProd:{
        edit: false,
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
        imputUpdateProd:(state, action) => {
            state.updateProd[action.payload.name] = action.payload.value
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
        editProdBoolean:(state, action)=>{
            state.editProd.edit = action.payload
            
        },
        updateProd:(state, action)=>{
            state.editProd.edit = action.payload
        },
    }
})
export const {imputAddProd, imgAddProd, nullImputAddProd, editProdBoolean, updateProd, imputUpdateProd} = addProdSlice.actions
export default addProdSlice.reducer
