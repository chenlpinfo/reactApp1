import { createContext, Dispatch, SetStateAction, useState } from 'react';

const initialContext = {
  isPlaying: false,
  setIsPlaying: () => {},
};

type ContextType = {
  isPlaying: boolean;
  setIsPlaying: Dispatch<SetStateAction<boolean>>;
};

export const VideoPlayContext = createContext<ContextType>(initialContext); //创建context

export const VideoPlayContextProvider = ({ children }: { children: React.ReactNode }) => {
  //创建provider
  const [isPlaying, setIsPlaying] = useState(false);

  const value = {
    isPlaying,
    setIsPlaying,
  };

  return <VideoPlayContext.Provider value={value}>{children}</VideoPlayContext.Provider>;
};

//一定要注意在App.tsx文件中加入
{
  /*   <VideoPlayContextProvider>
        <VideoPlayApp />
      </VideoPlayContextProvider> */
}
