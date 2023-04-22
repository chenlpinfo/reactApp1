import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import TaskAppRedux from './03-learn-redux/Task-Redux/TaskAppRedux';
import './App.css';
import { persistor, store } from './store';

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
