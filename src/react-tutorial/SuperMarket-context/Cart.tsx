import { useContext } from 'react';
import { SuperMarketContext } from './SuperMarketContext';

export default function Cart() {
  const { cart, getTotalPrice } = useContext(SuperMarketContext);

  return (
    <div className='cart-layout'>
      <h1>Your Cart</h1>
      {cart.length === 0 && <p>You have not added any product to your cart yet.</p>}
      {cart.length > 0 && (
        <>
          <table className='table table-cart'>
            <thead>
              <tr>
                <th className='th-product'>Product</th>
                <th>Unit price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>
                      <img src={product.image} width='30' height='30' alt='' /> {product.name}
                    </td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <strong>${product.price * product.quantity}</strong>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th colSpan={2}></th>
                <th className='cart-highlight'>Total</th>
                <th className='cart-highlight'>${getTotalPrice()}</th>
              </tr>
            </tfoot>
          </table>
        </>
      )}
    </div>
  );
}
