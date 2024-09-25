import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import FashionBanner from './Components/Banner/Banner';
import Home from './Components/Home/Home';
import Mens from './Components/Pages/Mens';
import Womens from './Components/Pages/Womens';
import Accessories from './Components/Pages/Accessories';
import Makeup from './Components/Pages/Makeup';
import Electronics from './Components/Pages/Electronics';
import Product from './Components/Product/Product'
import { useDispatch } from 'react-redux';

import { useEffect } from 'react';
function App() {
 
  return (
    <div className="text-red-500">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/mens/:category' element={<Mens/>}></Route>
        <Route path='/womens/:category' element={<Womens/>}></Route>
        <Route path='/accessories/:category' element={<Accessories/>}></Route>
        <Route path='/makeup/:category' element={<Makeup/>}></Route>
        <Route path='/electronics/:category' element={<Electronics/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
