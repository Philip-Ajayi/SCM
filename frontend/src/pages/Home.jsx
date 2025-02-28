import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Flier from '../components/Home/Flier'
import Teaching from '../components/Home/Teaching'
import Spirit from '../components/Home/Spirit'
import Quote from '../components/Home/Quote'
import Blog from '../components/Home/Blog'
import Sermon from '../components/Home/Sermon'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Flier/>
      <Teaching/>
      <Spirit/>
      <Quote/>
      <Sermon/>
      <Blog/>
    </div>
  )
}

export default Home
