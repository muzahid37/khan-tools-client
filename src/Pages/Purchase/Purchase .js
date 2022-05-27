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
          toast.error("sorry! something is worng");
        }
      });
  };

  return (
    <>
     <div className="text-secondary text-4xl mx-auto flex-col mx-auto w-3/4 my-12">
        <h2> User name:{user?.displayName}</h2>
        <h2> User Email:{user?.email}</h2>
      </div>  
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
                name="availableQuantity"
                disabled
                value={tools.quantity}
                placeholder="Your name"
              />
              <input
                className="input w-full max-w-xs"
                type="number"
                name="minimunOrder"
                disabled
                value={tools.minimunOrder}
                placeholder="minimum number of order"
              />
              <input
                className="input w-full max-w-xs"
                type="number"
                name="price"
                disabled
                value={tools.price}
                placeholder="Add Price par unit"
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
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Purchase;
