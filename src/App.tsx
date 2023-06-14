import './App.css';
import SuperMarketApp from './react-tutorial/Final-Project/SuperMarketApp';
import SuperMApp from './react-tutorial/SuperMarket-redux/SuperMApp';
import { MyMap } from './react-tutorial/projectVI/MyMap';
import { Form } from './react-tutorial/useRef/Form';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SuperMApp></SuperMApp>
        </PersistGate>
      </ReduxProvider>

      {/* <SuperMarketApp></SuperMarketApp> */}
      {/* <Form></Form> */}
      {/* <MyMap /> */}
      {/* <StoreFront/> */}
      {/* <StoreFront /> */}
      {/* <CatFriends></CatFriends> */}
      {/* <DashboardApp></DashboardApp> */}
      {/* <ChatApp></ChatApp> */}
      {/* <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <VideoPlayApp />
        </PersistGate>
      </ReduxProvider> */}
      {/* <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TaskAppRedux />
        </PersistGate>
      </ReduxProvider> */}
      {/* <TaskContextProvider>
        <TaskApp />
      </TaskContextProvider> */}
      {/* <VideoPlayApp></VideoPlayApp> */}
      {/* <VideoPlayContextProvider>
        <VideoPlayApp />
      </VideoPlayContextProvider> */}
      {/* <StopWatchApp></StopWatchApp> */}
      {/* </StoreFront> */}
    </>
  );
}

export default App;
