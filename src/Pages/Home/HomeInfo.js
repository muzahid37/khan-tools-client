import React from "react";

const HomeInfo = () => {
  return (
    <div className="mt-12 bg-#EAEDF1 py-12">
      <h2 className="text-5xl font-blot text-primary uppercase">
        {" "}
        Millions business trust us
      </h2>
      <h2 className="text-3xl font-blot uppercase leading-loose">
        {" "}
        Try to understand users expectation
      </h2>
      <div className="flex justify-between m-auto  mt-12 ">
        <div className="home-info-item p-5 bg-neutral text-white shadow-lg shadow-indigo-500/40">
          <div></div>
          <div>100+ </div>
          <div>customers</div>
        </div>
        <div className="home-info-item p-5 bg-neutral text-white shadow-lg shadow-indigo-500/40">
          <div></div>
          <div>500+ </div>
          <div>Tools</div>
        </div>
        <div className="home-info-item p-5 bg-neutral text-white shadow-lg shadow-indigo-500/40">
          <div></div>
          <div>33K+ </div>
          <div>Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
