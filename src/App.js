import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import TaskList from "./components/TaskList/TaskList";
import "./App.css";
export default function App() {
  const [tasks, setTasks] = useState([{ id: 1, value: "Первое задание" }]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "rgb(12, 12, 64)",
        color: "white",
        width: "400px",
        height: "250px"
      }}
    >
      <h2>Get things done!</h2>
      <AddTaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
