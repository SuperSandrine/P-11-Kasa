import React, { useRef } from 'react';

import arrowLeftImg from '../../assets/leftArrow.svg';



// Mettre l'URL de l'image pour l'attribut "src"




// const qui s'occupe de compter les photos
const PageNumber = (props) => {
  console.log("props pagenumber", props) // {class :"pagenumber", array:{}}(un objet avec 2 objets)
  // dans l'objet array: urlpath (5) contien les 5 leins des photos dans des index
  // dans l'objet class: "classNumber" (une string?)
  //const indexNumber = document.querySelector("img[alt='image de la location']");
  //console.log("index", indexNumber) // ne marche pas car n'a pas apparu
  
  //const imageDisplayed = useRef()
  //const link = console.log(indexNumber.getAttribute("src"))
  //console.log(link)
  //TODO, numéro dynamique
  // TODO, valeur par défaut

  return (
    <data className={props.class}>
      <span id="photoIndex">1</span>/{props.pictures.length}
      {console.log("pageNumeber 2",props.pictures.length)//5 
      }
      {/* 2/{props.pictures.urlPath.length} */}
      {/* {console.log("quiquoi",props.array.urlPath.length)//5
      } */}
      {/* {console.log("quiquoi",props.pictures.urlPath.length)//5 */}

      
    </data>
  );
};




const Slideshow = (path, n) => {
  console.log("slideshow path", path) // 
  console.log("slideshow path.url", path.urlPath) // tableau des images
  console.log(path.urlPath.length) //5
  // quand je clique sur le bouton, j'ajoute un élement à un nombre N, ce nombre est l'index du tableau.
  // quand j'arrive sur l'index final, alors la flcèhe disparaît,
  // quand j'arrive sur le premier index, alors la flèche disparait
  // le numéro change à chaque fois que j'apuiie sur un bouton et renvoir l'index, sur le lenght du tableau

  const ButtonSlide =(path) =>{
    console.log("button pictures", path.pictures)
    const handleClickImage = (e) => {
      // caputurer les elements à cliquer
      // créer des actions
      e.preventDefault();
      const direction =  e.target.getAttribute('data-direction')
      console.log("direction", direction)
  
  
      if (direction === 'next') {
        console.log("passer à la photo suivante")
      } else if (direction === 'previous'){
        console.log("passer à la photo précédente")
      }
  
  
  
    }
    return(
      <button className={path.class} onClick={handleClickImage}>
        <img src={arrowLeftImg} alt="flèche directionnelle" data-direction={path.dataDirection} />
        {console.log("data dans return",path.dataDirection )
        }
      </button>
    );
  } 

  n=3 // n correspond à l'index
  const imageDisplayed = useRef()
    
  

  return (
    <div className='gallery-box'>
      <ButtonSlide class='arrowVertLeft' dataDirection='previous' pictures={path.urlPath}/>
      <ButtonSlide class='arrowVertRight' dataDirection='next' pictures={path.urlPath}/>
      <PageNumber class='pageNumber' pictures={path.urlPath} />
      <img
        ref={imageDisplayed}
        data-index={n}
        src={`${path.pictures[n]}`}    
        alt="image de la location"      
      />   
      {console.log("n", path.pictures)}  

    </div>
  );
};

export default Slideshow;

