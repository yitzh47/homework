import './App.css';
import { Routes, Route, Navigate, Outlet, Link } from 'react-router-dom';
import Header from './Header';
import StockChooser from './StockChooser';
import Ticker from './Ticker';
import SelectedTicker from './SelectedTicker';
import { useState, useEffect } from 'react';



function App() {



  return (
    <div>
      <Header />
      <StockChooser />
      <Routes>
        <Route index element={<Ticker />} />
        <Route path="/ticker/:id" element={<SelectedTicker />} />
      </Routes>

      <Outlet />
    </div>
  );

}
export default App;


