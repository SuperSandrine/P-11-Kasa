import React from 'react';

const Host = (props) => {
  //console.log("nom host", props.host.name)
  return (
    <div className='host-box'> 
      <h3 className='host-name'>{props.host.name}</h3>
      <img className="host-portrait" src={props.host.picture} alt="portrait"/>

      
    </div>
  );
};

export default Host;