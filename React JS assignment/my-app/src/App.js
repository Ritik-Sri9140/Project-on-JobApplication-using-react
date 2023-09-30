import JobDetails from './components/JobDetails';
import Login from './components/Login';
import Signup from './components/Signup';
import Root from './Root';
import LandingPage from '/LandingPage';
import JobApplicationPage from './JobApplicationPage';
import React, { useState } from 'react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <>
    <div>
      {isLoggedIn ? <Signup /> : <Login />}
    </div>
    <LandingPage/>
    <Root/>
    <JobDetails/>
    <JobApplicationPage/>
    </>
  );
};

export default App;



