import React from 'react'
import { createRoot } from 'react-dom/client'
import Router from './pages/Router.jsx';
import "./styles/index.scss"


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
    <Router/>
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
