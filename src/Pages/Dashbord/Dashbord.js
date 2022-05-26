import React from "react";
import { Link, Outlet } from "react-router-dom";
import AddAReview from "./AddAReview";

const Dashbord = () => {
  return (
    <div class="drawer drawer-mobile">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content ">
      {/* <!-- Page content here --> */}
      <Outlet></Outlet>
      
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" class="drawer-overlay"></label> 
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
        <li><Link to="/dashbord">MY Order</Link></li>
        <li><Link to="/dashbord/myreview">My Review</Link></li>
        <li><Link to="/dashbord/MyPortfolio">My Portfolio</Link></li>
      </ul>
    
    </div>
  </div>
  );
};

export default Dashbord;
