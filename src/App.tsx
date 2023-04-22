import { PersistGate } from 'redux-persist/integration/react';
import { VideoPlayContextProvider } from './02-learn-context/video-play-context/VideoPlayContext';
import VideoPlayApp from './03-learn-redux/video-play-redux/VideoPlayApp';
import './App.css';
import { persistor, store } from './store';
import { Provider as ReduxProvider } from 'react-redux';

function App() {
  return (
    <>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <VideoPlayApp />
        </PersistGate>
      </ReduxProvider>

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
    </>
  );
}

export default App;
