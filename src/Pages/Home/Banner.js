import React from "react";
import bgImage from ".././../image/banner.jpg";
import './Banner.css'

const Banner = () => {
  return (
    <div
    //   style={{ background: `url(${bgImage})`, backgroundSize: "cover" }}
    //   className="bg-base-100  "
    // >
    //   <h2 className="text-5xl text primary">
    //     We Are ready to Probide you World class tools
    //   </h2>
    //   <button className="btn btn-primary mt-5 border-0 uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary text-2xl">
    //     Booking Tools
    //   </button>

    //   <div
        class="hero min-h-screen "
        style={{background: `url(${bgImage}) `, backgroundSize: "cover" }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md text-white"ba>
            <h1 class="mb-5 text-5xl font-bold">Tools managements</h1>
            <p class="mb-5">
             we are manufactur all kind of tool who use our every day life.
            
            </p>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Banner;
