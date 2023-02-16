//TODO faire un fichier js avec un return
//TODO get et callback dans la page home
//TODO a passer de home et à desendre

import { useEffect, useState } from "react";

// import { useState } from "react";

// function getLogements() {
//   return logements.map((logement) => {
//     return {
//       id: logement.id,
//       title: logement.title,
//       cover: logement.cover,
//     };
//   });
// }

// //filtre les logements par id
// function getId(id) {
//   return logements.find((logement) => logement.id === id);
// }

// export { getLogements, getId };

// ça marche vvvvvvv
// //TOUN: c'est quoi les headers
// // technique pour ci-dessous qui fonctionne, l'array est dans myJson

export const getData= async ()=>{
  let housingsDatas = []
  await fetch('logements.json')
    .then((response) => response.json())
    .then((myJson) => { 
      //console.log(myJson) / renvoit un tableau de 20items
      housingsDatas = myJson
      //console.log("myHousingsApiJson",housingsDatas);// renvoit un tableau de 20items
    })
  //  .catch(function(error) {
  //    console.log('Il y a eu un problème avec l\'opération fetch' + error);
  //  })
  //console.log(housingsDatas) // renvoit un array de 20items
  return housingsDatas
}

console.log("test getData", getData())// promise avec un array (sinon j'ai un objet quand je mets housingsDatas entre crochet)








// export const Data =() =>{
//   useEffect(()=>{
//     getData()
//   },[])

//   return(
//     <div>
//       <h1>Data</h1>
//     </div>
//   )
// }
//end ^^^^^^^^^^^^^^



// function HousingsData(){
//   const [houses, setHouses] = useState([]);

//   const getHousingsData = () => {
//     const response = fetch(
//       "logements.json"
//     )
//       .then((response)=> {console.log("response", response)
//         return response.json();}
//         //response.json()
//       )
//       .then(function(myJson){
//         console.log("myJson", myJson);
//         setHouses(myJson)
//       });

//     //setUsers(response);
//   };

//   useEffect(()=>{
//     getHousingsData();
//   },[]);

  
// }
// export default HousingsData