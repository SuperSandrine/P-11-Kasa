//import React from 'react';

import logements from '../../logements2.json'
console.log("liste de propriétés", Object.entries(logements[0]))

import HousingsData from '../HousingsData';

const Card = () => {
  



  return (
    <section className='cards'>
      <HousingsData/>

      {logements.map(logement => {

        return(
        // TOUN: différencier les keys
        //<article className="card" key={logements/logement.id} style={{
        //erreur s'affiche: Warning: Encountered two children with the same key, `NaN`. 
            
          <a className="card" key={logement.id} style={{
            backgroundImage: `url(${logement.cover})`
          }} href={`/housingDetails/${logement.id}`}>
            <div className="masque-card" >
              <h3>{logement.title} </h3>
            </div> 
          </a>
        )
        //}
      })}
    </section>
    
        
  );
  
};

export default Card;