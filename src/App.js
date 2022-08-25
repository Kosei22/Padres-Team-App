import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Home from './Component/Home';
import Roster from './Component/Roster';
import Footer from './Component/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Roster" element={<Roster />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
