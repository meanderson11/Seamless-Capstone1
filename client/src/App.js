import React from 'react';
import './App.css';
import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import RegistrationPage from './pages/registration';
import FrontSectionPage from './pages/frontsection';
import Sidebar1Page from './pages/dashboard';
import ClockIn1Page from './pages/clockin';






function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/signin' element={<SigninPage />} exact /> 
          <Route path='/registration' element={<RegistrationPage />} exact />
          <Route path='/frontsection' element={<FrontSectionPage />} exact />
          <Route path='/dashboard' element={<Sidebar1Page />} />
          <Route path='/clockin' element={<ClockIn1Page />} />
        
      
         
    

      </Routes> 
    </Router>
  );

}

export default App;