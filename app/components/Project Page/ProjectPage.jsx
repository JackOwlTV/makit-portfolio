'use client'
import React from 'react'
import './ProjectPages.css'
import { Projects } from '../../data/Projects'
import ProjectLigne from './Projet Ligne/ProjectLigne'

const ProjectPage = (props) => {
    return (
        <section className="pg-projects">

            <div className='gp-title'>
                <div className='rectangle2' />
                <div className='lp-title-maj'>MAKE IT</div>
                <div className='lp-title-curs'>differently</div>
            </div>

            <div className="gp-mask ">
                <div className="bg-mask" />
                <img src={props.cover} alt={props.description} />
            </div>

            <section className="projects">
                <div className="title-projects">
                    <h1>PROJETS</h1>
                    <p>4</p>
                </div>

                <div className="projects-list">
                    {Projects.map((project, index) => {
                        return (
                            <ProjectLigne
                                key={index.id}
                                name={project.name}
                                category={project.category}
                            />
                        )
                    })}
                </div>
            </section>
        </section>
    )
}

export default ProjectPage