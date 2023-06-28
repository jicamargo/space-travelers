import React from 'react';
import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
// here import the components for pages
import Navigation from './components/Navigation';
import Rockets from './components/Rockets';

function App() {
  return (
    <BrowserRouter>
      <div className="panel-app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/rockets" element={<Rockets />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
