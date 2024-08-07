import React from 'react';
import cypressLawnLogo from "../../assets/Files/cypressLawnLogo.png";
import dairy from "../../assets/Files/dairy.png";
import portfolio from "../../assets/Files/portfolio.png";
import ProjectCard from './projectCard';

const projects=[
  {
    projectLogo: cypressLawnLogo,
    projectName:"CypressLawn",
    skills: "React,Nodejs,Express,MySQL",
    description: ["Developed user-facing features provided by UI/UX design provided by design team,API integrations,Developed backend API endpoints and implemented DB migrations and Scripts."],
    
  },
  {
    projectLogo: dairy,
    projectName: "Personal Dairy",
    skills: "React,Nodejs,Express,SQL",
    description: ['Developed an application with CRUD operations to track daily diary notes and store credentials.']
  },
  {
    projectLogo: portfolio,
    projectName: "Portfolio",
    skills: "React,CSS",
    description: ['Developed a personal portfolio to showcase my technical expertise and projects.']
  }
]

const Projects=()=> {
  return (
    <div className="projects" id="projects">
    <div className="skills-header">
      <p>Projects</p>
    </div>
    <div>
    <div className="projects-list">
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
    </div>
    </div>
  </div>
  )
}

export default Projects;