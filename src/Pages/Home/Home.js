import React from 'react';
import Banner from './Banner';
import ContactUa from './ContactUa';
import HomeInfo from './HomeInfo';
import OutFactory from './OutFactory';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <HomeInfo></HomeInfo>
            <Tools></Tools>
            <Reviews></Reviews>
            <ContactUa></ContactUa>
            <OutFactory></OutFactory>
            
        </div>
    );
};

export default Home;