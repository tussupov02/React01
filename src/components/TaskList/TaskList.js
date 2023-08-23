import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ tasks, setTasks }) {
  return (
    <>
      {tasks.map((el) => {
        return (
          <TaskItem key={el.id} task={el} tasks={tasks} setTasks={setTasks} />
        );
      })}
    </>
  );
}
