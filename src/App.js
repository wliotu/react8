import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Womans from './components/Womans/Womans'
import Mans from './components/Mans/Mans'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

function App() {
  const example = {
    clo:"shirt",
    size: "46",
    cost: "1000"
  }
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route />
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/mans' element={<Mans />}/>
      <Route path='/womans' element={<Womans />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
