import React from "react";
import Tool from "./Tool";

const Tools = () => {
  const tools = [
    {
      _id: 1,
      name: "Hammer",
      img: "https://i.ibb.co/3p06qVc/hammer.jpg",
      description: " ",
    },
    {
      _id: 2,
      name: "Drills",
      img: "https://i.ibb.co/7tSbPhx/knife.jpg",
      description: " ",
    },
    {
      _id: 3,
      name: "Hammer",
      img: "https://i.ibb.co/3p06qVc/hammer.jpg",
      description: " ",
    },
    {
      _id: 4,
      name: "Hammer",
      img: "https://i.ibb.co/3p06qVc/hammer.jpg",
      description: " ",
    },
  ];
  return (
    <div className="my-28">
      <h2 className="text-center uppercase  text-5xl text-primary my-12 ">tools we Provide</h2>
      <div className=" grid sm:grid-cols-1 lg:grid-cols-3 gap-10 ">
       {
           tools.map(tool=><Tool
           key={tool._id}
           tool={tool}
           ></Tool>)
       }
      </div>
    </div>
  );
};

export default Tools;
