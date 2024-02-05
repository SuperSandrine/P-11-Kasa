import React from 'react';
import { useHomeData } from '../../data/useHomeData.jsx';

const Card = () => {
  const houses = useHomeData();
  // console.log("houses dans card", houses) // renvoit un tableau de 20 items

  return (
    <section className='cards'>
      {houses && houses.map(logement => {
        return( 
          <div key={logement.id} > 
            <a 
              className="card" 
              key={logement.id} 
              style={{
                backgroundImage: `url(${logement.cover})`
              }} 
              href={`/P-11-Kasa/housingDetails/${logement.id}`}>
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