import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Buttons from "./Buttons";

const ToDoList = () => {
  const handleAdd = (e) => {};
  return (
    <div className="h-[15cm] w-[10cm] bg-[#581c87] rounded-[20px]">
      <div className="flex flex-col w-full items-center p-5">
        <h1 className="text-3xl font-bold text-violet-500 ">TO DO LIST</h1>
        <div className="flex items-center mt-4 gap-3">
          <input
            name="myInput"
            placeholder="Task name..."
            className="rounded-lg h-8 pl-2 bg-inherit border-2 border-violet-500"
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 rounded-full w-5 h-5 flex flex-col justify-center"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <Buttons />
      </div>
    </div>
  );
};

export default ToDoList;
