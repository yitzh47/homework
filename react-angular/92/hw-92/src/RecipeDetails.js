import React, { Component } from 'react';
import ListComponent from './ListComponent';
import { useState } from 'react';

export default function RecipeDetails(props) {

  const [showPicture, setShowPicture] = useState(true);

  
  

  const { name, ingredients, directions, picture } = props.recipe;
  return (
    <>
      <h2>{name}</h2>
      {showPicture && <img style={{ width: '200px', height: '200px' }} className="img-thumbnail" src={picture} alt={name} />}
      <br />
      <button onClick={() => setShowPicture(!showPicture)} className="btn btn-secondary">{showPicture ? 'hide' : 'show'}</button>
      <ListComponent title="Ingredients" items={ingredients} />
      <ListComponent title="directions" items={directions} />
    </>
  );

}
