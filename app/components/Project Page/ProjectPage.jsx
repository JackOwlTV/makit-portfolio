'use client'
import React from 'react'
import { Projects } from '../../data/Projects'

import ProjectLigne from './Projet Ligne/ProjectLigne'
import './ProjectPages.css'
import './Projet Ligne/ProjectLigne.css'




const ProjectPage = (props) => {

    return (


        <div className={props.projects}>
            <div className="gp-mask ">
                <div className="bg-mask" />
                <img src={Projects.cover} alt={Projects.description} />
            </div>

            <section className="projects">
                <div className="title-projects">
                    <h1>PROJETS</h1>
                    <p>4</p>
                </div>

                <div className="projects-list">
                    {Projects.map((project, e) => {
                        return (
                            <ProjectLigne
                                key={e.id}
                                name={project.name}
                                category={project.category}
                            />
                        )
                    })}
                </div>
            </section>

        </div>

    )
}

export default ProjectPage