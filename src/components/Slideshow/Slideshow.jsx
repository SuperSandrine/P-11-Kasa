import React, { useState } from 'react';

import arrowLeftImg from '../../assets/leftArrow.svg';


// utilisation des props dans le parent, descendus aux enfants, updater chez les enfants et remonter aux parents.

// const qui s'occupe de compter les photos
// le numéro change à chaque fois que j'appuie sur un bouton suivant ou next et renvoit l'index/le lenght du tableau pictures
const PageNumber = (props) => {
  return (
    <data className={props.class}>
      <span id="photoIndex">{(props.indexOfPictures)+1}</span>/{props.pictures.length}
    </data>
  );
};

// const qui affiche l'image en fonction de l'index
const Image = (props) => {  
  return (    
    <img
      data-index={props.indexOfPictures}
      src={`${props.pictures[props.indexOfPictures]}`}      
      alt="image de la location"      
    />    
  );  
}


const ButtonSlide =(props) =>{
  const handleClickImage = (e) => {
    e.preventDefault();
    const direction =  e.target.getAttribute('data-direction')
    
    if (direction === 'next') {
      console.log("propsIndex A", props.indexOfPictures) // renvoit 0
      props.updateIndexOfPictures(props.indexOfPictures + 1)
      console.log("next index", props.indexOfPictures) // François: renvoit toujours 0, l'index dans les props, pourquoi?

      if ((props.indexOfPictures) >= (props.pictures.length-1)){
        props.updateIndexOfPictures(0)
        console.log("props après fin array", props.indexOfPictures)
      }

    // } else if (direction === 'previous'){ // pas nécessaire
    } else {
      props.updateIndexOfPictures(props.indexOfPictures -1)
      if ((props.indexOfPictures) < 1){
        props.updateIndexOfPictures(props.pictures.length-1)
      }
    } 
    console.log("next index 2", props.indexOfPictures) // renvoit 0, l'index dans les props


  }
  return(
    <button className={props.class} onClick={handleClickImage}>
      <img src={arrowLeftImg} alt="flèche directionnelle" data-direction={props.dataDirection} />
    </button>
  );
}


const Slideshow = (path) => {
  //mettre le state dans le parent, soit ici
  const [indexOfPictures, updateIndexOfPictures] = useState(0)  
  // TODO: nom de props plus court, IndexPictures, mise en page à la ligne
  return (
    <div className='gallery-box'>
      <ButtonSlide class='arrowVertLeft' dataDirection='previous' pictures={path.urlPath} updateIndexOfPictures={updateIndexOfPictures} indexOfPictures={indexOfPictures}/>
      <ButtonSlide 
        class='arrowVertRight' 
        dataDirection='next' 
        pictures={path.urlPath} 
        updateIndexOfPictures={updateIndexOfPictures} 
        indexOfPictures={indexOfPictures}/>
      <PageNumber class='pageNumber' pictures={path.urlPath} indexOfPictures={indexOfPictures}/>
      <Image pictures={path.urlPath} indexOfPictures={indexOfPictures}  />
    </div>
  );
};

export default Slideshow;