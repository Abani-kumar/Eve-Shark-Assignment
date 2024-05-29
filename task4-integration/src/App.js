import { useEffect } from "react";
import "./App.css";
import User from "./components/User";
import { createUsers, getAllUsers } from "./service/service";
import { useState } from "react";
import { toast } from "react-hot-toast";

function App() {
  const [loading, setLoading] = useState(false);
  // const [users, setUsers] = useState(null);
  const [input, setInput] = useState("");

  const users=[
    {name:"Abani",task:[{title:"task1",completed:false},{title:"task2",completed:false},{title:"task3",completed:false}]},
    {name:"Shane",task:[{title:"task1",completed:false},{title:"task2",completed:false},{title:"task3",completed:false}]},
    {name:"John",task:[{title:"task1",completed:false},{title:"task2",completed:false},{title:"task3",completed:false}]}
  ]

//   const helper = async () => {
//     const response = await getAllUsers();
//     setUsers(response);
//     console.log(users);
//     setLoading(false);
//   };
//   useEffect(() => {
//     helper();
//   }, []);

  const createNewUser = async () => {
    // setLoading(true);
    // if (input === "") {
    //   toast.error("input field should not be empty");
    //   setLoading(false);
    //   return;
    // }
    // const response = await createUsers(input);
    // setUsers(response);
    // console.log(users);
    // setInput("");
    // setLoading(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="w-screen h-screen">
          <div className="w-[60%] mx-auto mt-8">
            <h1 className="text-center text-3xl mb-4">Users and their Task</h1>
            <div className="flex justify-center items-center gap-1">
              <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="create new user"
                className="pl-2 rounded-sm bg-slate-300 outline-none"
              />
              <button onClick={createNewUser} className=" bg-slate-500 px-1 text-white rounded-sm">
                Create
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {users ? (
                users?.map((user, index) => <User key={index} user={user} />)
              ) : (
                <h1 className="text-center mt-5 text-2xl text-red-600">
                  No users created
                </h1>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
