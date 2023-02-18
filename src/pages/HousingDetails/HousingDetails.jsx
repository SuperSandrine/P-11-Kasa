import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { Navigate, useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';

//import housingsData from "../../logements2.json"
import { homeData } from '../../data/homeData.js';
import { useContext } from 'react';
import { dataHousingsContext } from '../../data/context.jsx';


const HousingDetails = () => {
  const housingdata2 = useContext(dataHousingsContext);
  console.log("test context", housingdata2)
  // const [houses, setHouses] = useState([]);

  // useEffect(()=>{
  //   fetch('../../logements.json', {
  //     headers: {
  //       'Accept': 'application/json'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(res2 => {
  //       setHouses(res2)
  //     })
  //     .catch(error=>{console.error(error)})
  // },[])

  // console.log("newdata 2", houses)

  const housingsData = homeData()
  console.log("housingsdata",housingsData[0])

  //console.log("housingsData ou homeData dans housingsDetails", housingsData) // tableau de 20items

  //const housingsData = houses
  //console.log("housingdata", housingsData)


  // permet d'attendre la donnée
  if(!housingsData[0]){
    return(
      <div>
        <Header/>
        <p>Loading...</p>
      </div>)
  } else {

    const houseId = useParams();
    console.log( houseId); //obj: {houseId: 'c67ab8a7'}

    // va chercher la valeur "houseId" dans le tableau de donnée, pour nous renvoyer les lignes complétant les données
    const houseDatasFromParamsId = housingsData.filter(element => element.id.includes(Object.values(houseId)));

    console.log("houseDatasFromParamsId", houseDatasFromParamsId); // [{...}] // TODO : est dans un index 0, comment le virer et corriger le code suivant


    if (houseDatasFromParamsId[0] === undefined || houseDatasFromParamsId[0] === null){
      return <Navigate to="/error"></Navigate>;
    } else {
      const { id, title, cover, pictures, description, host, rating, location, equipments, tags } = houseDatasFromParamsId[0] 

      const equipmentsInLi=  equipments.map((x,i)=><li key={i}> {x}</li>)

      return (
        <div>
          <Header />
          <div id="structure">
            <main>
              <Slideshow urlPath={pictures}></Slideshow>

              <div className='criteria'>
                <div className='place'>
                  <h1>{title}</h1>
                  <h2>{location}</h2>
                  <Tag title={tags.map((element, index)=> <div className="tag" key={index} >{element}</div>)} />
                </div>
              
                <div className='iconography'>
                  <Host host={host}></Host>
                  <div className='rating-box'> <Rating ratingdata={rating} /></div>
                </div>
              </div>

              <section className='presentation'>
                <Collapse title="Description" content={description}/>
                <Collapse className="tools" title="Équipements" content={equipmentsInLi}/>
              </section>
            </main>
            <Footer />
          </div>

        </div>
      );

    }
  }
}
    



export default HousingDetails;