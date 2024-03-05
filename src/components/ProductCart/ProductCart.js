import React from "react"
import classes from "./ProductCart.module.css"
import Button from "../UI/Input/Button/Button"
import { useDispatch, useSelector } from "react-redux";
import { deleteProdInCart } from "../../store/slices/cart/cartSlice";
import { useAuth } from "../../hooks/userAuth";
function ProductCard(props){
    
    console.log(props)
    const dispatch = useDispatch()

    const {id} = useAuth()
    const cart = useSelector(state => state.cart)
    const idProd = props.id


     return(
        <div className={classes.ProductCart}>
            <h1>Название товара: {props.name}</h1>
            <p>Цена за еденицу: {props.prise}</p>
            <p>Количество в заказе: {props.quantity}</p>    
            <p>Всего: {props.quantity*props.prise}</p>
            <Button
                value="Удалить из корзины"
                onClick={() => dispatch(deleteProdInCart({ idProd, id, cart}))}
            ></Button>     
         </div>
    )
}

export default ProductCard
