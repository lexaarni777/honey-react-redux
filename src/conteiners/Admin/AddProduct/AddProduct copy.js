import React, {Component, useState} from 'react'
import classes from './AddProduct.module.css'
import { NavLink } from 'react-router-dom';
import axios from '../../../axios/axios';
import Input from './../../../components/UI/Input/Input';
import { storage } from '../../../firebase';
import { uploadBytes, ref} from 'firebase/storage';
export default class AddProduct extends Component {
    

    state = {
        addProduct:{
            name: '',
            prise: '',
            description: '',
            
        }
    }
    submitForm = event => {
        event.preventDefault()
    }



 

    clickAddProduct = async event => {
        event.preventDefault()
        await axios.post('products.json', this.state.addProduct).then(() => {
            this.state = {
                addProduct:{
                    name: '',
                    prise: '',
                    description: '',
                    
                }
            }
            const countElemForm = event.target.form.childElementCount - 1
            for(let i = 0; i < countElemForm; i++){
                console.log(i)
                document.getElementById(event.target.form[i].id).value = '';
            }
        })
        .catch(error => console.log(error))
    }
    onChangeInput = event => {
        const AddProductList = this.state.addProduct
        AddProductList[event.target.name] = event.target.value

    }

    clickAddImgProduct = event => {
        event.preventDefault()
        const [image, setImage] = useState(null)

        console.log('hjk')



    }
    
    render(){
        return(
            <div className={classes.AddProduct}>
                <h1>Добавление товара на прилавок</h1>
                
                <form onSubmit={this.submitForm}>
                    
                    <Input
                        label='Наименование товара'
                        type='text'
                        name='name'
                        id={this.props.id}
                        onChange={this.onChangeInput}
                    ></Input>
                    <Input
                        label='Цена'
                        name='prise'
                        type='number'
                        id={this.props.id}
                        onChange={this.onChangeInput}
                        
                    ></Input>
                    <Input
                        label='Описание товара'
                        name='description'
                        type='text'
                        id={this.props.id}
                        onChange={this.onChangeInput}
                        
                    ></Input>
                    <div>
                        <label>
                            <input type='file'/>
                            <button
                                onClick={this.clickAddImgProduct}
                            > Загрузить фото</button>
                        </label>
                    </div>
                    <button
                        onClick={this.clickAddProduct}
                    >Добавить товар </button>


                </form>

                <NavLink to='/admin'>Венуться назад в админку</NavLink>

            </div>
        )
    }
}