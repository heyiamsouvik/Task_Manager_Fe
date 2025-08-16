import React from "react";

const Title = ({title}) => {
  return (
    <div className="border-b-2 pb-2">
      <h1 className="font-semibold text-blue-800 text-center 
        transition-transform duration-300 ease-in-out transform hover:scale-105">{title}</h1>
    </div>
  );
};

export default Title;
