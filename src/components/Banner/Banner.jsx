import React from 'react';

const Banner = (props) => {
  const classes = 'masque homeBanner'
  return (
    <div>
      
      <section role="banner" className='banner' style={{
        backgroundImage: `url(${props.fond})`, backgroundPositionY: 'center'
      }}>
        <h1 className="slogan">{props.titre}</h1>
        <div className={classes} id={props.id}></div>
      </section>
      
    </div>
  );
};

export default Banner;