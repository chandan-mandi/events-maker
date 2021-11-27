import React from 'react';
import EventPackage from '../components/Home/EventPackages/EventPackage/EventPackage';
import Header from '../components/Home/Header/Header';
import SpecialServices from '../components/Home/SpecialServicesContainer/SpecialServices/SpecialServices';
import WhatWeOffer from '../components/Home/WhatWeOffer/WhatWeOffer';

const Home = () => {
    return (
        <div className="home-page">
            <Header/>
            <SpecialServices/>
            <WhatWeOffer/>
            <EventPackage/>
        </div>
    );
};

export default Home;