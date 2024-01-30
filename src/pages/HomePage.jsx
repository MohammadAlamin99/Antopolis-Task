import React from 'react';
import Header from '../components/Header';
import MainPart from '../components/MainPart';
import Category from '../components/Category';
import GetKnow from '../components/GetKnow';
import Footer from '../components/Footer';


const HomePage = () => {
    return (
        <div>
           <Header></Header>
           <MainPart></MainPart>
           <Category></Category>
           <GetKnow></GetKnow>
           <Footer></Footer>
        </div>
    );
};

export default HomePage;