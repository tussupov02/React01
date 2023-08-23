import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import Form from "../Form/Form";

export default function TaskItem({ task, setTasks, tasks }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const edit = (id, value) => {
    const newTasks = [...tasks];
    newTasks.forEach((el) => {
      if (el.id === id) {
        el.value = value;
      }
    });
    setTasks(newTasks);
  };
  if (isEditing) {
    return (
      <Form
        inputValue={inputValue}
        onChange={onChange}
        placeholder="Update task"
        buttonValue="Update task"
        onClick={() => {
          edit(task.id, inputValue);
          setIsEditing(false);
        }}
      />
    );
  }
  const del = (id) => {
    const newTasks = [...tasks];
    const result = newTasks.filter((el) => el.id !== id);
    setTasks(result);
    console.log(result);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between ",
        width: "290px",
        height: "20px",
        marginTop: "10px",
        padding: "5px",
        backgroundColor: "rgb(98, 56, 226)",
        color: "white",
        border: "1px solid rgb(98, 56, 226)",
      }}
    >
      <div>{task.value}</div>
      <div>
        <AiOutlineEdit
          onClick={() => {
            setIsEditing(true);
          }}
        />
        <BsTrash
          onClick={() => {
            del(task.id);
          }}
        />
      </div>
    </div>
  );
}
