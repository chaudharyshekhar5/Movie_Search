import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Movies from './Components/Movies'
import Singlemovie from './Components/Singlemovie'
import "./App.css"
import Errors from './Components/Errors'



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/movies" element={<Movies/>}></Route>
          <Route path="movies/:id" element={<Singlemovie/>}></Route>
          <Route path="*" element={<Errors/>}></Route>
        </Routes>
      </Router>

    </div>
  )
}

export default App
