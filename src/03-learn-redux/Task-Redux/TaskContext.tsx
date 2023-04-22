import { createContext, Dispatch, SetStateAction, useState } from 'react';
import { taskType } from './Task';

export const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];
const initialContext = {
  tasks: initialTasks,
  setTasks: () => {},
};

type ContextType = {
  tasks: taskType[];
  setTasks: Dispatch<SetStateAction<taskType[]>>;
};

export const TaskContext = createContext<ContextType>(initialContext); //创建context

export const TaskContextProvider = ({ children }: { children: React.ReactNode }) => {
  //创建provider
  const [tasks, setTasks] = useState(initialTasks);
  const value = {
    tasks,
    setTasks,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

//一定要注意在App.tsx文件中加入
{
  /*   <TaskContextProvider>
        <TaskApp />
      </TaskContextProvider> */
}
