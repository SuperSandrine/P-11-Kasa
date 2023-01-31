import React from 'react';

import arrowImg from '../../assets/arrow.png';


// Mettre l'URL de l'image pour l'attribut "src"
const Image = (props) => {  
  return (      
        <img   
           src={`${props.pictures[0]}`}      
           alt="image de la location"      
        />    
  );  
}

const ButtonSlide =(props) =>{
  return(
    <button className={props.class}>
      <img src={arrowImg} alt="flèche directionnelle" />
    </button>
  );
}

const Slideshow = (path) => {
  return (
    <div className='gallery-box'>
      <ButtonSlide class='arrowVertLeft'/>
      <ButtonSlide class='arrowVertRight'/>
      <Image pictures={path.urlPath}/>
    </div>
  );
};

export default Slideshow;