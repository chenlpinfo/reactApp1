import { createContext, Dispatch, SetStateAction, useState } from 'react';

type ContextType = {
  isLarge: boolean;
  setIsLarge: Dispatch<SetStateAction<boolean>>;
};

const initialContext = {
  isLarge: false,
  setIsLarge: () => {},
};

export const ImageContext = createContext<ContextType>(initialContext); //创建context

export const ImageContextProvider = ({ children }: { children: React.ReactNode }) => {
  //创建provider
  const [isLarge, setIsLarge] = useState<boolean>(false);
  const value = {
    isLarge,
    setIsLarge,
  };

  return <ImageContext.Provider value={value}>{children}</ImageContext.Provider>;
};
