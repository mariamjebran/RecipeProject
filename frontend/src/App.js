import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar';
import Table from './components/Table';
import Body from './components/Body'

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/home" element={<Body/>} />
        <Route path="/recipes" element={<Table/>} />
      </Routes>
      </BrowserRouter> 
    </div>
    
  );
}

export default App;
