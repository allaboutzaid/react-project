import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router >
      <div className="App">
        <ul className='App-header'>
          <li>
            <Link to="/" className='links'>Home</Link>
          </li>

          <li>
            <Link to="/about" className='links'>About</Link>
          </li>

          <li>
            <Link to="/portfolio" className='links'>Portfolio</Link>
          </li>

          <li>
            <Link to="/contact" className='links'>Contact</Link>
          </li>
          
          <div>
            <h2>LOGO</h2>
          </div>
        </ul>

        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/portfolio' element={< Portfolio />}></Route>
          <Route exact path='/contact' element={< Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
