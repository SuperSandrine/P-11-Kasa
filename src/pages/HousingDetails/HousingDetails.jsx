import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import Slideshow from '../../components/Slideshow/Slideshow';
import Tag from '../../components/Tag/Tag';

import { useHomeData } from '../../data/useHomeData.jsx';


const HousingDetails = () => {
  const houseId = useParams();
  // console.log( houseId); //obj: {houseId: 'c67ab8a7'}

  const housingsData = useHomeData()
  // console.log("housingsdata",housingsData) // tableau de 20 items

  // permet d'attendre la donnée
  if(housingsData.length === 0){
    return(
      <div>
        <Header/>
        <p>Loading...</p>
      </div>)
  } else {
    // va chercher la valeur "houseId" dans le tableau de donnée, pour nous renvoyer un tableau des données correspondant à l'ID
    const houseDatasFromParamsId = housingsData.filter(element => element.id.includes(Object.values(houseId)));

    // console.log("houseDatasFromParamsId", houseDatasFromParamsId); // [{...}]

    if (houseDatasFromParamsId[0] === undefined || houseDatasFromParamsId[0] === null){
      return <Navigate to="/P-11-Kasa/error"></Navigate>;
    } else {
      const { title, pictures, description, host, rating, location, equipments, tags } = houseDatasFromParamsId[0] // destructure

      const equipmentsInLi=  equipments.map((element,index)=><li key={index}>{element}</li>) // liste le content de équipements

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