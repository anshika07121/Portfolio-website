import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../components/home'

function Homepage() {
  return (
    <div>
        {<Header/>}
        {<Home/>}
        {<Footer/>}
    </div>
  )
}

export default Homepage
