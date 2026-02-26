import React from 'react';
import './App.css';
import Photobooth from './components/photobooth';
import Homestart from './components/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Photobooth />} />
      <Route path="/home" element={< Homestart />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
