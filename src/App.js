import React, { useEffect } from 'react';
import './App.css';
// here import the components for pages
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';
import { returnAllMissions } from './redux/missions/missionsSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(return all rockets ...);
    dispatch(returnAllMissions());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
