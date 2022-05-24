import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { toolId } = useParams();

  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/tool/${toolId}`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          
          <div className="card-body ">
          <h2 className="card-title">{tools.name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <h2>
              <small>
                Minimum{" "}
                <span className="text-secondary">{tools.minimunOrder}</span> pis
                you can Purchage
              </small>
            </h2>
            <h2>
              <small>Available Quantity:{tools.quantity}</small>
            </h2>
            <h2>
              <small className="text-secondary">Price:${tools.price}</small>
            </h2>
          </div>{" "}
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder={tools.price}
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
