import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import HousingDetails from './pages/HousingDetails'
import Error from './pages/Error'

function CreateRouter() {
  return (
    
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/error' element={<Error />} />
      <Route path='/housingDetails/:id' element={<HousingDetails />} />
      {/* path='/*' renvoie la page Error si jamais l'url ne correspond à rien déclaré ci-dessus 
      TODO = Normalement on envoit à la page d'accueil, vérifier ce qui est mieux*/}
      <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default CreateRouter;