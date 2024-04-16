import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Womans from './components/Womans/Womans'
import Mans from './components/Mans/Mans'
import About from './components/About/About'
import Home from './components/Home/Home'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/home' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/mans' element={<Mans />}/>
      <Route path='/womans' element={<Womans />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
