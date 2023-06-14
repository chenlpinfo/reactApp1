import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { IProduct } from './IProduct';

const initialContext = {
  cart: [],
  setCart: () => {},
};

type ContextType = {
  cart: IProduct[];
  setCart: Dispatch<SetStateAction<IProduct[]>>;
};

export const SuperMarketContext = createContext<ContextType>(initialContext); //创建context

export const SuperMarketContextProvider = ({ children }: { children: React.ReactNode }) => {
  //创建provider
  const [cart, setCart] = useState<IProduct[]>([]);

  const value = {
    cart,
    setCart,
  };

  return <SuperMarketContext.Provider value={value}>{children}</SuperMarketContext.Provider>;
};

//一定要注意在App.tsx文件中加入
{
  /*   <VideoPlayContextProvider>
        <VideoPlayApp />
      </VideoPlayContextProvider> */
}
