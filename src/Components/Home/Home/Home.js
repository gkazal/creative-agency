import React from 'react';
import Client from '../Client/Client';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Client></Client>
            <Services></Services>
            <Work></Work>
            <Feedback></Feedback>
            <Footer></Footer>

        </div>
    );
};

export default Home;