import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import About from '../About/About'
import Content from '../Content/Content'

const Home = () => {
  return (
    <div className='container'>

        <Navbar />
        <Header />
        <About />
        <Content />

    </div>
  )
}

export default Home