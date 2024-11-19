import React from 'react'
import Home from './components/home'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Update from './components/Update';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </div>
  </BrowserRouter>
    
    
  )
}

export default App