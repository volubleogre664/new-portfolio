import React from "react";
import "./Project.css";

function ProjectView({
  title,
  description,
  github,
  preview,
  img,
  privateRepo = false,
}) {
  return (
    <div className="project">
      <h2 className="project__title">{title}</h2>

      <img className="project__img" src={img} alt="project screen grab" />

      <p className="projectDescription">{description}</p>

      <div className="project__btns">
        <a href={github} className="project__btn" target="blank">
          <i className="fab fa-github"></i> Github
        </a>
        {!privateRepo && (
          <a href={preview} className="project__btn" target="blank">
            <i className="fas fa-eye"></i> Preview
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectView;
