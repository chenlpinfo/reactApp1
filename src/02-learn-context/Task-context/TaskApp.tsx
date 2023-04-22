import AddTask from './AddTask';
import TaskList from './TaskList';

export default function TaskApp() {
  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask />

      <TaskList />
    </>
  );
}
