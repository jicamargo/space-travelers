import React from 'react';
import { NavLink } from 'react-router-dom';
import saturnIcon from '../assets/_saturn.png';

function Navigation() {
  return (
    <nav>
      <div className="div-logo">
        <img className="logo" src={saturnIcon} alt="Planet Icon" />
        <span className="logo">Space Travelers</span>
      </div>
      <ul className="navbar">
        <li>
          <NavLink to="/Rockets" className="menu-item" activeclassname="active">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/Missions" className="menu-item" activeclassname="active">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/Profile" className="menu-item" activeclassname="active">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
