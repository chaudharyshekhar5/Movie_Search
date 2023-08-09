import React, { useContext } from 'react'
import Movies from './Movies'
import Search from './Search'
import Footer from "./Footer"


function Home() {
  return (
    <div>
    <Search/>
    <Movies/>
    <Footer/>
    </div>
  )
}

export default Home
