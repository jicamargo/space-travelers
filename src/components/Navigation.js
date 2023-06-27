import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="header">
      <div className="div-logo">
        <span className="logo">Space Travelers</span>
      </div>
      <ul className="navbar">
        <li>
          <Link to="/Rockets" className="menu-item">Rockets</Link>
        </li>
        <li>
          <Link to="/Missions" className="menu-item">Missions</Link>
        </li>
        <li>
          <Link to="/Profile" className="menu-item">Profile</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
