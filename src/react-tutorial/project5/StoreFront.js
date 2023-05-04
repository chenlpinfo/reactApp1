import { useState } from 'react';
import Product from './Product.js';
import ProductsList from './ProductsList.js';
import AddProductForm from '.AddProductForm.js';

export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [validation, setValidation] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValidation('Please enter a name');
      return;
    }
    if (!description) {
      setValidation('Please enter a description');
      return;
    }
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: name,
        description,
        description,
      },
    ]);
    setName('');
    setDescription('');
    setValidation('');
  }

  function handleDeleteClick(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <>
      <AddProductForm
        onFormSubmit={handleFormSubmit}
        name={name}
        onNameChange={(e) => setName(e.target.value)}
        onDescription={(e) => setDescription(e.target.value)}
        validation={validation}
      ></AddProductForm>

      <div>{products.length === 0 && <p>Add your first product</p>}</div>

      <ProductsList products={products} onDeleteClick={() => handleDeleteClick(product.id)}></ProductsList>
    </>
  );
}
