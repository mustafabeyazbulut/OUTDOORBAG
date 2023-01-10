import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter as Router,  Routes,  Route } from "react-router-dom";   
import Component from './Pages/Component/Component';
import Home from './Pages/Home/Home';
import Signin from "./Pages/Auth/Signin/Signin";
import Signup from "./Pages/Auth/Signup/Signup";

function App() {
  return (
    <Router>
      <Navbar/>

      <div id="content">
        <Routes>
          <Route path="/" exact element={<Home />} /> 
          <Route path="/Component" element={<Component />} />
          <Route path="/Signin" element={<Signin />} /> 
          <Route path="/Signup" element={<Signup />} /> 
        </Routes>
      </div>
    </Router>
      
    
  );
}

export default App;
