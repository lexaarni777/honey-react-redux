import React from "react"
import classes from "./ProductCart.module.css"
import Button from "../UI/Button/Button"
import { useDispatch, useSelector } from "react-redux";
import { deleteProdInCart } from "../../store/slices/cart/cartSlice";
import { useAuth } from "../../hooks/userAuth";
import Input from "../UI/Input/Input";
import { imputUpdateProdCart } from "../../store/slices/cart/cartSlice";
function ProductCard(props){
    
    console.log(props)
    const dispatch = useDispatch()

    const {id} = useAuth()
    const cart = useSelector(state => state.cart)
    const idProd = props.id



    const onChangeInput = event => {
        console.log(event.target)
        
        const val = event.target.value

               
        dispatch(imputUpdateProdCart({val, idProd, id, cart}))
        console.log(val)
    }

        const incrementQuantity = () => {
        const newValue = parseInt(props.quantity, 10) + 1;
        dispatch(imputUpdateProdCart({ val: newValue, idProd, id, cart }));
    };

    const decrementQuantity = () => {
        const newValue = props.quantity > 0 ? parseInt(props.quantity, 10) - 1 : 0;
        dispatch(imputUpdateProdCart({ val: newValue, idProd, id, cart }));
    };

     return(
        <div className={classes.ProductCart}>
            <div className={classes.Img}><img src={props.img}/></div>
            <div className={classes.Name}>
                {props.name}
            </div>
            <div className={classes.Prise}>
                <p>Цена за еденицу: {props.prise}</p>
                <p>Всего: {props.quantity*props.prise}</p>
            </div>
            <div className={classes.Cal}>
                <div>
                    <button type="button" onClick={decrementQuantity}>-</button>
                    <Input
                        label='Количество товаров в заказе:'
                        type="number"
                        name="quantity"
                        onChange={onChangeInput}
                        value={props.quantity}              
                        >
                    </Input>
                    <button type="button" onClick={incrementQuantity}>+</button>
                </div>
                

                <Button
                value="Удалить из корзины"
                onClick={() => dispatch(deleteProdInCart({ idProd, id, cart}))}
                ></Button>   
            </div>
         </div>
    )
}

export default ProductCard
