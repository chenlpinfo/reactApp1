import React from 'react';
import { IProduct } from './IProduct';
import { useOutletContext } from 'react-router-dom';

export default function ProductDetailInfo({ onProductAdd }: { onProductAdd: (newProduct: IProduct) => void }) {
  const product = useOutletContext();
  return (
    <>
      <p></p>
    </>
  );
}
