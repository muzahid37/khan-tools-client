import React from "react";

const HomeInfo = () => {
  return (
    <div className="stats shadow flex my-12">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title">Total Customers</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title">Total Tools manufacturing</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc">15% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://api.lorem.space/image/face?w=128&h=128" />
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
