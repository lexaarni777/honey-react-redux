import classes from './Navigation.module.css'
import {NavLink} from 'react-router-dom';
import { useAuth } from '../../../hooks/userAuth';

function Navigation(){
    const {isAdmin} = useAuth();
    let linkNav = null;
    console.log('isAdmin' + isAdmin)
   
        linkNav = (
            <ul>
                <li><NavLink to='/about'>О Нас</NavLink></li>
                <li><NavLink to='/counter'>Прилавок</NavLink></li>
                {isAdmin?<li className={classes.Admin}><NavLink to='/admin'>Админка</NavLink></li>:null}
            </ul> 
        )
 

    return(
        <nav className={classes.Navigation}>
            {linkNav}          
        </nav>
    )
}

export default Navigation