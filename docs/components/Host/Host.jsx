import React from 'react';

// formatage du nom, react.Fragment permet d'éviter de créer une div supplémentaire pour le nom de l'hôte
const Host = (props) => {
  const splitedName = props.host.name.split(" ")
  return (
    <div className='host-box'> 
      <h3 className='host-name'>{splitedName.map((el,index) => <React.Fragment key={index}>{el}<br/></React.Fragment>)}</h3>
      <img className="host-portrait" src={props.host.picture} alt="portrait"/>

      
    </div>
  );
};

export default Host;