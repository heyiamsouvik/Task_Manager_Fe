import Header from "./../components/Header";
import AddTask from "../components/Dashboard/AddTask";
import { useEffect, useState } from "react";
import Title from "./../components/Dashboard/Title";
import YetToStart from "../components/Dashboard/YetToStart";
import InProgrerss from "../components/Dashboard/InProgrerss";
import Complete from "../components/Dashboard/Complete";
import axios from "axios";
import EditTask from "../components/Dashboard/EditTask";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [addTaskDiv, setAddTaskDiv] = useState("hidden");
  const [tasks, setTasks] = useState();
  const [editTaskDiv, setEditTaskDiv] = useState("hidden");
  const [editTaskId, setEditTaskId] = useState();
  const featchNotes = async () => {
    console.log(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/allnotes`)
    try {
      const res = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/allnotes`, {
        withCredentials: true,
      });
      setTasks(res.data.tasks);
    } catch (error) {
      console.log(error);
      toast.error("Failed to featch notes")
    }
  };

  useEffect(() => {
    featchNotes();
    if (window.sessionStorage.getItem("editTaskId")) {
      setEditTaskId(window.sessionStorage.getItem("editTaskId"));
      setEditTaskDiv("block");
    }
  }, [addTaskDiv]);

  return (
    <div className="w-full relative">
      <div className="bg-white">
        <Header setAddTaskDiv={setAddTaskDiv} />
      </div>

      <div className="px-12 py-4 flex gap-12 bg-zinc-100 min-h-[90vh] max-h-none">
        <div className="w-1/3">
          <Title title={"Yet To Start"} />
          <div className="pt-2">{<YetToStart task={tasks?.yetToStart} />}</div>
        </div>
        <div className="w-1/3">
          <Title title={"In Progress"} />
          <div className="pt-2">{<InProgrerss task={tasks?.inProgress} />}</div>
        </div>
        <div className="w-1/3">
          <Title title={"Completed"} />
          <div className="pt-2">{<Complete task={tasks?.completed} />}</div>
        </div>
      </div>

      {/* --------------------------  */}

      <div
        className={`w-full fixed ${addTaskDiv} h-screen top-0 left-0 opacity-85 bg-zinc-800`}
      ></div>
      <div
        className={`w-full ${addTaskDiv}  flex  fixed h-screen top-0 left-0 items-center justify-center`}
      >
        <AddTask setAddTaskDiv={setAddTaskDiv} />
      </div>
      {/* -------------------------------------  */}
      <div
        className={`w-full fixed ${editTaskDiv} h-screen top-0 left-0 opacity-85 bg-zinc-800`}
      ></div>
      <div
        className={`w-full ${editTaskDiv}  flex  fixed h-screen top-0 left-0 items-center justify-center`}
      >
        <EditTask
          editTaskId={editTaskId}
          setEditTaskDiv={setEditTaskDiv}
          refreshTasks={featchNotes}
        />
      </div>
    </div>
  );
};

export default Dashboard;
