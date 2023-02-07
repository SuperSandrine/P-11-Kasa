import React, {   useRef, useState } from 'react';

import arrowImg from '../../assets/arrow.png';




const Collapse = (props) => {
  const { title, content} = props; // destructuration
  //const [value, setCollapse] = useState(0) // compteur de clic
  const [isOpen, setOpen] = useState(false);
  const arrowToBeRotated = useRef()


  
  const handleClick = (e) => {
    e.preventDefault()
    //setCollapse((value) => value + 1 ) // compeur de clic
    setOpen(()=>!isOpen)
    rotation()
    //console.log("arrow", arrowToBeRotated.current.className)
    //arrowToBeRotated.current.classList.add('rotation')  
  }

  const rotation =() =>{
    if (!isOpen){
      arrowToBeRotated.current.classList.add('rotation')    
    } else if(isOpen){
      if (isOpen){
        arrowToBeRotated.current.classList.remove('rotation')    
      } 
    }
  }

  return (
    <div className='collapse-box'>
      <button className='collapse-barre' onClick={handleClick}>
        <h2>
          {title} 
          {/* open:{value} //compteur de clic */}
        </h2>
        {/* { isOpen && arrowToBeRotated.current.classList.add('rotation')} //ajoute la className mais ne l'enlève pas*/}
        
        <img className='arrow' src={arrowImg} alt="petite flèche" ref={arrowToBeRotated}></img>
      </button>
      
      { isOpen && <p className='collapse-content'>
        {/* {props.children} */}
        {content}
      </p> }
    </div>
  );
};

export default Collapse;