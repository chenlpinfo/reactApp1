import { useContext, useEffect, useState } from 'react';
import Loader from './Loader';
import Product from './Product';
import useFetch from './useFetch';
import { IProduct } from './IProduct';
import { SuperMarketContext } from './SuperMarketContext';

type ProductsProps = {
  onProductAdd: (newProduct: IProduct) => void;
  onProductDelete: (id: number) => void;
};

export default function Products({ onProductAdd, onProductDelete }: ProductsProps) {
  const { cart, setCart } = useContext(SuperMarketContext);

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
            return <Product key={product.id} details={product} cart={cart} onProductAdd={onProductAdd} onProductDelete={onProductDelete} />;
          })}
        </div>
      </div>
    </>
  );
}