import React from "react";
import { useState } from "react";


const Task = ({ task }) => {
  const [taskCompleted, setTaskCompleted] = useState(false);
  return (
    <div className="w-[90%] mx-auto bg-blue-700 mt-2 mb-3 px-1 py-1">
      <div className="flex justify-between items-center">
        <div className={`${taskCompleted ? "line-through" : ""} ml-4 text-white`}>{task}</div>
        <div className="flex items-center gap-4">
          <button className="bg-slate-500 px-1 text-white">Mark as complete</button>
          <button className="mr-4 bg-slate-500 px-1 text-white">delete</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
