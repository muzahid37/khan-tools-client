import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";

const AllUsers = () => {
    const[localUsers, setLocalUsers]=useState([]);
    useEffect(()=>{
        fetch('https://still-shelf-13702.herokuapp.com/user', {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res=>res.json())
        .then(data=>setLocalUsers(data))
    },[])
  return (
    <div>
        <h2 className="text-4xl font-bold ">All user</h2>
      <div class="overflow-x-auto my-12">
        <table class="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
            <th></th>
        <th>User</th>
        <th>Make Role</th>
        <th>Edit user</th>
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
