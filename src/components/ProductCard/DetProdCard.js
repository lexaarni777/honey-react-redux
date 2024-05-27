import React, { useState } from "react"
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postCart } from "../../store/slices/cart/cartSlice";
import { useAuth } from "../../hooks/userAuth";
import { useDetProd} from "../../hooks/prodDetCard";
import { useSelector } from "react-redux";
import classes from "./DetProductCard.module.css";


function DetProdCard() {
    const { isAdmin, isAuth } = useAuth();
    const location = useLocation();
    const {cart} = useSelector(state => state.cart);

    console.log(location)
    
    const idProd = location.state.id; // Получаем id продукта
    console.log(idProd)
    const { id } = useAuth(); // Получаем id и корзину авторизованного пользователя
    const product = useDetProd(idProd); // Получаем продукт из стейта
    const dispatch = useDispatch();
    {console.log('1', isAuth, isAdmin)}
    console.log('jhvjvj', idProd);
    console.log(cart);
    console.log(id);
    console.log(product);

    const renderAddToCartButton = () => (
        console.log('2', isAuth, isAdmin),

        isAuth ? (
            <button onClick={() => dispatch(postCart({ idProd, id, cart }), console.log(cart))}>
                Добавить в корзину
            </button>
        ) : null
    );

 

    return (
        <div className={classes.DetProdCard}>
            <div className={classes.Galery}>
                <div className={classes.GaleryMini}></div>
                <img src={product.img} alt={product.name}></img>
            </div>
            <div className={classes.RightBlock}>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>{product.prise}</p>            
                {renderAddToCartButton()}
            </div>
            
        </div>
    );
}

export default DetProdCard;
