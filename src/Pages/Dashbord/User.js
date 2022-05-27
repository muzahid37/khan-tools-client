import React from "react";
import { toast } from "react-toastify";

const User = ({localUser}) => {
    const{email,role}=localUser;
    console.log(localUser)
    const makeAdmin = () => {
      fetch(`https://still-shelf-13702.herokuapp.com/user/admin/${email}`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
            if(res.status===403){
                toast.error(`Failed to make an admin`)
            }
          return res.json()})
        .then((data) => {
          if (data.modifiedCount > 0) {
            
            toast.success(`Successfully made an admin`);
          }
        });
    }
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td> {role !== "admin" && (
          <button className="btn btn-xs" onClick={makeAdmin}>
            Make Admin
          </button>
        )}</td>
      <td><button className="btn btn-xs">Remove user</button></td>
    </tr>
  );
};

export default User;
