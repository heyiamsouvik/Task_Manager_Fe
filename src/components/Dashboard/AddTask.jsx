import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddTask = ({ setAddTaskDiv }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("yetToStart");

  const addtask = async (e) => {
    e.preventDefault();
    console.log(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/addtask`)
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/addtask`,
        { title, description, priority, status },
        {
          withCredentials: true,
        }
      );
      if(res.data.success){
        toast.success("Task saved successfully!");
      }
      
      setAddTaskDiv("hidden");
      setTitle("");
      setDescription("");
      setPriority("low");
      setStatus("yetToStart");
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);

    }
  };

  return (
    <div
      className=" bg-white rounded px-4 py-4
     w-[40%]"
    >
      <h1 className="text-center font-semibold text-xl">Add Task</h1>
      <hr className="mb-4 mt-2" />
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="border px-2 py-1 rounded border-zinc-300 outline-none"
          placeholder="Title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex items-center justify-between gap-4">
          {/* Selection div  */}
          <div className="w-full">
            <h3 className="mb-2">Select Priority</h3>
            <select
              name="priority"
              id=""
              className="border px-2 py-1 rounded border-zinc-300 outline-none w-full"
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="w-full">
            <h3 className="mb-2">Select Status</h3>
            <select
              name="status"
              id=""
              className="border px-2 py-1 rounded border-zinc-300 outline-none w-full"
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="yetToStart">Yet To Start</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
        <textarea
          name="description"
          id=""
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border px-2 py-1 rounded border-zinc-300 outline-none h-[25vh]"
        ></textarea>
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={addtask}
            className="w-full bg-blue-800 py-2 hover:bg-blue-700 transition-all duration-300 text-white rounded-2xl"
          >
            Add Task{" "}
          </button>
          <button
            className="w-full border border-black py-2 hover:bg-zinc-200 hover:text-black transition-all duration-300 rounded-2xl"
            onClick={(e) => {
              e.preventDefault();
              setAddTaskDiv("hidden");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
