import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import {Data, getData} from '../../data/housingsData.js'

import cliffBgImg from '../../assets/falaiseGrand2.jpg'



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
    <div>
      <Header />
      <div id="structure">
        <main>
          <Banner titre="Chez vous, partout et ailleurs " fond={cliffBgImg} id="homeBanner"/>
          <Card />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

