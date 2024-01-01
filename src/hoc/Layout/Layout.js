import React, {Component} from 'react'
import classes from './Layout.module.css'
import Header from '../../components/header/Header'

//компонент самого высого порядка в него оборачиваю все приложение

class Layout extends Component{
    render(){
        return(
            <div className={classes.Layout}>
                <Header/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}



export default Layout