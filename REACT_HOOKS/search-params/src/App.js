import React from 'react'
import Products from './Products'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes> <Route path="/" element={<Products />} /> </Routes>
    </BrowserRouter>
  )}
export default App