import React from "react";
import { useState } from "react";
import Task from "./Task";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

const User = (user) => {
  const [isActive, setIsActive] = useState(false);
  console.log(user.user.name);
  return (
    <>
      <div className="bg-cyan-500 pb-3">
        <div
          className="  flex justify-between items-center py-1 cursor-pointer mt-1"
          onClick={() => setIsActive(!isActive)}
        >
          <div className="ml-4">{user?.user?.name}</div>
          <div className="flex gap-4">
            <button className=" bg-slate-500 px-1 rounded-sm">Delete</button>
            <button className=" bg-slate-500 px-1 rounded-sm">Update</button>
            <div className="mr-2">
              {isActive ? (
                <button>
                  {" "}
                  <RiArrowDropUpLine className="text-2xl" />{" "}
                </button>
              ) : (
                <button>
                  {" "}
                  <RiArrowDropDownLine className="text-2xl" />
                </button>
              )}
            </div>
          </div>
        </div>
        {isActive &&
          user?.user?.task?.map((item, inddex) => (
            <Task task={item.title} key={inddex} />
          ))}
      </div>
    </>
  );
};

export default User;
