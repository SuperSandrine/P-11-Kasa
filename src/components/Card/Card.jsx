//import React from 'react';

//import logements from '../../logements2.json'
import HousingsData from '../../data/HousingsData.jsx';
import { getData } from '../../data/housingsData.js';

import dataHousings from '../../data/dataHousings.js'
import { useEffect, useState } from 'react';
//import { housesMeds } from '../../data/homeData.js';


import { homeData } from '../../data/homeData.js';

// const test = async () =>{ 
//   const {datasHouses} = await getData()
//   //  console.log("datasHouses", typeof datasHouses) //object
//   return (datasHouses)
// }


const Card = () => {

  const houses = homeData();
  console.log("houses dans card", houses)
  //console.log("meds", housesMeds)

 
  // const [houses, setHouses] = useState([]);

  // useEffect(()=>{
  //   fetch('logements.json')
  //     .then(res => res.json())
  //     .then(res2 => {
  //       console.log("azerty", res2)
  //       setHouses(res2)
  //     })
  // },[])

  // console.log("houses", houses)


  // //vvvvv test marche en console mais pas compatible avec react
  // console.log("data dans card", dataHousings()) // promise avec Object
  
  // const logements = await getData()
  // //console.log("log log", typeof logements) // Object

  //  const logements=houses
  //  ^^^^^^fin test





  return (
    <section className='cards'>
      {houses && houses.map(logement => {
        return( 
          <div key={logement.id} > 
            <a 
              className="card" 
              key={logement.id} 
              style={{
                //backgroundColor:"red",
                backgroundImage: `url(${logement.cover})`
              }} 
              href={`/housingDetails/${logement.id}`}>
              <div className="masque-card" >
                <h2>{logement.title} </h2>
              </div> 
            </a>
          </div>  
        )
      })}
    </section>    
  );
};

export default Card;