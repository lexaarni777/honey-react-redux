import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../../axios/axios";
import { getDatabase, set, ref as refDatabase} from "firebase/database";
import { deleteObject, ref as refStorage} from "firebase/storage";
import { storage } from "../../../firebase";

const initialState = {
    products: [],
}

export const getProducts = createAsyncThunk(//обращение к северу для получения списка продуктов
    'fetchProducts/getProducts',
        async (_, {rejectWithValue, dispatch}) => {
            console.log('ghjdthrf')
            const response = await axios.get('products.json')
            console.log(response)
            dispatch(setProducts(response.data))
        }
)

export


const fetchProductsSlice = createSlice({
    name: 'fetchProducts',
    initialState,
    reducers:{
        setProducts: (state, action) => {
            console.log(state.products)
            console.log(action)
            state.products = action.payload
            console.log(state)
        },
        removeProduct:(state, action)=>{
            console.log(state)
            const date = getDatabase()
            console.log(date)
            console.log(action)
            set(refDatabase(date, 'products/' + action.payload), null)
            const desertRef = refStorage(storage, `images/${state.products[action.payload].name}.jpg`);
            console.log(desertRef)
            
           deleteObject(desertRef).then(() => {
                // File deleted successfully
            }).catch((error) => {
                // Uh-oh, an error occurred!
            });
              
           
            delete state.products[action.payload]

            state.products = state.products
            
        }
    },
    extraReducers:{
        [getProducts.pending]: ()=>console.log('fetchProductSlice pending'), //запускается одновреенно с вызовом функции
        [getProducts.fulfilled]: ()=>console.log('fetchProductSlice fulfilled'),// запускается кагда прошел зппрос успешно
        [getProducts.rejected]: ()=>console.log('fetchProductSlice rejected'),//запускается когда возникает ошибка
    }
})

console.log(fetchProductsSlice)

export const {setProducts, removeProduct} = fetchProductsSlice.actions
export default fetchProductsSlice.reducer