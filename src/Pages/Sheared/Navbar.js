import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState} from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import Loading from "./Loading";


const Navbar = () => {
  const logout=()=>{
    signOut(auth)
  }
  const [user, loading, ]=useAuthState(auth);
  if(loading){
    <Loading></Loading>
  }

  const menuItems=<>
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/myportfolio'>My Portfolio</Link></li>
  <li><Link to='/blog'>Blogs</Link></li>
 
  {
    user&&<li><Link to='/dashbord'>Dashbord</Link></li>
  }
  <li>{ user?<button onClick={logout} className="btn btn-ghost">Sign out </button>:<Link to='/login'>Login</Link>}</li>
  
  </>
  return (
    <div >
      <div className="navbar bg-neutral text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
            {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
          {menuItems}
          </ul>
        </div>
         <div className="navbar-end">
         <label for="my-drawer-2" tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
           
        
        </div>
       
       
      </div>
    </div>
  );
};

export default Navbar;
