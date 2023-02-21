import { useEffect, useState } from "react";


export const useHomeData = () => {

  const [houses, setHouses] = useState([]);

  useEffect(()=>{
    fetch('./logements.json', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res2 => {
        setHouses(res2)
      })
      .catch(error=>{console.error(error)})
  },[])

  //console.log("newdata", houses) // renvoit un tableau de 20 items

  return houses
};
