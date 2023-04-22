import React from 'react';
import Task from './Task';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: any) {
  return (
    <ul>
      {tasks.map((task: any) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}
