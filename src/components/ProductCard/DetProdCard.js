import React, { useState } from "react"
import { useLocation } from "react-router-dom";
import { getDatabase, ref, push, get, child, update, set, onValue  } from 'firebase/database';
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { postCart } from "../../store/slices/cart/cartSlice";
import { useAuth } from "../../hooks/userAuth";
import { useDetProd } from "../../hooks/prodDetCard";
import { useSelector } from "react-redux";
function DetProdCard(){


    const location = useLocation();
    const cart = useSelector(state => state.cart)
    const idProd = location.state.id //Получаем id продукта
    const {id} = useAuth(); //Получаем id и корзину авторизованного пользователя
    const {product} = useDetProd(idProd); //получем продукт из стейта 
    const dispatch = useDispatch()

    console.log('jhvjvj' + idProd)
    console.log(cart)
    console.log(id)

//     function clickAddCart(){ //функция добавления товара в корзину
        
//         const db = getDatabase(); //подключение к базе данных Firebase
    
//         let newCart = Object.assign({}, cart) //создаем копию корзины пользователя из стейта
//         console.log(newCart)
//         console.log(idProd)

//         console.log(newCart[idProd])

//         if(newCart[idProd]){
//             newCart[idProd] ++;
//         }else{
//             newCart[idProd] = 1;
//         }
//         console.log(id)
//         const updates = {}
//         updates['/cart/'+ id] = newCart
//         return update(ref(db), updates)
// };

    function prods(){
        
 
        return (
            
            <div>
            <p>{product.name}</p>
            <p>{product.prise}</p>
            <p>{product.description}</p>
            <img src={product.img} alt="альтернативный текст"></img>
            <button onClick={() => dispatch(postCart({idProd, id, cart}))}>Добавить в корзину</button>
            </div>
        );
        
  
    }
  

        
    
    
    

   
    return(
        
       < div>
            
            {prods()}
          
         </div>
    )
}

export default DetProdCard
