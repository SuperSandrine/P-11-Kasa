import { useEffect, useState } from "react";


export const homeData = () => {

  const [houses, setHouses] = useState([]);

  useEffect(()=>{
    fetch('logements.json')
      .then(res => res.json())
      .then(res2 => {
        setHouses(res2)
      })
      //.catch(error=>{console.error(error)})
  },[])

  console.log("newdata", houses)

  return houses
};


//export const housesMeds = homeData()
