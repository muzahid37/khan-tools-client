import React from "react";

const Tool = ({tool}) => {
  return (
    <>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
        <img
          src={tool.img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{tool.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
        
        </div>
      </div>
        </div>
     
    </>
  );
};

export default Tool;