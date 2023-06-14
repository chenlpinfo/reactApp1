import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { selectCart } from '../../store/sliceSuperMarket';
import About from './About';
import Cart from './Cart';
import Home from './Home';
import Navbar from './Navbar';
import ProductDetailInfo from './ProductDetailInfo';
import ProductDetailNutrition from './ProductDetailNutrition';
import ProductDetailStorage from './ProductDetailStorage';
import ProductDetails from './ProductDetails';
import Products from './Products';
import './SuperMarket.scss';

export default function SuperMApp() {
  const cart = useSelector(selectCart);

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
