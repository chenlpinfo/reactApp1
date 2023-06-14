import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { IProduct } from './IProduct';

const initialContext = {
  cart: [],
  setCart: () => {},
  handleProductAdd: () => {},
  handleProductDelete: () => {},
  getTotalPrice: () => 0,
};

type ContextType = {
  cart: IProduct[];
  setCart: Dispatch<SetStateAction<IProduct[]>>;
  handleProductAdd: (newProduct: IProduct) => void;
  handleProductDelete: (id: number) => void;
  getTotalPrice: () => number;
};

export const SuperMarketContext = createContext<ContextType>(initialContext); //创建context

export const SuperMarketContextProvider = ({ children }: { children: React.ReactNode }) => {
  //创建provider
  const [cart, setCart] = useState<IProduct[]>([]);

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
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }

    console.log('Adding product' + newProduct.id);
  }

  function handleProductDelete(id: number) {
    const updatedCart = cart.filter((product) => product.id != id);
    setCart(updatedCart);
    console.log('Deleting product' + id);
  }

  function getTotalPrice(): number {
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);
    return totalPrice;
  }

  const value = {
    cart,
    setCart,
    handleProductAdd,
    handleProductDelete,
    getTotalPrice,
  };

  return <SuperMarketContext.Provider value={value}>{children}</SuperMarketContext.Provider>;
};

//一定要注意在App.tsx文件中加入
{
  /*   <VideoPlayContextProvider>
        <VideoPlayApp />
      </VideoPlayContextProvider> */
}
