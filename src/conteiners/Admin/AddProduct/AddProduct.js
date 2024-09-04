import React, {Component, useState} from 'react'
import classes from './AddProduct.module.css'
import { NavLink } from 'react-router-dom';
import axios from '../../../axios/axios';
import Input from './../../../components/UI/Input/Input';
import { storage } from '../../../firebase';
import { uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
import { useDispatch, useSelector} from 'react-redux';
import { imputAddProd, imgAddProd, nullImputAddProd } from '../../../store/slices/addProd/addProdSlice';
import Button from '../../../components/UI/Button/Button';

function AddProduct(){
    

    const [image, setImage] = useState(null)
    const [inputs, setInputs] = useState([
        {
            name: '',
            prise: '',
            description: '',
            img: '',
        },
      ]);
    
    const dispatch = useDispatch()
    const {addProd} = useSelector(state=>state.addProd)  
    const submitForm = event => {
        event.preventDefault()
       
    }


    let addProduct = {
        name: '',
        prise: '',
        description: '',
        img: '',
    }
 

    const clickAddProduct = async event => {
        event.preventDefault()
        await axios.post('products.json', addProd).then(() => {
            dispatch(nullImputAddProd())
            const countElemForm = event.target.form.childElementCount - 1
            for(let i = 0; i < countElemForm; i++){
                console.log(i)
                document.getElementById(event.target.form[i].id).value = '';
            }
        })
        .catch(error => console.log(error))
    }
    const onChangeInput = event => {
        addProduct[event.target.name] = event.target.value
        console.log(addProduct)
        const val = {
            name: event.target.name,
            value: event.target.value
        }
        dispatch(imputAddProd(val))

    }

    const onChangeInputImg = event => {
        event.preventDefault()
        setImage(event.target.files[0])
        
        console.log(addProduct)

    }

    const clickAddImgProduct = () => {
              
        console.log(image.name)
        console.log(addProd)
       
        const imgRef = ref(storage, `images/${addProd.name}`)
        const uploadTask = uploadBytesResumable(imgRef, image);
        uploadTask.on(
            'state_changed', 
            (snapshot) => {
               
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                dispatch(imgAddProd(downloadURL))
                console.log('File available at', downloadURL);
                
                });
            }
            );
        
        
        

        console.log('hjk')



    }



    const addInput = () => {
        setInputs(inputs.concat({ 
          id: inputs.length + 1, 
          name: '', 
          price: '' 
        }));
      };
    
        return(
            <div className={classes.AddProduct}>
                <h1>Добавление товара на прилавок</h1>
                
                <form onSubmit={submitForm}>
                    
                    <Input
                        label='Наименование товара'
                        type='text'
                        name='name'
                        onChange={onChangeInput}
                    ></Input>
                    <button type="button" onClick={addInput}>Добавить еще товар</button>
                    <Input
                        label='Цена'
                        name='prise'
                        type='number'
                        onChange={onChangeInput}
                    ></Input>
                    <Input
                        label='Описание товара'
                        name='description'
                        type='text'
                        onChange={onChangeInput}
                    ></Input>

                    <div>
                        <label>
                            <input type='file' onChange={onChangeInputImg}/>
                            <Button
                                onClick={clickAddImgProduct}
                                value="Загрузить фото"
                            ></Button>
                        </label>
                    </div>
                    <Button
                        onClick={clickAddProduct}
                        value="Добавить товар"
                    ></Button>


                </form>

                <NavLink to='/admin'>Венуться назад в админку</NavLink>

            </div>
        )
}

export default AddProduct