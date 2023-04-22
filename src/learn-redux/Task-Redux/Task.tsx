import { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks, sliceTasksActions } from '../../store/sliceTasks';

export type TaskProps = {
  task: taskType;
};

export type taskType = {
  id: number;
  text: string;
  done: boolean;
};

export default function Task({ task }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  function deleteTask(taskId: number) {
    const newTasks = tasks.filter((t) => t.id !== taskId);
    dispatch(sliceTasksActions.setTasks(newTasks));
  }

  function changeTask(newTask: taskType) {
    dispatch(
      sliceTasksActions.setTasks(
        tasks.map((t) => {
          if (t.id === newTask.id) {
            return newTask;
          } else return t;
        })
      )
    );
  }

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input value={task.text} onChange={(e) => changeTask({ ...task, text: e.target.value })} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input type='checkbox' checked={task.done} onChange={(e) => changeTask({ ...task, done: e.target.checked })} />
      {taskContent}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </label>
  );
}
