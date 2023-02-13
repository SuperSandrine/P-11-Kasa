import React from "react";
import { useEffect, useState } from "react";
import { ReactDOM } from "react-dom";
//TODO faire un fichier js avec un return
//TODO get et callback dans la page home
//TODO a passer de home et à desendre
function HousingsData(){
  const [houses, setHouses] = useState([]);

  const getHousingsData = () => {
    const response = fetch(
      "logements.json"
    ).then((response)=> {console.log("response", response)
      return response.json();}
    //response.json()
    ).then(function(myJson){
      console.log("myJson", myJson);
      setHouses(myJson)
    });

    //setUsers(response);
  };

  useEffect(()=>{
    getHousingsData();
  },[]);

  
}
export default HousingsData;