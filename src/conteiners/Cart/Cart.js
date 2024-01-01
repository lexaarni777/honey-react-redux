import React from "react"
import { useSelector } from "react-redux";
import ProductCart from "../../components/ProductCart/ProductCart";

function Cart(){
    
    const cart = useSelector(state => state.cart.productsCart)
    const products = useSelector(state => state.products.products)

    console.log(cart)
    console.log(products)

    const renderCartList=()=>{
        
        if(cart){
            const cartList = []
            Object.entries(cart).forEach((product, key)=>{
                console.log('key' , key, 'prod', product)
                cartList.push({
                    id: product[0],
                    name: products[product[0]].name,
                    prise: products[product[0]].prise,
                    description: products[product[0]].description,  
                    quantity: product[1]
                    
                })
                console.log('arr', cartList)
            })
            return cartList.map((product, index) => {
                console.log('productsList', product, index)
                return(
                    <ProductCart
                    key={index}
                    name={product.name}
                    prise={product.prise}
                    id={product.id}
                    description={product.description}
                    quantity={product.quantity}
                    />
                )
            })
        }else{
            return(
                <p>пусто блять</p>
            )
        }
    }



     return(
        <div>
            <h1>Личный кабинет</h1>
            {renderCartList()}
         </div>
    )
}

export default Cart
