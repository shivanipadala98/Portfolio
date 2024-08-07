import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="projectCard">
      <img
        src={project.projectLogo}
        alt={project.projectName}
        className="projectImage"
      />
      <p className="projectName">{project.projectName}</p>
      <p className="projectSkills">{project.skills}</p>
      <div className="pt-4 list">
        <ul className="list-description">
          {project.description.map((description, index) => {
            return (
              <li key={index} className="sm:text-m">
                {description}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
