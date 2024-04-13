import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Authentication from './Components/Authentication/Authentication';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={true ? <Home /> : < Authentication />} />
      </Routes>
    </div>
  )
}

export default App
