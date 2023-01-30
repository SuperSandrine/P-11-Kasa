import React from 'react';

const Banner = (props) => {
  return (
    <div>
      
      <section role="banner" className='banner' style={{
        backgroundImage: `url(${props.fond})`
      }}>
        <h1 className="slogan">{props.titre}</h1>
        <div className="masque"></div>
      </section>
      
    </div>
  );
};

export default Banner;