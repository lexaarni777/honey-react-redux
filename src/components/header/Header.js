import Auth from './Auth/Auth';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import classes from './Header.module.css'
import ExitUser from './ExitUser/ExitUser';
import { useAuth } from '../../hooks/userAuth';
import React, {useState} from 'react';

function Header() {

    const {isAuth} = useAuth();



    let navigation = null


        navigation = (
            
                <div className={classes.Container}>
                    <div className={classes.headerUpper}>
                        <Logo/>
                        <Navigation/>
                        {isAuth?<ExitUser/>:<Auth/>}
                        
                    </div>
                    
                </div>
            
            )
   
  
    return (

        <header className={classes.Header}>         
            {navigation}
        </header>
    );
  }
  
  export default Header;
  