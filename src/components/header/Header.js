import Auth from './Auth/Auth';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import classes from './Header.module.css'
import ExitUser from './ExitUser/ExitUser';
import { useAuth } from '../../hooks/userAuth';
import React from 'react';

function Header() {
    const {isAuth} = useAuth();

    let navigation = null

    if(isAuth){
        navigation = (
            
                <React.Fragment>
                    <Logo/>
                    <Navigation/>
                    <ExitUser/>
                </React.Fragment>
            
            )
        
    }else{
        navigation = (
            
                <React.Fragment>
                    <Logo/>
                    <Navigation/>
                    <Auth/>
                </React.Fragment>
            
            )
    }
    return (

        <header className={classes.Header}>         
            {navigation}
        </header>
    );
  }
  
  export default Header;
  