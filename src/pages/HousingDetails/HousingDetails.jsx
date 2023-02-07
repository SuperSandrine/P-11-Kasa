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

import housingsData from "../../logements2.json"

const HousingDetails = () => {
  const houseId = useParams();
  //console.log( houseId); //obj: {houseId: 'c67ab8a7'}

  const houseDatasFromParamsId = housingsData.filter(element => element.id.includes(Object.values(houseId)));

  //console.log("houseDatasFromParamsId", houseDatasFromParamsId); // [{...}] // TODO : est dans un index 0, comment le virer et corriger le code suivant


  if (houseDatasFromParamsId[0] === undefined || houseDatasFromParamsId[0] === null){
    return <Navigate to="/error"></Navigate>;
  } else {
    const { id, title, cover, pictures, description, host, rating, location, equipments, tags } = houseDatasFromParamsId[0] 

    const equipmentsInLi=  equipments.map((x,i)=><li key={i}> {x}</li>)

  
    return (
      <main>
        <Header />
        <Slideshow urlPath={pictures}></Slideshow>
        <div className='heading'>
          <div>
            <h1>{title}</h1>
            <h4>{location}</h4>
          </div>
          <Host host={host}></Host>
        </div>
        <div className='iconography'>
          <Tag title={tags.map((element, index)=> <div className="tag" key={index} >{element}</div>)} />
          {/* TODO doit y avoir un moyen de faire une truc plus simple comme ce codePen https://codepen.io/pen?&editors=0010&layout=left */}

          <div className='rating-box'> <Rating ratingdata={rating} /></div>
        </div>
        <section className='Presentation'>
          <Collapse title="Description" content={description}/>
          <Collapse className="tools" title="Équipements" content={equipmentsInLi}/>
        </section>
        <Footer />
      </main>
    );


  }
}
    



export default HousingDetails;