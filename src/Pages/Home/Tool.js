import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const {_id,img,name,minimunOrder,quantity,price,description}=tool;
  const navigate=useNavigate();
  
  const navigateToPurse=id=>{
    navigate(`/purchas/${id}`)
  
  
  }
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl text-left ">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-primary">{name}</h2>
          <p className="text-secondary">{description}</p>
          <h2>Minimum <span className="text-secondary">{minimunOrder}</span> pis you can Purchage</h2>
          <h2>Available Quantity:{quantity}</h2>
          <h2><small className="text-secondary">Price:${price}</small></h2>
          <div className="card-actions"></div>

           <button onClick={()=>navigateToPurse(_id)} className="btn btn-primary">Booking</button>
        </div>
      </div>
    </>
  );
};

export default Tool;
