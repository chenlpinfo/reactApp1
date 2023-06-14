import React, { useEffect, useState } from 'react';
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

export default function SuperMApp() {
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function handleProductAdd(newProduct: IProduct) {
    const existingProduct = cart.find((product) => product?.id === newProduct.id);
    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }

    console.log('Adding product' + newProduct.id);
  }

  function handleProductDelete(id: number) {
    const updatedCart = cart.filter((product) => product.id != id);
    setCart(updatedCart);
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
            <Route path='nutrition' element={<ProductDetailNutrition />}></Route>
            <Route path='storage' element={<ProductDetailStorage />}></Route>
          </Route>

          <Route path='/about' element={<About />}></Route>
          <Route path='/cart' element={<Cart cart={cart} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
