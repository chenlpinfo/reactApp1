import React from 'react';
import { IProduct } from './IProduct';
import { useOutletContext } from 'react-router-dom';
import Button from './Button';

export default function ProductDetailInfo() {
  const product = useOutletContext<IProduct>();
  return (
    <>
      <p>
        {product?.description} sold at <strong>${product?.price}</strong> per piece.
      </p>
      <Button>${product?.price}</Button>
    </>
  );
}
