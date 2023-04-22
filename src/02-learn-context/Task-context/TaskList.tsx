import React, { useContext } from 'react';
import Task, { taskType } from './Task';
import { TaskContext } from './TaskContext';

export default function TaskList() {
  const { tasks } = useContext(TaskContext); //引入useContext

  return (
    <ul>
      {tasks.map((task: taskType) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}
