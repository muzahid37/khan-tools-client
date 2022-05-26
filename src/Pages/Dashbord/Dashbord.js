import React from "react";
import { Link, Outlet } from "react-router-dom";
import AddAReview from "./AddAReview";

const Dashbord = () => {
  return (
    <div className="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content ">
      {/* <!-- Page content here --> */}
      <Outlet></Outlet>
      
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay "></label> 
      <ul className="menu p-4 overflow-y-auto w-80 shadow-xl  text-white text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li><Link to="/dashbord">MY Order</Link></li>
        <li><Link to="/dashbord/myreview">My Review</Link></li>
        <li><Link to="/dashbord/MyProfile">My profile</Link></li>
        <li><Link to="/dashbord/allusers">All users</Link></li>
      </ul>
    
    </div>
  </div>
  );
};

export default Dashbord;