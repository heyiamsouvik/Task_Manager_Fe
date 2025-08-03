import React from "react";

const Title = ({title}) => {
  return (
    <div className="border-b-2 pb-2">
      <h1 className="font-semibold text-zinc-800 text-center">{title}</h1>
    </div>
  );
};

export default Title;
