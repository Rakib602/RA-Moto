import React from 'react';
import Products from '../Products/Products';

import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Header from '../../../Shared/Header/Head';
import Footer from '../../../Shared/Footer/Foot';
import Aboutus from '../Aboutus/Aboutus';

const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Aboutus> </Aboutus>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;