import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'

import logements from '../../logements2.json'

import cliffBgImg from '../../assets/falaiseGrand.jpg'
//const cliffBgImg = "../../assets/falaiseGrand.jpg"
//const cliffBgImg = "../../src/assets/falaiseGrand.jpg"


// const Data = () => {
//   console.log("log",logements)
//   return (
//     <div>
//       {
       
//         logements.map( logements =>{
//           return(
//             <div key={logements.id}>
//               {logements.title}
//             </div>
//           )

//         }
//         )

//       }
//     </div>
//   );
// };


// ça marche vvvvvvv
// //TOUN: c'est quoi les headers
// // technique pour ci-dessous qui fonctionne, l'array est dans myJson
// const getData=()=>{
//   fetch('logements.json'
//   ,{
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//      }
//   }
//   )
//     .then(function(response){
//       console.log("response", response)
//       return response.json();
//     })
//     .then(function(myJson) {
//       console.log("myJson",myJson);
//     });
// }


// const Data =() =>{
//   useEffect(()=>{
//     getData()
//   },[])

//   return(
//     <div>
//       <h1>Data</h1>
//     </div>
//   )
// }
//end ^^^^^^^^^^^^^^


const Home = () => {
  return (
    <main>
      <Header />
      <Banner titre="Chez vous, partout et ailleurs " fond={cliffBgImg}/>
      {/* <Data /> */}
      <Card titre="Titre de la location"/>
      <Footer />
    </main>
  );
};

export default Home;

