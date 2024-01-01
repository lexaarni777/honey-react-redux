import React from "react"

function ProductCard(props){
    
    console.log(props)
     return(
        <div>
            <h1>Название товара: {props.name}</h1>
            <p>Цена за еденицу: {props.prise}</p>
            <p>Количство в заказае: {props.quantity}</p>    
            <p>Всего: {props.quantity*props.prise}</p>        
         </div>
    )
}

export default ProductCard
