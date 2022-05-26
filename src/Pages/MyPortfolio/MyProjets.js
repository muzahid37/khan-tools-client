import React from "react";
import { Link } from "react-router-dom";

const MyProjets = () => {
  return (
      <>
    <h2 className="text-secondary text-2xl my-7 mx-auto">My projects:</h2>
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10">
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://i.ibb.co/YNGCFG3/my-projects1.png" alt="Projects" />
        </figure>
        <div class="card-body">
          <h2 class="card-title"></h2>
          <p>car-werehouse</p>
          <div class="card-actions justify-end">
            <a href="https://car-werehouse.web.app/">
              <button class="btn btn-primary">Exploe More</button>
            </a>
          </div>
        </div>
      </div>
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://i.ibb.co/N9Mq6Jt/Screenshot-1.png" alt="Projects" />
        </figure>
        <div class="card-body">
          <h2 class="card-title"></h2>
          <p>gesund-health-medical</p>
          <div class="card-actions justify-end">
            <a href="https://gesund-health-medical.web.app/">
              <button class="btn btn-primary">Exploe More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyProjets;
