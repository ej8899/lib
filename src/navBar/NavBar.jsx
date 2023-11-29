// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
  return (
    <header className='nav-header'>
      <nav className='nav-wrapper'>
        <ul className='nav-list'>
          <li className='nav-item'><Link to="/">Home</Link></li>
          <li className='nav-item'><Link to="/locations">View by Location</Link></li>
          <li className='nav-item'><Link to="/titles">View by Position</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
