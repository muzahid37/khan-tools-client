import React from 'react';

const FactoryImage = ({factoryImage}) => {
    const {image}=factoryImage;
    console.log(image);
    return (
        <div className="card w-96 bg-base-200 shadow-xl text-left m-auto">
        <img src={image} alt="" />
      </div>
    );
};

export default FactoryImage;