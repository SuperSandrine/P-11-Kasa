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
        <Route path='/P-11-Kasa/' element={<Home/>} />
        <Route path='/P-11-Kasa/home' element={<Home/>} />
        <Route path='/P-11-Kasa/about' element={<About />} />
        <Route path='/P-11-Kasa/error' element={<Error />} />
        <Route path='/P-11-Kasa/housingDetails/:houseId' element={<HousingDetails />} />
        <Route path='/P-11-Kasa/housingDetails/*' element={<Error />} />
        <Route path='/P-11-Kasa/*' element={<Error />} /> 
        <Route path='/*' element={<Error />} /> 

        {/* dernière route est celle qui est appelé si aucun chemin précédent ne correspond à l'URL appelée */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;