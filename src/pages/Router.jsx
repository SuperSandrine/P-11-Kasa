import React from 'react';
import { HashRouter,Routes, Route } from 'react-router-dom'

import Home from './Home/Home'
import About from './About/About'
import HousingDetails from './HousingDetails/HousingDetails'
import Error from './Error/Error'

function Router() {
  return (
    <HashRouter>    
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/error' element={<Error />} />
        <Route path='/housingDetails/:houseId' element={<HousingDetails />} />
        <Route path='/housingDetails/*' element={<Error />} />
        <Route path='/*' element={<Error />} /> 

        {/* dernière route est celle qui est appelé si aucun chemin précédent ne correspond à l'URL appelée */}
      </Routes>
    </HashRouter>
  );
}

export default Router;