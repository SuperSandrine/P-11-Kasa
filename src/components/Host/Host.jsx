import React from 'react';

const Host = (props) => {
  const splitedName = props.host.name.split(" ")
  //console.log("nom host cassé", splitedName[0], splitedName[1])

  return (
    <div className='host-box'> 
      {/* <h3 className='host-name'>{props.host.name}<br/>{splitedName[1]}</h3> */}
      <h3 className='host-name'>{splitedName.map((el,index) => <React.Fragment key={index}>{el}<br/></React.Fragment>)}</h3>
      <img className="host-portrait" src={props.host.picture} alt="portrait"/>

      
    </div>
  );
};

export default Host;