import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './App.css';
import { persistor, store } from './store';
import { TaskContextProvider } from './learn-context/Task-context/TaskContext';
import TaskAppRedux from './learn-redux/Task-Redux/TaskAppRedux';

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TaskAppRedux />
        </PersistGate>
      </ReduxProvider>
      {/* <TaskContextProvider>
        <TaskApp />
      </TaskContextProvider> */}
    </>
  );
}

export default App;
