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
import { editProdBoolean } from "../../store/slices/addProd/addProdSlice";
import { render } from 'react-dom';

function DetProdCard() {
    const { isAdmin, isAuth } = useAuth();
    const location = useLocation();
    const {cart} = useSelector(state => state.cart);
    const {isEdit} = useSelector(state => state.addProd.editProd.edit);
    const idProd = location.state.id; // Получаем id продукта
    const { id } = useAuth(); // Получаем id и корзину авторизованного пользователя
    const { product } = useDetProd(idProd); // Получаем продукт из стейта
    const dispatch = useDispatch();
    {console.log('1', isAuth, isAdmin)}
    console.log('jhvjvj', idProd);
    console.log(cart);
    console.log(id);

    const renderAddToCartButton = () => (
        console.log('2', isAuth, isAdmin),
        isAuth ? (
            <button onClick={() => dispatch(postCart({ idProd, id, cart }))}>
                Добавить в корзину
            </button>
        ) : null
    );

    const renderEditButton = () => (
        console.log('3', isAuth, isAdmin, ),
        isAdmin && isAuth ? (
            <button onClick={() => dispatch(editProdBoolean(true))}>
                Редактировать
            </button>
        ) : null
    );

    const onChangeInput = event => {
        event.preventDefault()

    };


    const renderProduct = () =>{
        isEdit&&isAdmin&&isAuth ? (
            <form>
            <Input
                        label='Наименование товара'
                        type='text'
                        name='name'
                        value={product.name}
            ></Input>
            <Input
                        label='Цена'
                        name='prise'
                        type='number'
                        onChange={onChangeInput}
                        value={product.prise}
                    ></Input>
            <Input
                label='Описание товара'
                        name='description'
                        type='text'
                        onChange={onChangeInput}
                        value={product.description}
            ></Input>
            
            </form>
        ) : <div>
        {console.log('4', isAuth, isAdmin)}
  <p>{product.name}</p>
  <p>{product.prise}</p>
  <p>{product.description}</p>
  <img src={product.img} alt="альтернативный текст"></img>
  {renderAddToCartButton()}
  {renderEditButton()}
  {renderProduct()}
</div>
    };



    return (
        <div>
            {renderProduct()}
        </div>
    );
}

export default DetProdCard;
