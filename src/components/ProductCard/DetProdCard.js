import React, { useState } from "react"
import { useLocation } from "react-router-dom";
import { getDatabase, ref, push, get, child, update, set, onValue  } from 'firebase/database';
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { postCart } from "../../store/slices/cart/cartSlice";
import { useAuth } from "../../hooks/userAuth";
import { useDetProd } from "../../hooks/prodDetCard";
import { useSelector } from "react-redux";
import Input from './../UI/Input/Input';
import axios from "../../axios/axios";

import { render } from 'react-dom';
import { imputUpdateProd, updateProdFinish , updateProdFinishAsync} from "../../store/slices/addProd/addProdSlice";

function DetProdCard() {
    const { isAdmin, isAuth } = useAuth();
    const location = useLocation();
    const {cart} = useSelector(state => state.cart);

    const {updateProd} = useSelector(state=>state.addProd) 
    
    const idProd = location.state.id; // Получаем id продукта
    console.log(idProd)
    const { id } = useAuth(); // Получаем id и корзину авторизованного пользователя
    const { product } = useDetProd(idProd); // Получаем продукт из стейта
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








    const renderProduct = () =>{
        console.log(isAdmin, isAuth);
        return(
       <div>
        {console.log('4', isAuth, isAdmin)}
  <p>{product.name}</p>
  <p>{product.prise}</p>
  <p>{product.description}</p>
  <img src={product.img} alt="альтернативный текст"></img>
  {renderAddToCartButton()}
</div>
    )};



    return (
        <div>
            {renderProduct()}
        </div>
    );
}

export default DetProdCard;
