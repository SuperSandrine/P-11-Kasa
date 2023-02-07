import React, { useState } from 'react';

import arrowLeftImg from '../../assets/leftArrow.svg';





// utilisation des props dans le parent, descendus aaux enfants, updater chez les enfants et remonter aux parents.

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
  //console.log("props dans image", props) // affiche toutes les props dans un objet
  //console.log("dans image, indexOfPictures", props.indexOfPictures)
  return (    
    <img
      data-index={props.indexOfPictures}
      src={`${props.pictures[props.indexOfPictures]}`}      
      alt="image de la location"      
    />    
  );  
}

// TODO limiter ces déplacements à la longueure du tableau
// TODO quand j'arrive sur l'index final, alors la flcèhe disparaît,
// TODO quand j'arrive sur le premier index, alors la flèche disparait
const ButtonSlide =(props) =>{
  //console.log("button props", props)
  //console.log("button pictures", props.pictures)
  const handleClickImage = (e) => {
    e.preventDefault();
    const direction =  e.target.getAttribute('data-direction')
    console.log("direction", direction)
    
    if (direction === 'next') {
      //console.log("passer à la photo suivante")
      props.updateIndexOfPictures(props.indexOfPictures +1)
      console.log("next index", props.indexOfPictures + 1) // renvoit 0, l'index dans les props
      console.log(props.pictures.length)

      if ((props.indexOfPictures+1) == (props.pictures.length - 1)){
        console.log("la flèche fin doit disparaître")
        props.updateIndexOfPictures( props.indexOfPictures = 0)
      }
      //TODO : ça marche pas


    } else if (direction === 'previous'){
      //console.log("passer à la photo précédente")
      props.updateIndexOfPictures(props.indexOfPictures -1)
      if ((props.indexOfPictures) == 1){
        console.log("la flèche début doit disparaître")
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
  //console.log("slideshow path", path) // {urlpath:array(5)}
  //console.log("slideshow path.url", path.urlPath) // tableau des images
  //console.log(path.urlPath.length) //5
  

  //mettre le state dans le parent
  const [indexOfPictures, updateIndexOfPictures] = useState(0)
  //console.log("indexOfpictures du state", indexOfPictures) // [0]
  //console.log("slideshow path.url index0", path.urlPath[0]) // adresse https de l'image 0
  

  return (
    <div className='gallery-box'>
      <ButtonSlide class='arrowVertLeft' dataDirection='previous' pictures={path.urlPath} updateIndexOfPictures={updateIndexOfPictures} indexOfPictures={indexOfPictures}/>
      <ButtonSlide class='arrowVertRight' dataDirection='next' pictures={path.urlPath}updateIndexOfPictures={updateIndexOfPictures} indexOfPictures={indexOfPictures}/>
      <PageNumber class='pageNumber' pictures={path.urlPath} indexOfPictures={indexOfPictures}/>
      <Image pictures={path.urlPath} indexOfPictures={indexOfPictures}  />
    </div>
  );
};

export default Slideshow;