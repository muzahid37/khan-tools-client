import React from 'react';
import bgImage from '.././../image/banner.jpg'

const Banner = () => {
    return (
        <div style={{
            background: `url(${bgImage})`,
            backgroundSize: 'cover'
        }}   className='bg-base-100  '>
             <h2 className='text-5xl text primary'>We Are ready to Probide you World class tools</h2>
            <button className='btn btn-primary mt-5 border-0 uppercase text-white font-bold bg-gradient-to-r from-primary to-secondary text-2xl'>Booking Tools</button>
        </div>
    );
};

export default Banner;
