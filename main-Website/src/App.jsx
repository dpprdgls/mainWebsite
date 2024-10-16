import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Intro from './components/intro';
import Portfolio from './components/portfolio';
import Navbar from './components/navbar'; 
import Footer from './components/footer'; 
import Skills from './components/skills'; 
import Timeline from './components/timeline'; 
import About from './components/about'; 
import Contact from './components/contact'; 


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
          <Route path='/contact' element={<Contact />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
        <Footer /> {/* Ensure Footer is imported */}
      </div>
    </div>
  );
}

export default App;