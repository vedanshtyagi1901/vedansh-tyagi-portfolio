import React from 'react'
import Navbar from './Components/Navbar'
import Intro1 from './Components/Intro1'
import Intro2 from './Components/Intro2'
import Portfolio from './Components/Portfolio'
import WorkTogether from './Components/WorkTogether'
import Footer from './Components/Footer'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Intro1 />
      <Intro2 />
      <Portfolio />
      <WorkTogether />
      <Footer/>
    </div>

  )
}

export default HomePage