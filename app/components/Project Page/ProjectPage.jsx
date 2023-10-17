'use client'
import React from 'react'
import { Projects } from '../../data/Projects'

import ProjectLigne from './Projet Ligne/ProjectLigne'
import Menu from './menu/menu'
import DarkMode from './dark-mode/DarkMode'
import EnglishMode from './english-mode/EnglishMode'

import './ProjectPages.css'
import './Projet Ligne/ProjectLigne.css'
import './menu/menu.css'
import './dark-mode/DarkMode.css'
import './english-mode/EnglishMode.css'


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
                <img src={Projects.cover} alt={Projects.description} />
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

                <Menu />
                <DarkMode />
                <EnglishMode />
            </section>
        </section>
    )
}

export default ProjectPage