import React from 'react';
import { useHomeData } from '../../data/useHomeData.jsx';
import { Link } from 'react-router-dom';

const Card = () => {
  const houses = useHomeData();
  // console.log("houses dans card", houses) // renvoit un tableau de 20 items

  return (
    <section className='cards'>
      {houses && houses.map(logement => {
        return( 
          <div key={logement.id} > 
            <Link
              className="card" 
              key={logement.id} 
              style={{
                backgroundImage: `url(${logement.cover})`
              }} 
              to={`/housingDetails/${logement.id}`} 
              target={"_self"}
              >
              <div className="masque-card" >
                <h2>{logement.title} </h2>
              </div> 
            </Link>
          </div>  
        )
      })}
    </section>    
  );
};

export default Card;