import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const EditTask = ({ setEditTaskDiv, editTaskId, refreshTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");
  const [status, setStatus] = useState("yetToStart");

  useEffect(() => {
    const featch = async () => {
      console.log( `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/gettask/${editTaskId}`)
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/gettask/${editTaskId}`,
          {
            withCredentials: true,
          }
        );
        const task = res?.data?.taskdetails;
        setTitle(task.title);
        setDescription(task.description);
        setPriority(task.priority);
        setStatus(task.status);
      } catch (error) {
        console.log(error.response.data.error);
      }
    };
    if (editTaskId) featch();
  }, [editTaskId]);

  const editTask = async (e) => {
    e.preventDefault();
    console.log(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/editask/${editTaskId}`);
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/editask/${editTaskId}`,
        { title, description, priority, status },
        { withCredentials: true }
      );
      if (res.data.success) {
        toast.success(res.data.message);
      }
      setEditTaskDiv("hidden");
      refreshTasks();
      window.sessionStorage.removeItem("editTaskId");
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
    }
  };

  const deleteTask = async (e) => {
    e.preventDefault();
    console.log(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/deletetask/${editTaskId}`)
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/deletetask/${editTaskId}`,
        { withCredentials: true }
      );
      if(res.data.success){
        toast.success(res.data.message);
      }
      if (refreshTasks) refreshTasks();
      window.sessionStorage.removeItem("editTaskId");
      setEditTaskDiv("hidden");
    } catch (error) {
      toast.error(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  return (
    <div
      className=" bg-white rounded px-4 py-4
     w-[40%]"
    >
      <h1 className="text-center font-semibold text-xl">Edit Task</h1>
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
              value={priority}
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
              value={status}
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
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border px-2 py-1 rounded border-zinc-300 outline-none h-[25vh]"
        ></textarea>
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={editTask}
            className="w-full bg-blue-800 py-2 hover:bg-blue-700 transition-all duration-300 text-white rounded-2xl"
          >
            Edit Task{" "}
          </button>
          <button
            className="w-full border border-red-600 text-red-600 py-2 hover:bg-red-100 hover:text-red-800 transition-all duration-300 rounded-2xl"
            onClick={deleteTask}
          >
            Delete Task
          </button>
          <button
            className="w-full border border-black py-2 hover:bg-zinc-200 hover:text-black transition-all duration-300 rounded-2xl"
            onClick={(e) => {
              e.preventDefault();
              window.sessionStorage.removeItem("editTaskId");
              setEditTaskDiv("hidden");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
