import React from "react";

const ContactUa = () => {
  return (
    <div>
        <h2 className="text-4xl text-primary text-center mx-auto my-12  font-bolt">Contact with us</h2>

      <div class="card w-96 bg-base-100 shadow-xl mx-auto my-12 w-3/4 p-8">
      <input
        type="text"
        placeholder="Type your name"
        class="input input-bordered w-full my-4"
      />
       <input
        type="email"
        placeholder="email address"
        class="input input-bordered w-full my-4"
      />
       <textarea
        type="textarea"
        placeholder="Type here"
        class="input input-bordered w-full my-4"
      ></textarea>
      <input type="submit" value='submit' className="btn btn-primary my-4" />
        
      </div>
     
    </div>
  );
};

export default ContactUa;
