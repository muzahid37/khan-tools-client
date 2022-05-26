import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user] = useAuthState(auth);

  const { toolId } = useParams();

  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/tool/${toolId}`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(tools.minimunOrder, tools.quantity, user?.displayName);

    const booking = {
      toolId: tools._id,
      minimunOrder: tools.minimunOrder,
      tool: event.target.tool.value,
      user: user.email,
      userName: user.displayName,
      stock: tools.quantity,
      quantity: event.target.quantity.value,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast("Thanks for booking");
        } else {
          toast.error("sprry! something is worng");
        }
      });
  };

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
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-3 justify-items-center mt-2"
            >
              <input
                className="input w-full max-w-xs"
                type="text"
                name="name"
                disabled
                value={user?.displayName}
                placeholder="Your name"
              />
              <input
                className="input w-full max-w-xs"
                type="email"
                name="email"
                disabled
                value={user?.email}
                placeholder="Email address"
              />
              <input
                className="input w-full max-w-xs"
                type="text"
                name="tool"
                disabled
                value={tools.name}
                placeholder="Your name"
              />
              <input
                className="input w-full max-w-xs"
                type="number"
                name="quantity"
                placeholder="Number of orders"
              />

              <input
                className="btn btn-secondary w-full max-w-xs"
                type="submit"
                value="Booking"
              />
            </form>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                disabled
                value={user?.displayName}
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                 
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
                {errors.name?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                disabled
                value={user?.email}
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">minimum quantity number</span>
              </label>
              <input
                type="number"
                placeholder={tools.minimunOrder}
                className="input input-bordered w-full max-w-xs"
                {...register("number", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  pattern: {
                    value: /{tools.minimunOrder}<&&{tool.quantity}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="number"
                placeholder="number off quantity"
                className="input input-bordered w-full max-w-xs"
                {...register("number", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  pattern: {
                    // value: ,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>


            </div>

            
            <input
              className="btn w-full max-w-xs text-white btn-primary"
              type="submit"
              value="Booking"
            />
            <p>
              
            </p>
          </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
