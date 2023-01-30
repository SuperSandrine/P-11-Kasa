import React from 'react';

import logements from '../../logements2.json'
console.log("liste de propriétés", Object.keys(logements[0]))

const Card = () => {
  return (
    <section className='cards'>
      {
        logements.map(logement => {
          return(
            // TOUN: différencier les keys
            //<article className="card" key={logement/logement.id} style={{

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