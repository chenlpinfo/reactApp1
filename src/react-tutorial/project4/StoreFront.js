import Product from './Product.js';
import { useState } from 'react';
import './index.css';
export default function StoreFront() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    setProducts([...products, { id: products.length + 1, name: name, description: description }]);
    setName('');
    setDescription('');
  }
  function handleDeleteButton(deleteId) {
    const newProducts = products.filter((product) => product.id !== deleteId);
    setProducts(newProducts);
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor='product-name'>Name:</label>
          <input type='text' placeholder='Enter the name' className='textfield' id='product-name' name={name} value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor='product-description'>Description:</label>
          <input type='text' placeholder='Enter the description' id='product-description' className='textfield' value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className='form-footer'>
          <div className='validation-message'></div>
          <input type='submit' className='btn btn-primary' value='Add product' />
        </div>
      </form>
      <div>{products.length === 0 && <p>Add your first product</p>}</div>
      <ul className='store-front'>
        {products.map((product) => (
          <li key={product.id}>
            <Product details={product} />
            <button className='btn-outline btn-delete' onClick={() => handleDeleteButton(product.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
