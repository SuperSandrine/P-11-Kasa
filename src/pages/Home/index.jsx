import React from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Home = () => {
  return (
    <main>
      <Header />
      <Banner titre="Chez vous, partout et ailleurs " />
      <section className='cards'>
        <Card titre="Titre de la location"/>
        <Card titre="Titre de la location"/>
        <Card titre="Titre de la location"/>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
// function Home() {
//   return (
//     <div>
//       <h1> Page d'accueil 🏠</h1>
//     </div>
//   )
// }

// export default Home
