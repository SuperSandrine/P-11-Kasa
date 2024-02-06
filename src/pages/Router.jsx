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
        <Route path='/' component={<Home/>} />
        <Route path='/home' component={<Home/>} />
        <Route path='/about' component={<About />} />
        <Route path='/error' component={<Error />} />
        <Route path='/housingDetails/:houseId' component={<HousingDetails />} />
        <Route path='/housingDetails/*' component={<Error />} />
        <Route path='/*' component={<Error />} /> 

        {/* dernière route est celle qui est appelé si aucun chemin précédent ne correspond à l'URL appelée */}
      </Routes>
    </HashRouter>
  );
}

export default Router;