// App.js
import React from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link, Routes, useNavigate } from 'react-router-dom';
import UserProfile from './userprofiles/userProfile';

import TitleList from './titleList/TitleList';
import UserList from './titleList/UserList';

import './App.scss';


const Home = () => <h2>Home</h2>;

const Navigation = () => {
  const navigate = useNavigate();
  
  return (
    <nav>
      <ul>
        <li><Link to="/user/123" onClick={() => navigate('/user/123')}>User Profile (ID: 123)</Link></li>
        <li><Link to="/user/456" onClick={() => navigate('/user/456')}>User Profile (ID: 456)</Link></li>
        <li><Link to="/user/4563" onClick={() => navigate('/user/456')}>User Profile (ID: 4563) (not exist test)</Link></li>
        <li><Link to="/titles" onClick={() => navigate('/titles')}>filter by: job titles</Link></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
        <Route
            path="/"
            element={<Navigation />} // Display Navigation component for the home route
          />
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/titles" element={<TitleList />} />
          <Route path="/users/:title" element={<UserList />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
