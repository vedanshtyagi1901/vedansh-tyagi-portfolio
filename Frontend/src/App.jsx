import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage/HomePage'
import ProjectPage from './ProjectsPage/ProjectPage'
import AchievementPage from "./AchievementsPage/AchievementPage"
import ResumePage from './ResumePage/ResumePage'


function App() {
  return (
    <Router>
      <div className='m-0 p-0 h-screen'>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/projects" element={<ProjectPage/>} />
          <Route path="/achievements" element={<AchievementPage/>} />
          <Route path="/resume" element={<ResumePage/>} />
          

        </Routes>
      </div>
    </Router>
  )
}

export default App
