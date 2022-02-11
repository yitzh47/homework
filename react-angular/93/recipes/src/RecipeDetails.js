import ListComponent from './ListComponent';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RecipeDetails() {

  const [showPicture, setShowPicture] = useState(true);
  const [recipe, setRecipe] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/data/${id}.json`); // fetch the json file 
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json(); // parse the json file
        setRecipe(data); // set the data to the state
      } catch (e) {
        console.log(e);
      }

    })();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  const { name, ingredients, directions, picture } = recipe;

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
