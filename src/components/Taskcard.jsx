import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Taskcard(props) {
  const [done, setDone] = useState(false);
  return (
    <div className="flex flex-row justify-between w-full h-8 rounded bg-blue-500 mt-4 px-3">
      <button
        onClick={() => {
          setDone(!done);
        }}
      >
        {done ? (
          <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
      </button>
      <p className={done ? "line-through" : ""}>{props.text}</p>
      <button onClick={props.onDelete}>
        <FontAwesomeIcon icon={faTrash} className="text-red-500" />
      </button>
    </div>
  );
}

export default Taskcard;
