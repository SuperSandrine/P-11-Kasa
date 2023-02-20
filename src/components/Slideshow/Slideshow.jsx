import React, { useState } from 'react';

import arrowLeftImg from '../../assets/leftArrow.svg';


// utilisation des props dans le parent, descendus aux enfants, updater chez les enfants et remonter aux parents.

// const qui s'occupe de compter les photos
// le numéro change à chaque fois que j'appuie sur un bouton previous ou next et renvoit l'index/le lenght du tableau IndexPictures  
const PageNumber = (props) => {
  if (props.pictures.length === 1){
    return
  }
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
      alt="intérieur de la location"
    />    
  );  
}


const ButtonSlide =(props) =>{
  //console.log("nombre de photo:", props.pictures.length)
  if (props.pictures.length===1){
    return
  }
  const handleClickImage = (e) => {
    e.preventDefault();
    const direction =  e.target.getAttribute('data-direction')
    
    if (direction === 'next') {
      props.updateIndexOfPictures(props.indexOfPictures + 1)
      

      if ((props.indexOfPictures) >= (props.pictures.length-1)){
        props.updateIndexOfPictures(0)
      }

    } else {
      props.updateIndexOfPictures(props.indexOfPictures -1)
      if ((props.indexOfPictures) < 1){
        props.updateIndexOfPictures(props.pictures.length-1)
      }
    } 

  }
  return(
    <button className={props.class} onClick={handleClickImage}>
      <img src={arrowLeftImg} alt="flèche directionnelle" data-direction={props.dataDirection} />
    </button>
  );
}


const Slideshow = (path) => {
  //mettre le state dans le parent, soit ici
  const [picturesIndex, updatePicturesIndex] = useState(0)  
  return (
    <div className='gallery-box'>
      <ButtonSlide class='arrowVertLeft' dataDirection='previous' pictures={path.urlPath} updateIndexOfPictures={updatePicturesIndex} indexOfPictures={picturesIndex}/>
      <ButtonSlide 
        class='arrowVertRight' 
        dataDirection='next' 
        pictures={path.urlPath} 
        updateIndexOfPictures={updatePicturesIndex} 
        indexOfPictures={picturesIndex}/>
      <PageNumber class='pageNumber' pictures={path.urlPath} indexOfPictures={picturesIndex}/>
      <Image pictures={path.urlPath} indexOfPictures={picturesIndex}  />
    </div>
  );
};

export default Slideshow;