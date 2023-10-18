'use client'
import React, { useState } from 'react'
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



const ProjectPage = () => {

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    }

    const pgProjectsClass = `${isDarkMode ? 'pg-projects-dk' : 'pg-projects'}`;
    const rectangle2Class = `${isDarkMode ? 'rectangle2 rect-dk' : 'rectangle2'}`;
    const titleMajClass = `${isDarkMode ? 'lp-title-maj maj-dk' : 'lp-title-maj'}`;
    const titleCursClass = `${isDarkMode ? 'lp-title-curs curs-dk' : 'lp-title-curs'}`;


    return (
        <section className={pgProjectsClass}>

            <div className='gp-title'>
                <div className={rectangle2Class} />
                <div className={titleMajClass}>MAKE IT</div>
                <div className={titleCursClass}>differently</div>
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

                <Menu
                    rect={isDarkMode ? 'rectangle4 rect-dk' : 'rectangle4'}
                    vector={isDarkMode ? 'Vector-dk Vector' : 'Vector'}
                />
                <div onClick={toggleDarkMode}>
                    <DarkMode
                        rectClass={isDarkMode ? 'rectangle-dk rect-dk' : 'rectangle-dk'}
                        icon={isDarkMode ? 'icon icon-dk' : 'icon'}
                    />
                </div>

                <EnglishMode
                    rect={isDarkMode ? 'rectangle5 rect-dk' : 'rectangle5'}
                    en={isDarkMode ? 'en en-dk' : 'en'}
                    fr={isDarkMode ? 'fr fr-dk' : 'fr'}
                />
            </section>
        </section>
    )
}

export default ProjectPage