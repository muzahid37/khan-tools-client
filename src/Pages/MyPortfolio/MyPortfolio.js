import React from 'react';
import Education from './Education';
import MyProjets from './MyProjets';
import Technology  from './technology';

const MyPortfolio = () => {
    return (
        <div className='mx-12 my-12'>
            <h2 className='text-3xl font-bold mx-auto'>Name:<span className='text-primary'>Md Muzahidul Islam</span></h2>
           <Education></Education>
           <Technology></Technology>
           <MyProjets></MyProjets>
           
        </div>
    );
};

export default MyPortfolio;