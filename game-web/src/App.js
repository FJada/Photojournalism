import React from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/HomePage';
import About from './components/About/AboutPage';
import Gallery from './components/Gallery/GalleryPage';
import Spotlight from './components/Spotlight/SpotlightPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Spotlight" element={<Spotlight />} />
        
      </Routes>
    </Router>
  );
};

export default App;