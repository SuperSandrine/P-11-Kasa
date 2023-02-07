import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';

import mountainBgImg from '../../assets/mountainGrand.jpg'
import Collapse from '../../components/Collapse/Collapse';
import Footer from '../../components/Footer/Footer';



const fiabContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
const respContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
const servContent="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
const secuContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

const styleSection = {
  margin: "43px",
  marginInline:"auto",
  width:"90%",
}

const About = () => {
  return (
    <main>
      <Header />
      
      <Banner fond={mountainBgImg}/>
      <section style={styleSection}>
        <Collapse title="Fiabilité" content={fiabContent}/>
        <Collapse title="Respect" content={respContent}/>
        <Collapse title="Service" content={servContent}/>
        <Collapse title="Sécurité" content={secuContent}/>
      </section>
      <Footer />
    </main>
  );
};

// autre méthode avec children:
// const About = () => {
//   return (
//     <div>
//       <Header />
//       <Banner fond={mountainBgImg}/>
//       <h1>À propos</h1>
//       <Collapse title="Fiabilité">
//         {fiabContent}
//       </Collapse>
//       <Collapse title="Respect" >
//         {respContent}
//       </Collapse>
//       <Collapse title="Service" >
//         {servContent}
//       </Collapse>
//       <Collapse title="Sécurité" >        
//         {secuContent}
//       </Collapse>
//       <Footer />
//     </div>
//   );
// };



export default About;