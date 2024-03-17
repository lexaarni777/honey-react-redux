import React, {useEffect} from "react"
import { NavLink, Navigate, Link, useNavigate} from "react-router-dom"
import axios from "../../axios/axios"
import { getDatabase, ref, set} from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../store/slices/product/fetchProductSlice";
import { postCart } from "../../store/slices/cart/cartSlice";
import { useAuth } from "../../hooks/userAuth";
import classes from "./ProductCard.module.css"
import Button from "../UI/Button/Button";
import { updateProd } from "../../store/slices/addProd/addProdSlice";

function ProductCard(props){
    
    console.log(props)
    const idProd = props.id
    const product = useSelector(state => state.products.products)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id,isAuth,isAdmin} = useAuth()
    const cart = useSelector(state => state.cart)
    // const clickDelitProd = (id) => dispatch(removeProduct(id))

    const buttonUpdateProd=()=>{
        dispatch(updateProd(product[idProd]))
        console.log(product[idProd])     
        console.log(`/updateprod/'${props.id}`)
        
        
    }

     return(
        <div className={classes.ProductCard}>
            <p className={classes.nameProd}>{props.name}</p>
            <NavLink 
                to={{pathname:'/counter/'+ props.id}}
                state = {{id: props.id}}>
                    <img src={product[idProd].img} alt="альтернативный текст"></img>
            </NavLink>
            <p>Цена за 1 кг: {props.prise} руб</p>          
            <Button 
                onClick={() => dispatch(postCart({idProd, id, cart}))}
                value="Добавить в корзину">
            </Button>
            {isAuth&&isAdmin?
                <div>
                    <Button
                        onClick={() => dispatch(removeProduct(idProd))}
                        value="Удалить"
                    ></Button>
                    <Link 
                    state = {{id: props.id}}
                    to={{pathname:'/updateprod/'+ props.id}}>
                        <Button
                            onClick= {buttonUpdateProd}
                            value="Редактиовать"
                        ></Button>
                    </Link>
                </div>
            :null}
        </div>
    )
}

export default ProductCard
