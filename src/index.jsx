import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

//import Layout from './Layout';
import Home from './pages/Home'
import About from './pages/About'
import HousingDetails from './pages/HousingDetails'
import Error from './pages/Error'

import Header from './components/Header'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container);

// const RouterIAm = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route path='/about' element={<About />} />
//       <Route path='/error' element={<Error />} />
//       <Route path='/housingDetails/:id' element={<HousingDetails />} />
//       {/* path='/*' renvoie la page Error si jamais l'url ne correspond à rien déclaré ci-dessus 
//       TODO = Normalement on envoit à la page d'accueil, vérifier ce qui est mieux*/}
//       <Route path='*' element={<Error />} />
//     </Routes>
//     </BrowserRouter>
//   );
// };


root.render(
  <div>
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
  </div>
);

//export default RouterIAm;





// ReactDOM.render(
//   <Router>
//     <div>
//       <Route path="/" exact component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/contact" component={Contact} />
//     </div>
//   </Router>,
//   document.getElementById('root')
// );





// n'est plus supporté
// ReactDOM.render(
//   <React.StrictMode>
//     <div>
//       <Header/>
//       <App/>
//     </div>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <GlobalStyle />
//       <Header />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/survey/:questionNumber">
//           <Survey />
//         </Route>
//         <Route path="/results">
//           <Results />
//         </Route>
//         <Route path="/freelances">
//           <Freelances />
//         </Route>
//         <Route>
//           <Error />
//         </Route>
//       </Switch>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// )
