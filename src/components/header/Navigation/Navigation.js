import classes from './Navigation.module.css'
import {NavLink} from 'react-router-dom';
import { useAuth } from '../../../hooks/userAuth';

function Navigation(){
    const {isAdmin} = useAuth();
    let linkNav = null;
    console.log('isAdmin' + isAdmin)
    if(isAdmin){
        linkNav = (
            <ul>
                <li><NavLink to='/counter'>Прилавок</NavLink></li>
                <li><NavLink to='/about'>О Нас</NavLink></li>
                <li><NavLink to='/admin'>админка</NavLink></li>
            </ul> 
        )
    }else{
        linkNav = (
            <ul>
                <li><NavLink to='/counter'>Прилавок</NavLink></li>
                <li><NavLink to='/about'>О Нас</NavLink></li>
            </ul> 
        )
    }

    return(
        <nav className={classes.Navigation}>
            {linkNav}          
        </nav>
    )
}

export default Navigation