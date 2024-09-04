import classes from './Logo.module.css'
import logoImg from '../../../media/logo.png'
import { NavLink } from 'react-router-dom';

function Logo(){
    return(
       <NavLink className={classes.Logo} to='/'>
           <img className={classes.Logo} src={logoImg} width='50px' heiht='50px' alt='logo'/>
       </NavLink>
    )
}

export default Logo