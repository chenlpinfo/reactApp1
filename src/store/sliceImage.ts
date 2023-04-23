import { createSlice } from '@reduxjs/toolkit';

export interface ISliceImageState {
  isLarge: boolean;
}
const initialImageState: ISliceImageState = {
  //定义状态初始值
  isLarge: false,
};

const sliceImage = createSlice({
  name: 'sliceImage',
  initialState: initialImageState,
  reducers: {
    setIsLarge: (sliceState, action) => {
      //定义动作action，setIsLarge是动作名称
      sliceState.isLarge = action.payload;
    },
  },
});

export const sliceImageActions = sliceImage.actions;

export const selectIsLarge = (store: any): boolean => store.sliceImage?.isLarge; //select选择一个状态

export default sliceImage.reducer;
