import React from 'react'
import Project from './Project/Project'
import  './projects.css'
import Typewriter from 'typewriter-effect';
import ProjectLink from './Project/ProjectLink';

function Projects() {
    return (
        <div className="projects">
            <h1><Typewriter
  options={{
    strings: ['PROJECTS 👨‍💻'],
    autoStart: true,
    loop: true,
  }}
/></h1>
<div className="project_content">
<div className="dropdown">
  <span className="ddhead">All Projects</span>
  <ProjectLink url="https://challenge-c03b5.web.app" ptitle="Amazon Clone"/>
  <ProjectLink url="https://challenge-c03b5.web.app" ptitle="Amazon Clone"/>
  <ProjectLink url="https://challenge-c03b5.web.app" ptitle="Amazon Clone"/>
  <ProjectLink url="https://challenge-c03b5.web.app" ptitle="Amazon Clone"/>
  
  </div>
  {/* "https://challenge-c03b5.web.app" */}
<div className="projectflex">
<Project title="Amazon-Clone" frameurl="https://challenge-c03b5.web.app" />
<Project title="Amazon-Clone" frameurl="https://challenge-c03b5.web.app"/>
</div>


</div>
           
        </div>
    )
}

export default Projects
