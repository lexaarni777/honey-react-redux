import React, {Component} from "react";
import { NavLink } from 'react-router-dom';

export default function Admin(){

        return(<div>
                    <h1>Страница админа</h1>
                    <hr/>
                    <NavLink to='/admin/addproduct'>Меню добавления товара</NavLink>
            </div>)

}