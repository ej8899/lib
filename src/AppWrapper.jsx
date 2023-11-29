// AppWrapper.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Link, Routes, useNavigate , useLocation} from 'react-router-dom';
import UserProfile from './userprofiles/userProfile';
import App from './App'; // This is your main App component

const AppWrapper = () => {
  // const location = useLocation();
  const [hideNav, setHideNav] = useState(false);
  document.title = `LIB - Company Directory`;
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/user/:id"
          element={<UserProfile setHideNav={setHideNav} />}
        />
        <Route
          path="/*"
          element={<App hideNav={hideNav} />}
        />
      </Routes>
    </HashRouter>
  );
};

export default AppWrapper;
