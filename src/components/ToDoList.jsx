import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Taskcard from "./Taskcard";
import { useState } from "react";

const ToDoList = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    const taskId = Date.now();
    const newTask = {
      id: taskId,
      text: task,
    };

    setTodoList([...todoList, newTask]);
    setTask("");
  };

  const handleRemoveTask = (taskId) => {
    setTodoList(todoList.filter((task) => task.id !== taskId));
    console.log(taskId);
  };

  return (
    <div className="h-[15cm] w-[10cm] bg-[#581c87] rounded-[20px]">
      <div className="flex flex-col w-full items-center p-5">
        <h1 className="text-3xl font-bold text-violet-500 ">TO DO LIST</h1>
        <div className="flex items-center mt-4 gap-3">
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            name="myInput"
            placeholder="Task name..."
            className="rounded-lg h-8 pl-2 bg-inherit border-2 border-violet-500"
          />
          <button
            onClick={handleAddTask}
            className="bg-green-500 rounded-full w-5 h-5 flex flex-col justify-center"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <div className="overflow-y-auto w-full h-[11.5cm]">
          {todoList.map((addedTask, index) => (
            <Taskcard
              text={addedTask.text}
              onDelete={() => handleRemoveTask(addedTask.id)}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
