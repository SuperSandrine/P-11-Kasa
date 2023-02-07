import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';

import housingsData from "../../logements2.json"


// const filteredHouseWithId =(test) =>{
//   console.log("housdats", housingsData);
//   housingsData.filter(el=> el.contain(test))
//   console.log("housdats 2", housingsData);
// }

//data.find()
// function filterItems(arr, query) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }
// console.log("1er filtre", filterItems(housingsData, "67"))

const HousingDetails = () => {
  const houseId = useParams();
  console.log(houseId);
  const props = Object.keys(houseId)
  console.log("object.keys", props)
  const props2 = Object.values(houseId)
  console.log("object.values", props2)
  const filteredHouseWithId = housingsData.filter(() => "c67ab8a7")
  console.log("test filter", filteredHouseWithId)
  const test2 = housingsData.findIndex(() => "7af00cd6")
  console.log("test filter", test2) // return 0
  const test3 = housingsData.findIndex(() => 4 )
  console.log("test filter", test3) // return 0
    
  console.log("test4", housingsData.id) // undefined
  console.log("test5", housingsData[0].id) // c67ab8a7
  console.log("test6", housingsData[3].id) //
  const test7 =
      housingsData.filter(element => {
        element.id.includes('b9123')
      });
  console.log("test7",test7) // []
  const test8 =
      housingsData.findIndex(element => {
        element.id.includes('7af00cd6')
      });
  console.log("test8",test8) // -1
  console.log(typeof housingsData[0].id) //string
  console.log("--------------------------")

  const test9 =
      housingsData.findIndex(element => {
        console.log( element.id) //"c67ab8a7";
        element.id.includes("c67ab8a7")
      });
  console.log("test9",test9) // undefined

  const test10 = housingsData[0].id.includes("c67ab8a7")
  console.log("test10",test10) // true
  // trouvé --------- //
  const test11 = housingsData.filter(element => element.id.includes("c67ab8a7"))
  console.log("test11", test11);
  const test12 = housingsData.filter(element => element.id.includes(props2))
  console.log("test12", test12);
  console.log("--------------------------")
  console.log("--------------------------")


  const houseDatasFromParamsId = housingsData.filter(element => element.id.includes(Object.values(houseId)))
  console.log("houseDatasFromParamsId", houseDatasFromParamsId); // [{...}] // TODO : est dans un index 0, comment le virer
  const { id, title, cover, pictures, description, host, rating, location, equipments, tags } = houseDatasFromParamsId[0]


  //  console.log(tags[0])
  //const test20 = tags.maps(element => console.log(element));
  console.log("test20", tags.forEach(element => { console.log(element)
  })); // différence forEach qui est une utilisation unique et maps qui crée un tableau
  const test21 = tags.map(element => element);
  console.log("test21", test21) // renvoie un tableau avec ['Batignolle', 'Montmartre']
  const test22 = tags.map(element => {<Tag key={element} title={element} /> });
  console.log("test22", test22) // renvoie un tableau avec 2 undefined
  tags.forEach((element, index) => {console.log(`<Tag key=${element+index} title=${element} /> `)}); // <Tag key=Batignolle0 title=Batignolle /> 
  //<Tag key=Montmartre1 title=Montmartre /> 

  console.log(tags.map(element => {<Tag key={element} title={element} /> })) // renvoie un tableau avec 2 undefined

  

  

  //    const houseProps = filteredHouseWithId(houseId)
    
  //  const { id, title, cover, pictures, description, host, rating, location, equipments, tags } = housingsData
  return (
    <main>
      <Header />
      <Slideshow />
      <h1>titre  </h1>
      <Footer />
    </main>
  );
};

export default HousingDetails;