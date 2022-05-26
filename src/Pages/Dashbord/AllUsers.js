import React, { useEffect, useState } from "react";
import User from "./User";

const AllUsers = () => {
    const[localUsers, setLocalUsers]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>setLocalUsers(data))
    },[])
  return (
    <div>
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
                localUsers.map(localUser=><User
                key='localUsers._id'
                localUser={localUser}
                ></User>)
            }
            
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
