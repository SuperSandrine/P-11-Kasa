//import React from 'react';

import logements from '../../logements2.json'
console.log("liste de propriétés", Object.entries(logements[0]))

const Card = () => {
  return (
    <section className='cards'>
      {
        logements.map(logement => {
          return(
            // TOUN: différencier les keys
            //<article className="card" key={logements/logement.id} style={{
            //erreur s'affiche: Warning: Encountered two children with the same key, `NaN`. 
            
            <article className="card" key={logement.id} style={{
              backgroundImage: `url(${logement.cover})`
            }}>
              <div className="masque-card" >
                {/* <img src={logement.pictures[0]}></img> */}
                <h3>{logement.title} </h3>
              </div> 
            </article>
          )
        })}
      </section>
    
      
  );
};

export default Card;