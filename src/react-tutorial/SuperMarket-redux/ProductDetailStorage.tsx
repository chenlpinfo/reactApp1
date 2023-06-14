import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { IProduct } from './IProduct';

export default function ProductDetailStorage() {
  const storage = useOutletContext<IProduct>().storage;

  return (
    <p>
      <strong>Storage instructions:</strong> {storage}
    </p>
  );
}
