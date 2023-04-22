import { type } from 'os';
import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';

let nextId = 3;

export default function AddTask() {
  const { tasks, setTasks } = useContext(TaskContext);
  const [text, setText] = useState('');

  function handleAddTask() {
    setText('');
    const newTasks = [
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ];

    setTasks(newTasks);
  }
  return (
    <>
      <input placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
}
