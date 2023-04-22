import { useState } from 'react';

export type TaskProps = {
  task: taskType;
  changeTask: (e: any) => void;
  onDelete: (id: number) => void;
};

export type taskType = {
  id: number;
  text: string;
  done: boolean;
};

export default function Task00({ task, changeTask, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            const newTask = { ...task, text: e.target.value };
            changeTask(newTask);
          }}
        />
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
      <input
        type='checkbox'
        checked={task.done}
        onChange={(e) => {
          changeTask({ ...task, done: e.target.checked });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
}
