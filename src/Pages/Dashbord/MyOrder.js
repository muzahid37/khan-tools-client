import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrder = () => {
  const [user]=useAuthState(auth);
  const email=user?.email;
  const [orders, setOrders] = useState([]);
  useEffect(()=>{
    const url=`http://localhost:5000/booking?user=${email}`
    console.log(url);
     fetch(`url`)
     .then(res=>res.json())
     .then(data=>console.log(data))
  },[user])
  
  
  return (
    <div>
      <h2>order:{orders.user}</h2>
      
    </div>
  );
};

export default MyOrder;