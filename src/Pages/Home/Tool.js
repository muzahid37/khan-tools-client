import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const {_id,img,name,minimunOrder,quantity,price}=tool;
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
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <h2><small>Minimum <span className="text-secondary">{minimunOrder}</span> pis you can Purchage</small></h2>
          <h2><small>Available Quantity:{tool.quantity}</small></h2>
          <h2><small className="text-secondary">Price:${price}</small></h2>
          <div className="card-actions"></div>

           <button onClick={()=>navigateToPurse(_id)} className="btn btn-primary">Booking</button>
        </div>
      </div>
    </>
  );
};

export default Tool;
