import React from 'react';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse/Collapse';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Slideshow from '../../components/Slideshow/Slideshow';

import housingsData from "../../logements2.json"

const HousingDetails = () => {

  const houseId = useParams();
  console.log( houseId); //obj: {houseId: 'c67ab8a7'}

  const houseDatasFromParamsId = housingsData.filter(element => element.id.includes(Object.values(houseId)))
  console.log("houseDatasFromParamsId", houseDatasFromParamsId); // [{...}] // TODO : est dans un index 0, comment le virer
    
  const { id, title, cover, pictures, description, host, rating, location, equipments, tags } = houseDatasFromParamsId[0]

  console.log(title)
  return (
    <main>
      <Header />
      <Slideshow urlPath={pictures}></Slideshow>
      <h1>{title}</h1>
      <h4>{location}</h4>
      <div>les tags: {tags}</div>
      <div>le hôte: {host.name}</div>
      <div>la note: {rating}</div>
      <section className='Presentation'>
        {/* TODO: changer la présentation pour passer en 2 collonne côte à côte en desktop */}
        <Collapse title="Description" content={description}/>
        <Collapse title="Équipements" content={equipments}/>
        {/* TODO: faire une présentation en liste pour les équipements */}
      </section>


      <Footer />
    </main>
  );
};

export default HousingDetails;