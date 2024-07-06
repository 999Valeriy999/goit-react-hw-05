import { useState, useEffect } from 'react'
import './App.css'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'


function App() {

return (
  <BrowserRouter>
  <>
    <div>
     <nav>
      <ul>
        <li>
          <NavLink to="/">HomePage</NavLink>
        </li>
      </ul>
     </nav>

     <Routes>
      <Route path='/' element={<div> </div>}/>
     </Routes>
    </div>
  </>
  </BrowserRouter>
)
}

export default App


