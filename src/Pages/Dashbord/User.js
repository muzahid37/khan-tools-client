import React from "react";

const User = ({localUser}) => {
    const{email}=localUser;
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td><button className="btn btn-xs"></button></td>
      <td>Blue</td>
    </tr>
  );
};

export default User;
