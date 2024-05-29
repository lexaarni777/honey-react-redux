import { useNavigate } from "react-router-dom"
import Button from "../../components/UI/Button/Button"
import classes from './User.module.css'

function User(){

    let navigate = useNavigate()
    const handleButtonClick = (redirect) => {
        navigate(redirect)
    }
    return(
        <div className={classes.User}>
            <div className={classes.UserHeader}>Личный кабинет</div>
            <Button onClick={() => handleButtonClick('/cart')} value='Корзина'/>
            <Button onClick={() => handleButtonClick('/orders')} value='Заказы'/>
        </div>
    )
}

export default User