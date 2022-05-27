import React from "react";

const Review = ({ review }) => {
  const { user, userName, comment } = review;
  // console.log(user);
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl text-left m-auto">
        <div className="card-body ">
          <p>{comment}</p>

          <h2>
            <small className="text-secondary text-2xl">{userName}</small>
          </h2>
          <h2 className="2xl font bold">{user}</h2>
        </div>
      </div>
    </>
  );
};

export default Review;
