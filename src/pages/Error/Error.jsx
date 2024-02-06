import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Error = () => {
  return (
    <div>
      <Header/>
      <main>
        <section className='sectionError'>
          <div>
            <h1 className='headingError'>404</h1>
            <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
          </div>
          <NavLink to='/home' className='nav-active'>Retourner sur la page d&apos;accueil</NavLink>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Error;

