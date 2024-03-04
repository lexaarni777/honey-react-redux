import classes from './Logout.module.css'
import React from 'react' 
import { useState } from 'react';
import axios from 'axios';
import Input from '../../UI/Input/Input';
import { useDispatch } from 'react-redux';
import {setUser} from '../../../store/slices/user/userSlice'
import { getCart } from '../../../store/slices/cart/cartSlice';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
// import { getCart } from '../../../store/slices/cart/cartSlice';

// const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };

const Logout = () => {
//     state = {
//         formControls:{
//             email: {
//                 value: '',
//                 label: 'Email',
//                 type: 'email',
//                 errorMessage: "Введите корректный Email",
//                 valid: 'false',
//                 touched: 'false',
//                 validation:{
//                     required: true,
//                     email: true
//                 }

//             },
//             password:{
//                 value: '',
//                 label: 'Пароль',
//                 type: 'password',
//                 errorMessage: "Введите корректный пароль",
//                 valid: 'false',
//                 touched: 'false',
//                 validation:{
//                     required: true,
//                     minLenght: 6
//                 }
//             }

//         }
//     }
    
    
    
//     submitForm = event => {
//         event.preventDefault()
//     }

    

//     validateControl(value, validation) {
//         if (!validation){
//             return true
//         }
//         let isValid = true

//         if (validation.required){
//             isValid = value.trim() !== '' && isValid
//         }
//         if (validation.email){
//             isValid = validateEmail(value) && isValid
//         }
        

//         if (validation.minLenght){
//             console.log(validation.minLenght)
//             isValid = value.length >= validation.minLenght && isValid
//             console.log(isValid)
//         }



//         return isValid

//     }

//     onChangeHandler = (event, controlName) => {
//         console.log(`${event.target.value}, ${controlName}`)
        
//     const formControls = {...this.state.formControls}
//     const control = {...formControls[controlName]}
    
//     control.value = event.target.value
//     control.touched = true
//     control.valid = this.validateControl(control.value, control.validation)
//     formControls[controlName] = control
    
//     this.setState({
//         formControls
//     })
//     }

//    renderInputs(){
//     const inputs = Object.keys(this.state.formControls).map((controlName, index)=>{
//         const control = this.state.formControls[controlName]
//         return(
//             <Input
//                 key = {controlName + index}
//                 label = {control.label}
//                 type = {control.type}
//                 value = {control.value}
//                 valid = {control.valid}
//                 touched = {control.touched}
//                 errorMessage = {control.errorMessage}
//                 shouldValidate = {!!control.validation}
//                 onChange = {event => this.onChangeHandler(event, controlName) }
//             />
//         )
//     })
//     return inputs
//    }

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

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
        
    
 
        return(
            <div className={classes.Logout}>
                <form onSubmit={submitForm}>
                    <input 
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder = 'email'
                    />
                    <input 
                        type='password'
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder = 'password'
                    />
                    <button onClick={() => clickLogout(email, pass)}>Войти</button>
                    <button onClick={() => clickRegister(email, pass)}>Регистрация</button>
                </form>
            </div>
        )
    }
 export default Logout