import classes from './Logout.module.css'
import React from 'react' 
import { useState } from 'react';
import axios from 'axios';
import Input from '../../UI/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import {setUser} from '../../../store/slices/user/userSlice'
import { getCart } from '../../../store/slices/cart/cartSlice';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../../media/logo.png'
import { NavLink } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { isCloseAuth } from '../../../store/slices/uiSlice/uiSlice';

const Logout = (props) => {

   const {isAuth} = useSelector(state => state.ui)
   console.log(isAuth)

    console.log(props)





    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [tel, setTel] = useState('');
    const [authMethod, setAuthMethod] = useState('tel'); 

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitForm = event => {
                event.preventDefault()
            }
    
        const clickLogout = (email, password) => {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then(({user}) => {
                    {console.log(user)}
                    dispatch(setUser({ 
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                        // cart: dispath(getCart(user.uid))
                    }));
                    const expirationDate = new Date(new Date().getTime()+3600*1000)
                    console.log(expirationDate)
                 
                    localStorage.setItem('token', user.accessToken)
                    localStorage.setItem('userId', user.uid)
                    localStorage.setItem('email', user.email)
                    localStorage.setItem('expirationDate', expirationDate)
                    dispatch(getCart(user.uid));
                    navigate('/');
                })
                .catch(console.error)
        }

        const clickRegister = (email, password) => {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then(({user}) => {
                    console.log(user);
                    dispatch(setUser({
                        email: user.email,
                        id: user.uid,
                        token: user.accessToken,
                        // cart: {}
                    }));
                    const expirationDate = new Date(new Date().getTime()+3600*1000)
                    localStorage.setItem('token', user.accessToken)
                    localStorage.setItem('userId', user.uid)
                    localStorage.setItem('email', user.email)
                    localStorage.setItem('expirationDate', expirationDate)
                    navigate('/');
                })
                .catch(console.error)
        }
        
        (console.log(props))

        const cls = [classes.Logout]
        console.log(classes)
        console.log(cls)
        if(isAuth){
            cls.push(classes.OpenAuth)
        }else{
            cls.push(classes.CloseAuth)
        }
        
        return(
            <React.Fragment>
            <div className={cls.join(' ')}>
        {console.log(classes)}
                    <NavLink to='/'>
                        <img src={LogoImg} width='50px' height='50px' alt='imageLogo'/>
                    </NavLink>
                <form onSubmit={submitForm}>
                    <div className={classes.IndexLast}>
                        {authMethod==='tel'?(
                             <Input 
                                type='tel'
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                                placeholder = 'let'
                            />
                        ):
                            <Input 
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder = 'email'
                            />
                        }
                        <Input
                            type='password'
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            placeholder = 'password'
                        />
                    </div>
                    <Button onClick={() => clickLogout(email, pass)} value="Войти">  </Button>
                    <Button onClick={() => clickRegister(email, pass)} value="Регистрация"></Button>
                    
                </form>
                    <div className={classes.AuthSwitch}>
                        {authMethod==='tel'?(
                                <Button onClick={() => setAuthMethod('email')} value="Авторизоваться по email"></Button>
                            ):
                                <Button onClick={() => setAuthMethod('tel')} value="Авторизоваться по телефону"></Button>
                        }
                    </div>
            </div>
            {isAuth
                ?<Backdrop
                    onClick={()=> dispatch(isCloseAuth())}
                />
                :null
                   
            }

            </React.Fragment>
            
            
            

        )
    }
 export default Logout