import classes from './Auth.module.css'
import { NavLink } from 'react-router-dom';


function Auth() {
    return(
        <div className={classes.Auth}>
            <NavLink to='/logout'>Войти</NavLink>
        </div>
    )
}

export default Auth