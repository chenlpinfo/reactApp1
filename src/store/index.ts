import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import imageReducer from './sliceImage';
import tasksReducer from './sliceTasks';

export const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['sliceImage', 'sliceTasks'],
};

const imagePersistConfig = {
  key: 'sliceImage',
  storage: storage,
  blacklist: [],
};

const tasksPersistConfig = {
  key: 'sliceTasks',
  storage: storage,
  blacklist: [],
};

const rootReducer = combineReducers({
  sliceImage: persistReducer(imagePersistConfig, imageReducer),
  sliceTasks: persistReducer(tasksPersistConfig, tasksReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer); //此行开始到最底下都不用改变

export const store = configureStore({
  //store是一个仓库，按slice存放各种状态
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store); //此行不用改
