import { createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../react-tutorial/SuperMarket/IProduct';

export interface ISliceSuperMarketState {
  cart: IProduct[];
}
const initialSuperMarketState: ISliceSuperMarketState = {
  //定义状态初始值
  cart: [],
};

const sliceSuperMarket = createSlice({
  name: 'sliceSuperMarket',
  initialState: initialSuperMarketState,
  reducers: {
    setCart: (sliceState, action) => {
      //定义动作action，setIsLarge是动作名称
      sliceState.cart = action.payload;
    },
  },
});

export const sliceSuperMarketActions = sliceSuperMarket.actions;

export const selectCart = (store: any): IProduct[] => store.sliceSuperMarket?.cart; //select选择一个状态

export default sliceSuperMarket.reducer;
