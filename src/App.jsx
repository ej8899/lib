// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from 'react-router-dom';
import UserProfile from './userprofiles/userProfile';
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
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Routes>
        <Route
            path="/"
            element={<Navigation />} // Display Navigation component for the home route
          />
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
