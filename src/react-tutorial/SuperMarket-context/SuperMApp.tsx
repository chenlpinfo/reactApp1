import React, { useContext, useEffect, useState } from 'react';
import './SuperMarket.scss';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import Cart from './Cart';
import { IProduct } from './IProduct';
import ProductDetails from './ProductDetails';
import ProductDetailInfo from './ProductDetailInfo';
import ProductDetailNutrition from './ProductDetailNutrition';
import ProductDetailStorage from './ProductDetailStorage';
import { SuperMarketContext } from './SuperMarketContext';

export default function SuperMApp() {
  const { cart, setCart, handleProductAdd, handleProductDelete } = useContext(SuperMarketContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
          <Route path='/products/:id' element={<ProductDetails />}>
            <Route path='' element={<ProductDetailInfo />}></Route>
            <Route path='nutrition' element={<ProductDetailNutrition />}></Route>
            <Route path='storage' element={<ProductDetailStorage />}></Route>
          </Route>

          <Route path='/about' element={<About />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
