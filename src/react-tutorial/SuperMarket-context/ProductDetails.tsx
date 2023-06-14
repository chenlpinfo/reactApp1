import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { IProduct } from './IProduct';

export default function ProductDetails() {
  const [product, setProduct] = useState<IProduct>();
  const { get } = useFetch('https://react-tutorial-demo.firebaseio.com/');
  const params = useParams();

  useEffect(() => {
    get(`productinfo/id${params.id}.json`)
      .then((data: any) => {
        setProduct(data);
      })
      .catch((error: any) => console.log('Could not load product details', error));
  }, []);

  return (
    <>
      <div className='product-details-layout'>
        <div>
          <h2>{product?.name}</h2>
          <img src={product?.image} width='125' height={125} className='product-details-image' alt={product?.name} />
        </div>
      </div>
      <div className='tabs'>
        <ul>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'tab-active' : '')} to='' end>
              Details
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'tab-active' : '')} to='nutrition'>
              Nutrition
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? 'tab-active' : '')} to='storage'>
              Storage
            </NavLink>
          </li>
        </ul>
        <Outlet context={product}></Outlet>
      </div>
    </>
  );
}
