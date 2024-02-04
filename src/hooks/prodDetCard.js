import { useSelector } from "react-redux";

export function useDetProd(){
    
    const {updateProd} = useSelector(state => state.addProd);//ма обращаемся к стейту получаем юсера и извлекаем его данные
    
    const product = updateProd
    console.log(product)
    return{//при выхове жанной функции она возвращает необходимые значения
        product
    };

}


