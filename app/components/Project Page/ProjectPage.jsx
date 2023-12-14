"use client";
import React, { useState } from "react";
import { Projects } from "../../data/Projects";
import { kelson_regular, kelson_meduim } from "@/app/fonts/kelson/kelson";

import ProjectLigne from "./Projet Ligne/ProjectLigne";
import ImgProject from "../ImgProject/ImgProject"; // Importez le composant ImgProject
import "./ProjectPages.css";
import "./Projet Ligne/ProjectLigne.css";
import "animate.css";

const ProjectPage = (props) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };
  return (
    <div className={props.projects}>
      <div className="gp-mask">
        <div className="bg-mask" />
        {hoveredProject && (
          <div className="project-cover">
            <ImgProject src={hoveredProject.cover} />
          </div>
        )}
        <div className="projects">
          <div className={props.title}>
            <h1 className={kelson_meduim.className}>PROJETS</h1>
            <p className={kelson_regular.className}>3</p>
          </div>

          <div className="projects-list">
            {Projects.map((project, e) => (
              <div
                className={props.project}
                key={project.id}
                onMouseEnter={() => handleMouseEnter(project)}
                onMouseLeave={handleMouseLeave}
              >
                <ProjectLigne
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  category={project.category}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
