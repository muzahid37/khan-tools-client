import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Sheared/Loading";
import FactoryImage from "./factoryImage";

const OutFactory = () => {
  
  return (
    <>
      <div className="my-28">
        <h2 className=" uppercase  text-5xl flex text-primary my-12 w-96 mx-auto ">
        Our factory envirentment
        </h2>
        <div className=" grid sm:grid-cols-1 lg:grid-cols-3 gap-10 ">
          <div className="card w-96 bg-base-200 shadow-xl text-left m-auto">
            <img src="https://i.ibb.co/g9hMymN/factory.jpg" alt="" />
          </div>
          <div className="card w-96 bg-base-200 shadow-xl text-left m-auto">
            <img src="https://i.ibb.co/WVXSLZQ/factory2.jpg" alt="" />
          </div>
          <div className="card w-96 bg-base-200 shadow-xl text-left m-auto">
            <img src="https://i.ibb.co/JCT4x5G/factory3.jpg" alt="" />
          </div>
          <div className="card w-96 bg-base-200 shadow-xl text-left m-auto">
            <img src="https://i.ibb.co/vwPwLZb/factory4.jpg" alt="" />
          </div>
          <div className="card w-96 bg-base-200 shadow-xl text-left m-auto">
            <img src="https://i.ibb.co/vwPwLZb/factory5.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OutFactory;
