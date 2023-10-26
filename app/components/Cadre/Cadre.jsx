'use client'
import React from 'react'
import './Cadre.css'

import Menu from '../Project Page/menu/menu'
import DarkMode from '../Project Page/dark-mode/DarkMode'
import EnglishMode from '../Project Page/english-mode/EnglishMode'
import '../Project Page/menu/menu.css'
import '../Project Page/dark-mode/DarkMode.css'
import '../Project Page/english-mode/EnglishMode.css'


function Cadre(props) {
    return (
        <div className={props.cadreClass}>

            <div className='gp-title'>
                <div className={props.rect2Class} />
                <div className={props.majClass}>MAKE IT</div>
                <div className={props.cursClass}>differently</div>
            </div>
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