import { useEffect, useState } from "react";


export const useHomeData = () => {

  const [houses, setHouses] = useState([]);

  useEffect(()=>{
    fetch('/../P-11-Kasa/logements.json', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then((res) =>{ 
        if(!res.ok){
          throw new Error(`Ceci est une erreur HTTP, le status est ${res.status}`)
        }
          const response = res.json()
          return response
      })
      .then(res2 => {
        //console.log("res2", res2)
        setHouses(res2)
      })
      .catch(error=>{console.error(error)})
  },[])

  //console.log("newdata", houses) // renvoit un tableau de 20 items

  return houses
};
