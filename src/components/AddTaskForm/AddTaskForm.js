import { useState } from "react";
import Form from "../Form/Form";

export default function AddTaskForm({ tasks, setTasks }) {
  const [inputValue, setInputValue] = useState('');
  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  const onClick = () => {
    const copy = [...tasks];
    copy.push({ id: new Date().getTime(), value: inputValue });
    setTasks(copy);
    console.log(copy);
  };

  return (
    <Form
      inputValue={inputValue}
      onChange={onChange}
      onClick={onClick}
      buttonValue="Add task"
      placeholder="Enter task value"
    />
  );
}
