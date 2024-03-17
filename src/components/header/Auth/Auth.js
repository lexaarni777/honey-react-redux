import classes from './Auth.module.css'
import { NavLink } from 'react-router-dom';
import logoLogin from '../../../media/login.png'
import { useDispatch } from 'react-redux';
import { isOpenAuth } from '../../../store/slices/uiSlice/uiSlice';
import Logout from '../Logout/Logout';


function Auth() {
    const dispatch = useDispatch()


    return(
        <div className={classes.Auth}>
            <img src={logoLogin} onClick={()=> dispatch(isOpenAuth())}/>
            <Logout/>
        </div>
    )
}

export default Auth