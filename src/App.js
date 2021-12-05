import React from 'react'
import './App.css'
import {Footer, WhatGP3, Header} from './containers';
import {Cta, Navbar } from './Components'; 

const App = () => (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatGP3 />
      <Cta />
      <Footer />
    </div>
  );

export default App
