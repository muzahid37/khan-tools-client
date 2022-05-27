import React from 'react';
import { useEffect, useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Order from './Order'

const MyOrder = () => {
  const [user]=useAuthState(auth);
  const email=user?.email;
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
    const url=`http://localhost:5000/booking?user=${email}`
    console.log(url);
     fetch(`url`)
     .then(res=>res.json())
     .then(data=>setOrders(data))
  },[user])
  return (
    <div>
        <h2 className="text-4xl font-bold ">All Orders</h2>
      <div class="overflow-x-auto my-12">
        <table class="table table-zebra w-full">
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
            {
                orders.map(order=><Order
                key='order._id'
                order={order}
                ></Order>)
            }
            
            
          </tbody>
        </table>
        </div>
      </div>
    
  );
};
export default MyOrder;