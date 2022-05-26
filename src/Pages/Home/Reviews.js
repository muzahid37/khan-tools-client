import React, { useEffect, useState } from "react";
import Review  from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  // console.log(reviews);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-28">
        <h2 className="text-center uppercase  text-5xl text-primary my-12 ">Reviews</h2>
        <div className=" grid sm:grid-cols-1 lg:grid-cols-3 gap-10 ">
          
         {
            reviews.map(review=><Review
              key={review._id}
              review={review}
              ></Review>)
        
         }
        </div>
      </div>
      
  );
};

export default Reviews;
