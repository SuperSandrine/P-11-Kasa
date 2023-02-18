import { createContext, useEffect, useState } from "react";

export const dataHousingsContext = createContext();

const dataHousingsContextProvider = ({children})=>{
  const [houses2, setHouses2] = useState([])

  useEffect(()=>{
    const getData = async() =>{
      await fetch('../../logements.json', {
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res2 => {
          setHouses2(res2)
        })
      //.catch(error=>{console.error(error)})
    };
    getData()}
  ,[])


  console.log("ckoi houses2 ds context", houses2)

  return ( 
    <dataHousingsContext.Provider value={houses2}>
      {children}
    </dataHousingsContext.Provider>
  )
}

export default dataHousingsContextProvider;