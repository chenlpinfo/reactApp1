import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks, sliceTasksActions } from '../../store/sliceTasks';

let nextId = 3;

export default function AddTask() {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
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
    dispatch(sliceTasksActions.setTasks(newTasks));
  }
  return (
    <>
      <input placeholder='Add task' value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTask}>Add</button>
    </>
  );
}
