import React from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'

import cliffBgImg from '../../assets/falaiseGrand2.jpg'


const Home = () => {
  
  return (
    <div>
      <Header />
      <div id="structure">
        <main>
          <Banner titre="Chez vous, partout et ailleurs " fond={cliffBgImg} id="homeBanner"/>
          <Card />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

