import classes from './Auth.module.css'
import { NavLink } from 'react-router-dom';
import logoLogin from '../../../media/login.png'


function Auth() {
    return(
        <div className={classes.Auth}>
            <NavLink to='/logout'><img src={logoLogin}/></NavLink>
        </div>
    )
}

export default Auth