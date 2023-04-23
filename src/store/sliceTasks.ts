import { createSlice } from '@reduxjs/toolkit';
import { taskType } from '../02-learn-context/Task-context/Task';
import { initialTasks } from '../03-learn-redux/Task-Redux/TaskContext';

export interface ISliceTasksState {
  tasks: taskType[];
}
const initialTasksState: ISliceTasksState = {
  //定义状态初始值
  tasks: initialTasks,
};

const sliceTasks = createSlice({
  name: 'sliceTasks',
  initialState: initialTasksState,
  reducers: {
    setTasks: (sliceState, action) => {
      //定义动作action，setIsLarge是动作名称
      sliceState.tasks = action.payload;
    },
  },
});

export const sliceTasksActions = sliceTasks.actions;

export const selectTasks = (store: any): taskType[] => store.sliceTasks?.tasks; //select选择一个状态

export default sliceTasks.reducer;
