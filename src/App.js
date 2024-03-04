import React from "react";
import Layout from "./hoc/Layout/Layout";
import { Route, Routes } from 'react-router-dom';
import About from "./conteiners/About/About";
import Main from "./conteiners/Main/Main";
import Counter from "./conteiners/Counter/Counter";
import Auth from './components/header/Auth/Auth';
import Logout from "./components/header/Logout/Logout";
import AddProduct from "./conteiners/Admin/AddProduct/AddProduct";
import Admin from "./conteiners/Admin/Admin";
import Cart from "./conteiners/Cart/Cart";
import ProductCard from "./components/ProductCard/ProductCard";
import { useAuth } from './hooks/userAuth';
import { useDispatch } from "react-redux";
import { removeUser, setUser } from "./store/slices/user/userSlice";
import DetProdCard from "./components/ProductCard/DetProdCard";
import UpdateProd from "./conteiners/Admin/UpdateProd/UpdateProd";
import { getCart } from "./store/slices/cart/cartSlice";
function App() {
  const dispatch = useDispatch();
  if(localStorage.userId){
    const nowExpirationDate = new Date(new Date().getTime())
    console.log(new Date() >= new Date(localStorage.expirationDate))
    console.log(new Date(), new Date(localStorage.expirationDate))
    if(new Date() >= new Date(localStorage.expirationDate)){
      dispatch(removeUser())
    }else{
      dispatch(setUser({
        email: localStorage.email,
        id: localStorage.userId,
        token: localStorage.token,
      }))
      dispatch(getCart(localStorage.userId))
    }
  }
  

  let routes
    if(localStorage.token){
      routes = (
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/counter/:id' element={<DetProdCard/>}/>
          <Route path='/updateprod/:id' element={<UpdateProd/>}/>
          
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/admin/addproduct' element={<AddProduct/>}/>
          <Route path='/admin' element={<Admin/>}/>
          
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      )
    }else{
      routes = (
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/counter' element={<Counter/>}/>
          <Route path='/counter/:id' element={<DetProdCard/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/logout' element={<Logout/>}/>
        </Routes>
      )
    }
  return (
    <Layout>
      {routes}
    </Layout>
  )
}

export default App;
