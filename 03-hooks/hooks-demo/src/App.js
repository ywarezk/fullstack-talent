import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {TilFajar} from './components/UseContext.js';

function App() {
  return (
    <div className="App">
      <TilFajar />
    </div>
  );
}

export default App;
