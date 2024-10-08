import React from "react"
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../../components/ProductCart/ProductCart";
import { getProducts } from "../../store/slices/product/fetchProductSlice";
import classes from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/Button/Button";
import axios from "../../axios/axios";
import { postOrders } from "../../store/slices/orders/ordersSlice";
import { useAuth } from "../../hooks/userAuth";


function Cart(){
    // Используем хук useNavigate для получения функции навигации
    let navigate = useNavigate()
    const cart = useSelector(state => state.cart.productsCart)
    const products = useSelector(state => state.products.products)
    const orders = useSelector(state=> state.orders.orders)
    const { id } = useAuth()
    console.log(cart)
    console.log(products)
    // Обработчик клика на кнопку, который перенаправит пользователя на указанный URL
    const handleButtonClick = () => {
        navigate('/counter')
    }

    const dispatch = useDispatch()

    const handleCheckout = () => {
        dispatch(postOrders({cart, id, orders, products}))
    }    





    const renderCartList=()=>{
        
        if(cart){
            const cartList = []
            Object.entries(cart).forEach((product, key)=>{
                console.log('key' , key, 'prod', product, 'products', products)
                cartList.push({
                    id: product[0],
                    name: products[product[0]].name,
                    prise: products[product[0]].prise,
                    description: products[product[0]].description,  
                    quantity: product[1],
                    img: products[product[0]].img

                    
                })
                console.log('arr', cartList)
            })
            return (
                <>
                  {cartList.map((product, index) => (
                    <ProductCart
                      key={index}
                      name={product.name}
                      prise={product.prise}
                      id={product.id}
                      description={product.description}
                      quantity={product.quantity}
                      img={product.img}
                    />
                  ))}
                  <div className={classes.checkoutButtonContainer}>
                    <Button onClick={handleCheckout} value="Оформить заказ" />
                  </div>
                </>
              );
        }else{
            return(
                <div>
                    <p>Ваша корзина пуста</p>
                    <Button
                            onClick={handleButtonClick}
                            value="Перейти в Магазин"
                    ></Button>
                </div>
                
            )
        }
    }



     return(
        <div className={classes.Cart}> 
            <div className={classes.CartHeader}>Корзина с Вашими товарами</div>
            {renderCartList()}
         </div>
    )
}

export default Cart
