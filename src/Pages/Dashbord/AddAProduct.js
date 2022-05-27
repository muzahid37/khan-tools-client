import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
   
    const onSubmit = (event) => {
        event.preventDefault();
        const newTools={
            name: event.target.name.value,
            img:  event.target.image.value,
            description: event.target.description.value,
            minimunOrder:  event.target.minimumOrderQuantity.value,
            quantity:  event.target.availableQuantity.value,
            price: event.target.price.value,

        }
       
    const url = `http://localhost:5000/tool`;
    console.log(url);
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newTools)
    })
    .then(res=> res.json())
    .then(result =>{
        console.log(result);
    } )
};    return (
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
          placeholder="Tools name"
        />
        <input
          className="input w-full max-w-xs"
          type="text"
          name="image"
          // disabled
          placeholder="image url"
        />
        
        <input
          className="input w-full max-w-xs"
          type="textarea"
          name="description"
          placeholder="Tools datails"
        />
        
        <input
          className="input w-full max-w-xs"
          type="number"
          name="minimumOrderQuantity"
          placeholder="Add minimum order quantity"
        />
         <input
          className="input w-full max-w-xs"
          type="number"
          name="availableQuantity"
          placeholder="Add available quantity"
        />
        <input
          className="input w-full max-w-xs"
          type="number"
          name="price"
          placeholder="Add Price par unit"
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

export default AddAProduct;