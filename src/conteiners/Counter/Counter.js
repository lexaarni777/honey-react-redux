import React, {Component, useEffect} from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slices/product/fetchProductSlice";

function Counter(){
    
    const dispatch = useDispatch()  
    const productsList = useSelector((state) => state.products.products)
        useEffect(()=>{
        dispatch(getProducts());
    }, [dispatch]);
    
   
    const renderProducts = ()=>{
        console.log(productsList)
       
        if(productsList){
            const arr = []
            Object.entries(productsList).forEach((product, key)=>{
                console.log('key' , key, 'prod', product)
                arr.push({
                    id: product[0],
                    name: product[1].name,
                    prise: product[1].prise,
                    description: product[1].description,
                    img: product[1].img,
                })
                console.log('arr', arr)
            })
            return arr.map((product, index) => {
                console.log('productsList', product, index)
                return(
                    <ProductCard
                    key={index}
                    name={product.name}
                    prise={product.prise}
                    id={product.id}
                    description={product.description}
                    img={product.img}
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
        <div className={classes.Container}>
            <div className={classes.CounterHeader}>Прилавок</div>
            <div className={classes.Counter}>
            {
            renderProducts()
            }
            </div>
        </div>
    )
}


export default Counter
