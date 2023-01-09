import React from 'react';
import { BrowserRouter as Router,  Routes,  Route } from "react-router-dom";      // import react-router-dom
import './App.css';
import Navbar from "./components/Navbar";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home";



function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div id="content">
          <Routes>
            <Route path="/*" exact element={<Home />} /> 
            <Route path="/signin" element={<Signin />} /> 
            <Route path="/signup" element={<Signup />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}



export default App;
