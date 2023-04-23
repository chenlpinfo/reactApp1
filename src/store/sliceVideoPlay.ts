import { createSlice } from '@reduxjs/toolkit';
import { taskType } from '../02-learn-context/Task-context/Task';

export interface ISliceVideoPlayState {
  isPlaying: boolean;
}
const initialVideoPlayState: ISliceVideoPlayState = {
  //定义状态初始值
  isPlaying: false,
};

const sliceVideoPlay = createSlice({
  name: 'sliceVideoPlay',
  initialState: initialVideoPlayState,
  reducers: {
    setIsPlaying: (sliceState, action) => {
      //定义动作action，setIsLarge是动作名称
      sliceState.isPlaying = action.payload;
    },
  },
});

export const sliceVideoPlayActions = sliceVideoPlay.actions;

export const selectIsPlaying = (store: any): boolean => store.sliceVideoPlay?.isPlaying; //select选择一个状态

export default sliceVideoPlay.reducer;
