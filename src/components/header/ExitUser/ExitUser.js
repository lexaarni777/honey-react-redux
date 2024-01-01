import { NavLink } from "react-router-dom"
import Account from "../../../conteiners/Cart/Cart"
import { removeUser } from "../../../store/slices/user/userSlice"
import { useDispatch } from "react-redux"


function ExitUser() {
    const dispatch = useDispatch()
    return(
        <div>
            <NavLink to='/cart'>Корзина</NavLink>
            <button
                onClick={() => dispatch(removeUser()) }
            > Выйти</button>
        </div>
    )
}

export default ExitUser