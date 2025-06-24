import React from 'react'
import Navbar from "../HomePage/Components/Navbar"
import ProjectsGrid from './ProjectsGrid'
import Footer from "../HomePage/Components/Footer"

function ProjectPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="h-20"></div>
      
      {/* Main content with grow to push footer down */}
      <div className="flex-grow">
        <ProjectsGrid />
      </div>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  )
}

export default ProjectPage
