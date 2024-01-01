import React, {useEffect} from "react"
import { NavLink } from "react-router-dom"
import axios from "../../axios/axios"
import { getDatabase, ref, set} from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../store/slices/product/fetchProductSlice";
import { postCart } from "../../store/slices/cart/cartSlice";
import { useAuth } from "../../hooks/userAuth";

function ProductCard(props){
    
    console.log(props)
    const idProd = props.id
    const product = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const {id,isAuth} = useAuth()
    const cart = useSelector(state => state.cart)
    // const clickDelitProd = (id) => dispatch(removeProduct(id))

 

     return(
        <div>
            <h1>{props.name}</h1>
            <img src={product[idProd].img} alt="альтернативный текст"></img>
            <p>{props.prise}</p>

            <NavLink 
                to={{pathname:'/counter/'+ props.id}}
                state = {{id: props.id}}
                >Посмотреть</NavLink>
            {isAuth?
            <button onClick={() => dispatch(removeProduct(idProd))}>Удалить</button>
            :null
            }
            
            <button onClick={() => dispatch(postCart({idProd, id, cart}))}>Добавить в корзину</button>
         </div>
    )
}

export default ProductCard
