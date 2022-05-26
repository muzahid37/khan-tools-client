import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { toast } from "react-toastify";
import auth from '../../firebase.init';

const MyOrder = () => {
    
const [user] = useAuthState(auth);
    const onSubmit = (event) => {
        event.preventDefault();
    
        // console.log(user.displayName,tools._id,event.target.tool.value,event.target.quantity.value);
        const review = {
          tool: event.target.tool.value,
          user: user.email,
          userName: user.displayName,
        }
        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(review)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
            if(data.success){
              toast("Thanks for review")
            }
            else{
             toast.error('sprry! something is worng')
            }
            // refetch();
            //  setTreatment(null);
           })
           
         
      };
    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <div className="card-body">
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-3 justify-items-center mt-2"
            >
              <input
                className="input w-full max-w-xs"
                type="text"
                name="name"
                disabled
                value={user?.displayName}
                placeholder="Your name"
              />
              <input
                className="input w-full max-w-xs"
                type="email"
                name="email"
                disabled
                value={user?.email}
                placeholder="Email address"
              />
              <input
                className="input w-full max-w-xs"
                type="text"
                name="tool"
                disabled
                // value={tools.name}
                placeholder="Your name"
              />
              <input
                className="input w-full max-w-xs"
                type="number"
                name="quantity"
                placeholder="Number of orders"
              />

              <input
                className="btn btn-secondary w-full max-w-xs"
                type="submit"
                value="Booking"
              />
            </form>
          </div>
        </div>
    );
};

export default MyOrder;