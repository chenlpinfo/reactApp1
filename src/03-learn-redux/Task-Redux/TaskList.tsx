import { useSelector } from 'react-redux';
import { selectTasks } from '../../store/sliceTasks';
import Task, { taskType } from './Task';

export default function TaskList() {
  const tasks = useSelector(selectTasks);

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
