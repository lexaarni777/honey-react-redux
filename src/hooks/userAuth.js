import { useSelector } from "react-redux";

export function useAuth(){
    const {email, token, id, cart} = useSelector(state => state.user);//ма обращаемся к стейту получаем юсера и извлекаем его данные
    const adminId = 'jQJGVx2JulcsxQSUUxkIbqUJw483';
    let isAdmin = false;
    if(id == adminId){
        isAdmin = true
    };

    return{//при выхове жанной функции она возвращает необходимые значения
        isAuth: !!token,
        email,
        token,
        id,
        isAdmin,
        cart,
    };

}


