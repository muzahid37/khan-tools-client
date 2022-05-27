import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { toast } from "react-toastify";
import auth from '../../firebase.init';

const AddAReview = () => {
    
const [user] = useAuthState(auth);
    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.comment.value)
    
        // console.log(user.displayName,tools._id,event.target.tool.value,event.target.quantity.value);
        const reviews = {
         comment: event.target.comment.value,
          user: user.email,
          userName: user.displayName,
          ratings:event.target.ratings.value,
        }
        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(reviews)
          })
          .then(res=>res.json())
          .then(data=>{
            if(data.success){
              toast("Thanks for review")

            }
            else{
             toast.error('sprry! something is worng')
            }
            
            
           })
           
         
      };
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto mt-12">
          <div className="card-body">
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-3 justify-items-center mt-2"
            >
              <input
                className="input w-full max-w-xs"
                type="text"
                name="name"
                // disabled
                value={user?.displayName}
                placeholder="Your name"
              />
              <input
                className="input w-full max-w-xs"
                type="email"
                name="email"
                // disabled
                value={user?.email}
                placeholder="Email address"
              />
              
              <input
                className="input w-full max-w-xs"
                type="textarea"
                name="comment"
                placeholder="Add your message"
              />
              <input
                className="input w-full max-w-xs"
                type="number"
                name="ratings"
                placeholder="Please take ratings out of 5 "
              />

              <input
                className="btn btn-secondary w-full max-w-xs"
                type="submit"
                value="Add Review"
              />
            </form>
          </div>
        </div>
    );
};

export default AddAReview;