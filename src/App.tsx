import React from 'react';
import './App.css';
import NavBar from './nav-bar/NavBar';
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Router/>
      </BrowserRouter>
    </div>
  )
}

export default App
