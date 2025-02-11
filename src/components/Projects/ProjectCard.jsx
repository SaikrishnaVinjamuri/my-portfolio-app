import React from "react";
import "./Projects.css"; // Importing CSS

const ProjectCard = ({ title, github, demo }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </div>
  );
};

export default ProjectCard;
