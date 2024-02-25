import React, {useEffect} from "react"
import { NavLink } from "react-router-dom"
import axios from "../../axios/axios"
import { getDatabase, ref, set} from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../store/slices/product/fetchProductSlice";
import { postCart } from "../../store/slices/cart/cartSlice";
import { useAuth } from "../../hooks/userAuth";
import classes from "./ProductCard.module.css"
import Button from "../UI/Input/Button/Button";
import { updateProd } from "../../store/slices/addProd/addProdSlice";

function ProductCard(props){
    
    console.log(props)
    const idProd = props.id
    const product = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const {id,isAuth,isAdmin} = useAuth()
    const cart = useSelector(state => state.cart)
    // const clickDelitProd = (id) => dispatch(removeProduct(id))

 

     return(
        <div className={classes.ProductCard}>
            <p className={classes.nameProd}>{props.name}</p>
            <NavLink 
                to={{pathname:'/counter/'+ props.id}}
                state = {{id: props.id}}>
                    <img src={product[idProd].img} alt="альтернативный текст"></img>
            </NavLink>
            <p>Цена за 1 кг: {props.prise} руб</p>          
            <Button 
                onClick={() => dispatch(postCart({idProd, id, cart}))}
                value="Добавить в корзину">
            </Button>
            {isAuth&&isAdmin?
                <div>
                    <Button
                        onClick={() => dispatch(removeProduct(idProd))}
                        value="Удалить"
                    ></Button>
                    <NavLink 
                        to={{pathname:'/updateprod/'+ props.id}}
                        state = {{id: props.id}}
                        onClick={
                            () => dispatch(updateProd(product[idProd]))}
                        >редактировать
                    </NavLink>
                </div>
            :null}
        </div>
    )
}

export default ProductCard
