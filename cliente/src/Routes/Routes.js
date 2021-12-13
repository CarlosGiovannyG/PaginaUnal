import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from '../Components/Nav/Navbar';
import Products from '../Components/Products/Products';
import Create from '../Pages/Create/Create';
import CardDetail from '../Components/CardDetail/CardDetail'
import App from '../Pages/Home/App'
import Menu from '../Pages/Menu/Menu';
import Nosotros from '../Pages/Nosotros/Nosotros';
import Login from '../Components/Login/Login';




const Rout = () => {


  
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/nosotros' element={<Nosotros />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/product/:id' element={<CardDetail />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Rout;
