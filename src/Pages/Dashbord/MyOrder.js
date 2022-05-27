import React from "react";
import { useEffect, useState } from "react";

import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    
   
    fetch(`http://localhost:5000/booking?user=${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user]);
  return (
    <div>
      <div >
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>{orders.user}</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
           
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
