import { NavLink } from "react-router-dom"
import Account from "../../../conteiners/Cart/Cart"
import classes from './ExitUser.module.css'
import { removeUser } from "../../../store/slices/user/userSlice"
import { useDispatch } from "react-redux"
import logoCart from "../../../media/cart.png"
import logoUser from "../../../media/user.png"
import logoExit from "../../../media/exit.png"

function ExitUser() {
    const dispatch = useDispatch()
    return(
        <div className={classes.ExitUser}>
            <NavLink 
                className={classes.CartUser}
                to='/cart'><img src={logoCart}/></NavLink>
            <NavLink 
                className={classes.User}
                to='/User'><img src={logoUser}/></NavLink>

            <img
                className={classes.imgExit}
                src={logoExit}
                onClick={() => dispatch(removeUser()) }
            />
        </div>
    )
}

export default ExitUser