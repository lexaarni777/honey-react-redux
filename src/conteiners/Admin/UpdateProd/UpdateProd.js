import React, { useState } from "react"
import { useLocation } from "react-router-dom";
import { getDatabase, ref, push, get, child, update, set, onValue  } from 'firebase/database';
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../hooks/userAuth";
import { useDetProd } from "../../../hooks/prodDetCard";
import { useSelector } from "react-redux";
import Input from '../../../components/UI/Input/Input'
import { render } from 'react-dom';
import { imputUpdateProd, updateProdFinish , updateProdFinishAsync} from "../../../store/slices/addProd/addProdSlice";
import Button from "../../../components/UI/Input/Button/Button";

function UpdateProd(props) {
    const { isAdmin, isAuth } = useAuth();
    const location = useLocation();
    console.log(props)
    console.log(location)
   
    const {updateProd} = useSelector(state=>state.addProd) 
    
    const idProd = location.state.id; // Получаем id продукта
    console.log(idProd)
    const { id } = useAuth(); // Получаем id и корзину авторизованного пользователя
    const { product } = useDetProd(idProd); // Получаем продукт из стейта
    const dispatch = useDispatch();
    {console.log('1', isAuth, isAdmin)}
    console.log('jhvjvj', idProd);
    
    console.log(id);
    console.log(product);

  


    const submitForm = event => {
        event.preventDefault()
       
    }




    const onChangeInput = event => {
        const val = {
            name: event.target.name,
            value: event.target.value
        }
        dispatch(imputUpdateProd(val))
    };


    const renderProduct = () =>{
        console.log(isAdmin, isAuth);
        return(
        
            <form onSubmit={submitForm}>
            <Input
                        label='Наименование товара'
                        type='text'
                        name='name'
                        value={product.name}
                        onChange={onChangeInput}
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

            <Button
                onClick={()=>dispatch(updateProdFinishAsync({updateProd, idProd}))}
                value='Обновить'
            >
            </Button>
                   
            </form>
    )};



    return (
        <div>
            {renderProduct()}
        </div>
    );
}

export default UpdateProd;
