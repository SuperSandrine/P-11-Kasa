import React from 'react';

//TOUN, TODO est-ce que je peux mettre plusieurs arguments dans un composant? comment j'appelle les arguments quand j'appelle le composant)
const Tag = (props) => {
  //array.maps(element => console.log("element dans tag", element))
  return (
    <div className='tags-box'>
      {props.title}
    </div>
  );
};

export default Tag;

// je veux pour chaque élèment du tableau un tag
// arr.maps( élement => créer un tag)

// une boucle: pendant qu'il y a des trucs dans le tableau, je le crée un tag avec le numéro d'index.
