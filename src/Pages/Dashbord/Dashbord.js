import React from "react";
import { Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div class="drawer mx-12">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
          <h2 className="text-primary text-5xl font-bold ">dashbord</h2>
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
        <label for="my-drawer" class="btn btn-primary drawer-button">
          Open drawer
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
