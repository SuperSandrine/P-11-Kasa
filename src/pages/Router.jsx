import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import Home from './Home/Home'
import About from './About/About'
import HousingDetails from './HousingDetails/HousingDetails'
import Error from './Error/Error'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/error' element={<Error />} />
        <Route path='/housingDetails/:houseId' element={<HousingDetails />} />
        {/* path='/*' renvoie la page Error si jamais l'url ne correspond à rien déclaré ci-dessus 
        TODO = Normalement on envoit à la page d'accueil, vérifier ce qui est mieux*/}
        <Route path='/housingDetails/*' element={<Error />} />
        <Route path='*' element={<Error />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default Router;