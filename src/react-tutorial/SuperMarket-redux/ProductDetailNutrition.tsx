import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { IProduct } from './IProduct';

export default function ProductDetailNutrition() {
  const product = useOutletContext<IProduct>();
  const nutrition = product?.nutrition;

  return (
    <>
      <table className='table table-nutrition'>
        <thead>
          <tr>
            <th>Nutrient</th>
            <th>Value</th>
          </tr>
          <tr>
            <th>Protein</th>
            <th>{nutrition?.protein}g</th>
          </tr>
          <tr>
            <th>Carbohydrates</th>
            <th>{nutrition.carbs}g</th>
          </tr>
          <tr>
            <th>Fat</th>
            <th>{nutrition.fat}g</th>
          </tr>
          <tr>
            <th>Salt</th>
            <th>{nutrition.salt}g</th>
          </tr>
        </thead>
      </table>
    </>
  );
}
