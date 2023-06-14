import { useDispatch, useSelector } from 'react-redux';
import { selectCart, sliceSuperMarketActions } from '../../store/sliceSuperMarket';
import { IProduct } from './IProduct';

export function useSuperMarket() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  function handleProductAdd(newProduct: IProduct) {
    const existingProduct = cart.find((product) => product?.id === newProduct.id);
    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      dispatch(sliceSuperMarketActions.setCart(updatedCart));
    } else {
      dispatch(
        sliceSuperMarketActions.setCart([
          ...cart,
          {
            ...newProduct,
            quantity: 1,
          },
        ])
      );
    }

    console.log('Adding product' + newProduct.id);
  }

  function handleProductDelete(id: number) {
    const updatedCart = cart.filter((product) => product.id != id);
    dispatch(sliceSuperMarketActions.setCart(updatedCart));

    console.log('Deleting product' + id);
  }

  function getTotalPrice(): number {
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    return totalPrice;
  }

  return {
    getTotalPrice,
    handleProductDelete,
    handleProductAdd,
  };
}
