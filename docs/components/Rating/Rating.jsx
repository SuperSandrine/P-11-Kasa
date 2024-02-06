import React from 'react';

import emptyStar from "../../assets/greyStar.svg"
import fullStar from "../../assets/pinkStar.svg";

const Rating = (props) => {
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
};

export default Rating;