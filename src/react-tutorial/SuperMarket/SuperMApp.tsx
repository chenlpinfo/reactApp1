import React, { useState } from 'react';
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

export default function SuperMApp() {
  const [cart, setCart] = useState([]);

  function handleProductAdd(newProduct: IProduct) {
    console.log('Adding product' + newProduct.id);
  }

  function handleProductDelete(id: number) {
    console.log('Deleting product' + id);
  }

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products cart={cart} onProductAdd={handleProductAdd} onProductDelete={handleProductDelete} />}></Route>
          <Route path='/products/:id' element={<ProductDetails />}>
            <Route path='' element={<ProductDetailInfo />}></Route>
          </Route>

          <Route path='/about' element={<About />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
