import { useSelector } from "react-redux";

export function useUpdetProd(){
    
    const {updateProd} = useSelector(state => state.addProd);//ма обращаемся к стейту получаем юсера и извлекаем его данные
    
    const product = updateProd
    console.log(product)
    return{//при выхове жанной функции она возвращает необходимые значения
        product
    };

}

export function useDetProd(id){
    const {products} = useSelector(state => state.products)
    const product = products[id]
    console.log(product)
    return(
        product
    )
}


