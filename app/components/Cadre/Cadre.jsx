'use client'
import React from 'react'
import './Cadre.css'

import Menu from '../menu/Menu'
import DarkMode from '../dark-mode/DarkMode'
import EnglishMode from '../english-mode/EnglishMode'
import ProjectPage from '../Project Page/ProjectPage'
import '../menu/menu.css'
import '../dark-mode/DarkMode.css'
import '../english-mode/EnglishMode.css'
import '../Project Page/ProjectPages.css'


function Cadre(props) {
    return (
        <div className={props.cadreClass}>

            <div className='gp-title'>
                <div className={props.rect2Class} />
                <div className={props.majClass}>MAKE IT</div>
                <div className={props.cursClass}>differently</div>
            </div>

            <ProjectPage
                projects={props.projects}
                project={props.project}
                title={props.title}
            />
            <Menu
                rect={props.rectmenuClass}
                vector={props.vectorClass}
            />
            <div onClick={props.click}>
                <DarkMode
                    rectClass={props.dkRectClass}
                    icon={props.dkIconClass}
                />
            </div>

            <EnglishMode
                rect={props.rect5Class}
                en={props.enClass}
                fr={props.frClass}
            />
        </div>
    )
}

export default Cadre