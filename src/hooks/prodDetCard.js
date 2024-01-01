import { useSelector } from "react-redux";

export function useDetProd(id){
    console.log(id)
    const {products} = useSelector(state => state.products);//ма обращаемся к стейту получаем юсера и извлекаем его данные
    console.log(products)
    const product = products[id]
    console.log(product)
    return{//при выхове жанной функции она возвращает необходимые значения
        product
    };

}


