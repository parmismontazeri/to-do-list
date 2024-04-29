import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ToDoList = () => {
  return (
    <div className="h-[15cm] w-[10cm] bg-[#581c87] rounded-[20px]">
      <div className="flex flex-col w-full items-center p-5">
        <h1 className="text-3xl font-bold text-violet-500 ">TO DO LIST</h1>
        <input
          name="myInput"
          placeholder="Task name..."
          className="rounded-lg h-8 mt-4 pl-2 bg-inherit border-2 border-violet-500"
        />
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
};

export default ToDoList;
