import React from "react";

const Taskcard = ({ data }) => {
  const showEditDiv = (e,id)=>{
    e.preventDefault();
    window.sessionStorage.setItem("editTaskId", id);
    window.location.reload();



  }
  return (
    <button className="bg-white rounded px-4 pb-4 w-[100%] py-2 hover:shadow transition-all duration-300 max-h-[220px] overflow-hidden transform hover:scale-[1.02]"
    onClick={(event => showEditDiv(event, data._id))}>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-base truncate max-w-[70%]">{data.title}</h1>
        <div className={`text-sm ${data.priority === "low" ? "text-green-500 bg-green-100": data.priority === "medium" ? "text-yellow-500 bg-yellow-100" : "text-red-500 bg-red-200"} px-2 py-0.5 rounded-2xl`}>
          <p>{data.priority}</p>
        </div>
        </div>
        <hr className="my-2" />
        <p className="text-sm text-zinc-500 text-start line-clamp-4">
         {data.description}
        </p>
      
    </button>
  );
};

export default Taskcard;
