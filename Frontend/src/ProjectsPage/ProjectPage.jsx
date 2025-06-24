import React from 'react'
import Navbar from "../HomePage/Components/Navbar"
import ProjectsGrid from './ProjectsGrid'
import Footer from "../HomePage/Components/Footer"

function ProjectPage() {
  return (
    <div>
        <Navbar/>
        <div className='h-20'></div>
        <ProjectsGrid/>
        <Footer/>
    </div>
  )
}

export default ProjectPage