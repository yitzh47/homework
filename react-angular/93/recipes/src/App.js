import './App.css';
import RecipeDetails from './RecipeDetails';
import ListComponent from './ListComponent';
import ClickCounter from './ClickCounter';
import RecipeList from './RecipeList';
import { useState, useEffect } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

function App() {




  return (
    <div className="container-fluid">
      <div className="text-center">
        <h1>PCS Recipes</h1>
        <hr />
        <h4>recipes</h4>
        <Routes>
          <Route path="/" element={<RecipeList />} >
            <Route path="recipe/:id" element={<RecipeDetails />} />
          </Route>
        </Routes>
        


        <hr />
        <ClickCounter />
      </div>
    </div >
  );

}

export default App;
