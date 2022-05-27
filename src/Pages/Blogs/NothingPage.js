import React from "react";
import { Link } from "react-router-dom";

const NothingPage = () => {
  return (
    <>
      {" "}
      <div class="card mx-auto my-12">
        <figure>
          <img src="https://i.ibb.co/1sf4P1B/download-1.jpg" alt="Shoes" />
        </figure>
      </div>
      <h2 className="text-red-500 text-4xl font-bold my-12 text-center">
        Sorry!Nothing Found{" "}
        <Link className="text-primary" to="/">
          GO HOME
        </Link>
      </h2>
    </>
  );
};

export default NothingPage;
