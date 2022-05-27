import React from "react";
import { toast } from "react-toastify";

const User = ({localUser}) => {
    const{email,role}=localUser;
    const makeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
        })
        .then(res=>res.json())
        .then(data=>{
            
            console.log(data)
            toast.success(`Made an admin Succsessfully`)
        })
    }
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>{role!=='admin'&&<button onClick={makeAdmin} className="btn btn-xs">Make admin</button>}</td>
      <td><button className="btn btn-xs">Remove user</button></td>
    </tr>
  );
};

export default User;
