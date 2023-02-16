import { useEffect, useState } from "react";

const dataHousings =() => {
  const [houses, setHouses] = useState(null);

  useEffect(()=>{
    fetch('logements.json')
      .then(res => res.json())
      .then(res2 => {
        console.log("azerty", res2)
        setHouses(res2)
      })

  },[])

}


// const dataHousings = async () => {
//   //const [houses, setHouses] = useState([]);
//   let blah=[]
//   //const getDataHousings = () => {
//   await fetch('logements.json')
//     .then(res => res.json())
//     .then((res2) => {
//       console.log("111", res2);
//       blah = res2
//       return blah
//     })
//   //.catch(error => console.log("Erreur"));
//   console.log("333",blah ) // array vide
//   //};

//   //  console.log("333",blah ) // undefined

//   // useEffect(()=>{
//   //   getDataHousings();
//   // },[]);
//   return (blah)
// };

export default dataHousings;