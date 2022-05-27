import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Profile = ({ profile }) => {
  const { address, education, phone,image } = profile;

  const [user] = useAuthState(auth);
  const email = user?.email;
  const name = user?.displayName;
  return (
    <>
      <div className="avatar m-auto mt-7">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={image} />
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title m-auto text-purple-500">{name}</h2>
        <h2 className="card-title m-auto ">{email}</h2>
        <h2 className="card-title m-auto ">Education:{education}</h2>
        <h2 className="card-title m-auto "> Address:{address}</h2>
        <h2 className="card-title m-auto ">Phone Number:{phone}</h2>

        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-small btn-success">
            {" "}
            <Link to="/updateprofile">Update Profile</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
