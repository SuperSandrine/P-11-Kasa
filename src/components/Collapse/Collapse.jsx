import React, { useRef, useState } from 'react';

import arrowImg from '../../assets/arrow.png';




const Collapse = (props) => {
  const { title, content} = props; // destructuration
  const [isOpen, setOpen] = useState(false);
  const arrowToBeRotated = useRef()


  
  const handleClick = (e) => {
    e.preventDefault()
    setOpen(()=>!isOpen)
    rotation()
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
        <h4>
          {title} 
        </h4>        
        <img className='arrow' src={arrowImg} alt="petite flèche" ref={arrowToBeRotated}></img>
      </button>
      
      { isOpen && <p className='collapse-content'>
        {content}
      </p> }
    </div>
  );
};

export default Collapse;