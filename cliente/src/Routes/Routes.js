import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from '../Components/Nav/Navbar';
import Products from '../Components/Products/Products';
import CardDetail from '../Components/CardDetail/CardDetail'
import App from '../Pages/Home/App'
import Menu from '../Pages/Menu/Menu';
import Nosotros from '../Pages/Nosotros/Nosotros';
import Login from '../Components/Login/Login';
import Carrito from '../Pages/Carro/Carrito'
import UserDetail from '../Components/UsersDetail/UserDetail';
import Register from '../Components/Register/Register';


const Rout = () => {

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/ProyectoUnal' element={<App />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<CardDetail />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/compra' element={<Carrito />} />
          <Route path='/compra/:id' element={<CardDetail />} />
          <Route path='/user/' element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Rout;
