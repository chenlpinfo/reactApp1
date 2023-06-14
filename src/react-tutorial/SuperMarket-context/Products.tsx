import { useEffect, useState } from 'react';
import { IProduct } from './IProduct';
import Loader from './Loader';
import Product from './Product';
import useFetch from './useFetch';

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { get, loading } = useFetch('https://react-tutorial-demo.firebaseio.com/');

  useEffect(() => {
    get('supermarket.json')
      .then((data) => {
        setProducts(data as IProduct[]);
      })
      .catch((error) => {
        console.log('Could not load products', error);
      });
  }, []);

  return (
    <>
      <div className='products-layout'>
        <h1>Products</h1>
        <p>Take a look at our products</p>
        <div className='products-grid'>
          {loading && <Loader />}
          {products.map((product: IProduct) => {
            return <Product key={product.id} details={product} />;
          })}
        </div>
      </div>
    </>
  );
}
