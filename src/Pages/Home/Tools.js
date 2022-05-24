import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/tool')
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
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
    </div>
  );
};

export default Tools;