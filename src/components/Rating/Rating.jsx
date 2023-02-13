import React, { useRef } from 'react';

import emptyStar from "../../assets/greyStar.svg"
import fullStar from "../../assets/pinkStar.svg";

const Rating = (props) => {
  // je veux que tu prennes le chiffres et
  // que tu mettes remplacent les étoiles grises par des roses en fonction du chiffre

  // TODO: rajouter les keys

  //const fullStarImg = <img key={starsArray.index} src={fullStar} alt="étoile pleine" />
  //const emptyStarImg = <img src={emptyStar} alt="étoile vide" />

  //créer une fonction qui me crée le tableau en fct de la props
  //ensuite le map

  const getRate = (rate) => {
    const maxRate = 5;
    const arrayRate = [];
    for (let i = 0; i < maxRate; i++) {
      const element = i < rate ? <img key={i} src={fullStar} alt="étoile pleine" /> : <img key={i} src={emptyStar} alt="étoile vide" />;
      arrayRate.push(element)
    }
    return arrayRate  
  }  
  return(
    getRate(props.ratingdata).map((el)=>el)
  ) 

  //const starsArray = new Array(5)

  //  console.log("index",starsArray.fill("blue",0,1))
  //  console.log("index",starsArray.indexOf("blue"))

  //const fullStarImg = <img src={fullStar} alt="étoile pleine" />
  //console.log("fullStar", fullStarImg)
  //const emptyStarImg = <img src={emptyStar} alt="étoile vide" />
  //console.log(starsArray)

  // const getFullStar = (index,image)=>{
  //   return(
  //     <img src={image} alt="étoile pleine" key={index}/>
  //   )
  // }

  //TODO= changer la logique:
  // c'est à dire que l'on crée un tableau du nombre de rating data
  // ensuite on puch le nombre de fois les étoiles vides pour avoir 5 element dans le tablea
  // un sous-composat pour le full star img
  // { if ( props.ratingdata < 5 ) {
  //   starsArray.fill(fullStarImg, 0, props.ratingdata)
  //   starsArray.fill(emptyStarImg,props.ratingdata)
  //   return (
  //     starsArray
  //   )}
  // else if (props.ratingdata == 5 ) {
  //   const tab = [...Array(5)].map((x, index)=> (<img src={fullStar} key={index} alt="étoile pleine" />))
  //   //console.log(tab)
  //   return (
  //     tab
  //   )}
  // //console.log(starsArray)
  // }
  // ça marche mais je n'ai pas toruvé comment ajouter de key vvvvvvv
  // const starsArray = new Array(5)
  // const fullStarImg = <img src={fullStar} alt="étoile pleine" />
  // console.log("fullStar", fullStarImg)
  // const emptyStarImg = <img src={emptyStar} alt="étoile vide" />
  // console.log(starsArray)

  // { if ( props.ratingdata < 5 ) {
  //   starsArray.fill(fullStarImg, 0, props.ratingdata)
  //   starsArray.fill(emptyStarImg,props.ratingdata)
  //   return (
  //     starsArray
  //   )}
  // else if (props.ratingdata == 5 ) {
  //   starsArray.fill(fullStarImg, 0, props.ratingdata)
  //   return(
  //     starsArray
  //   )
  // }}
  //^^^^^^^^^^^^^^^^^^^^
};

export default Rating;