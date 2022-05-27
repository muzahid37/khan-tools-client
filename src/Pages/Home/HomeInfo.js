import React from "react";

const HomeInfo = () => {
  return (
    <div className="stats shadow flex my-12">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <img src="https://i.ibb.co/g9LkzgS/castomar1.png" alt="" />
    </div>
    <div className="stat-title">Total Customers</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
     <img src="https://i.ibb.co/b53Z2s6/download-3-1.png" alt="" />
     
    </div>
    <div className="stat-title">Total Tools manufacturing</div>
    <div className="stat-value text-secondary">500</div>
    <div className="stat-desc">15% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://i.ibb.co/zS6kcJ2/review-1.png" />
        </div>
      </div>
    </div>
    <div className="stat-value">Review we have</div>
    <div className="stat-title">3K+</div>
    <div className="stat-desc text-secondary">1k tasks remaining</div>
  </div>
  
</div>
    // <div className="mt-12 bg-#EAEDF1 py-12">
    //   <h2 className="text-5xl font-blot text-primary uppercase">
    //     {" "}
    //     Millions business trust us
    //   </h2>
    //   <h2 className="text-3xl font-blot uppercase leading-loose">
    //     {" "}
    //     Try to understand users expectation
    //   </h2>
    //   <div className="flex justify-between m-auto  mt-12 ">
    //     <div className="home-info-item p-5 bg-neutral text-white shadow-lg shadow-indigo-500/40">
    //       <div></div>
    //       <div>100+ </div>
    //       <div>customers</div>
    //     </div>
    //     <div className="home-info-item p-5 bg-neutral text-white shadow-lg shadow-indigo-500/40">
    //       <div></div>
    //       <div>500+ </div>
    //       <div>Tools</div>
    //     </div>
    //     <div className="home-info-item p-5 bg-neutral text-white shadow-lg shadow-indigo-500/40">
    //       <div></div>
    //       <div>33K+ </div>
    //       <div>Reviews</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HomeInfo;
