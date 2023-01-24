import React from 'react';

const Card = (props) => {
  return (
    <article className="card">
      <div className="masque-card">
      <h3>{props.titre} </h3>
      </div>
    
    </article>
  );
};

export default Card;