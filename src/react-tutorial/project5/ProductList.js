import Product from './Product.js';
export default function ProductsList(props) {
  return (
    <>
      <ul className='store-front'>
        {props.products.map((product) => (
          <li key={product.id}>
            <Product details={product} />
            <button className='btn-outline btn-delete' onClick={props.onDeleteClick}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
