import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Profile from "./profile";

const MyProfile = () => {
    const [profiles, setProfiles] = useState([]);
    // console.log(profiles)
    useEffect(() => {
      fetch('https://still-shelf-13702.herokuapp.com/profile')
        .then((res) => res.json())
        .then((data) => setProfiles(data));
    }, []);
 
//   console.log(user);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-12 ">
      {
           profiles.map(profile=><Profile
           key={profile._id}
           profile={profile}
           ></Profile>)
       }
       
      </div>
    </div>
  );
};

export default MyProfile;
