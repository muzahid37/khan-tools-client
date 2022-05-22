import React from 'react';
import Banner from './Banner';
import HomeInfo from './HomeInfo';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <HomeInfo></HomeInfo>
            <Tools></Tools>
        </div>
    );
};

export default Home;