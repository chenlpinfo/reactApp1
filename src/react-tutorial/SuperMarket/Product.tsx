import React from 'react';
import Button from './Button';
import { type } from 'os';
import { IProduct } from './IProduct';
import { Link } from 'react-router-dom';

type ProductProps = {
  details: IProduct;
  cart: IProduct[];
  onProductAdd: (newProduct: IProduct) => void;
  onProductDelete: (id: number) => void;
};

export default function Product(props: ProductProps) {
  const { details, cart, onProductAdd, onProductDelete } = props;

  return (
    <>
      <div className='product'>
        <div className='product-image-container'>
          <Link to={`${details.id}`}>
            <img src={details.image} width='100' height='100' className='product-image' alt={details.name} />
          </Link>

          <div className='product-quantity-container'>
            <div className='product-quantity'>0</div>
          </div>
        </div>
        <div className='product-info'>
          <h3>{details.name}</h3>
          <p>{details.description}</p>
        </div>
        <div className='product-checkout'>
          <div>
            <Button outline className='product-delete' onClick={() => props.onProductDelete(details.id)}>
              x
            </Button>
          </div>
          <Button outline onClick={() => props.onProductAdd(details)}>
            ${details.price}
          </Button>
        </div>
      </div>
    </>
  );
}