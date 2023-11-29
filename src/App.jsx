// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link, Routes, useNavigate , useLocation} from 'react-router-dom';

import './App.scss';

import UserProfile from './userprofiles/userProfile';
import TitleList from './titleList/TitleList';
import UserList from './titleList/UserList';
import LocationList from './titleList/LocationList';
import UserListByLocation from './titleList/UserListByLocation';
import NavBar from './navBar/NavBar';
import Footer from './Footer/Footer';


const Home = () => <h2>Home</h2>;

const Navigation = () => {
  const navigate = useNavigate();
  document.title = `LIB - Company Directory`;
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

const App = ({hideNav}) => {
  //const [hideNav, setHideNav] = useState(true);

  document.title = `LIB - Company Directory`;

  return (
    <>
      {hideNav ? null : <NavBar />}
      <div className='page-wrapper'>
        <Routes>
        <Route
            path="/"
            element={<Navigation />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/titles" element={<TitleList />} />
          <Route path="/locations" element={<LocationList />} />
          <Route path="/users/:title" element={<UserList />} />
          <Route path="/location/:location" element={<UserListByLocation />} />
        </Routes>
      </div>
      {hideNav ? null : <Footer />}
    </>
  );
};

export default App;
