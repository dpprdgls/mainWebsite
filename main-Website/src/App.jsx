import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Intro from './components/intro';
import Portfolio from './components/portfolio';
import Navbar from './components/navbar'; // Ensure this matches your file structure
import Footer from './components/footer'; // Import Footer if you have it
import Skills from './components/skills'; // Import Skills if you have it
import Timeline from './components/timeline'; // Import Timeline if you have it
import About from './components/about'; // Import About if you have it

function App() {
  return (
    <div>
      <Navbar /> {/* Ensure component name matches import */}
      <div className="bg-white text-dark min-vh-100 mx-auto" style={{ maxWidth: '80rem' }}>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/timeline' element={<Timeline />} />
          {/* <Route path='/contact' element={<Contact />} /> */}
          <Route path='/skills' element={<Skills />} />
        </Routes>
        <Footer /> {/* Ensure Footer is imported */}
      </div>
    </div>
  );
}

export default App;