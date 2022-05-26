import React from 'react';
import Banner from './Banner';
import HomeInfo from './HomeInfo';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <HomeInfo></HomeInfo>
            <Tools></Tools>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;