import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function RecipeList() {

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('./data/recipes.json'); // fetch the json file 
        if (!response.ok) {
          throw new Error(response.status, response.statusText);
        }
        const data = await response.json(); // parse the json file
        setRecipes(data); // set the data to the state
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <ul className="bulletless">
        {recipes.map((item) => (
          <li key={item.id}><Link to={`/recipe/${item.id}`}> {item.name} </Link></li>
        ))}
      </ul>
      <hr />
      <Outlet />  
    </>
  )
}

