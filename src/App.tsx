import './App.css';
import TaskApp from './learn-context/Task-context/TaskApp';
import { TaskContextProvider } from './learn-context/Task-context/TaskContext';

function App() {
  return (
    <>
      <TaskContextProvider>
        <TaskApp />
      </TaskContextProvider>
    </>
  );
}

export default App;
