'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


import DarkMode from '../components/dark-mode/DarkMode'
import EnglishMode from '../components/english-mode/EnglishMode'

import './page.css'
import '../components/dark-mode/DarkMode.css'
import '../components/english-mode/EnglishMode.css'


function page() {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    }

    const router = useRouter();

    const handleClick = () => {
        router.push('/')
    }

    const projectClick = () => {
        router.push('/#project')
    }

    const aboutClick = () => {
        router.push('/#apropos')
    }

    const contactClick = () => {
        router.push('/#contact')
    }
    return (

        <div className={isDarkMode ? 'dk div' : 'div'} >
            <div className="navbar">
                <div className="close" onClick={handleClick}>
                    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path className={isDarkMode ? ' close-dk' : 'vector'} d="M34 25.5V34H25.5L0 8.5V0H8.5L34 25.5Z" />
                            <path className={isDarkMode ? ' close-dk' : 'vector'} d="M8.5 34H0V25.5L25.5 0H34V8.5L8.5 34Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_5_118">
                                <rect width="34" height="34" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div className="language">
                    <EnglishMode
                        langues='rectangle'
                        rect=''
                        en={isDarkMode ? 'en-menu en-dk' : 'en-menu'}
                        fr={isDarkMode ? 'fr-menu fr-dk' : 'fr-menu'}
                    />
                </div>
                <div className="dark-mode" onClick={toggleDarkMode}>
                    <DarkMode
                        dk=''
                        rectClass=''
                        icon={isDarkMode ? 'menu-dk' : 'icon-menu'}
                    />
                </div>
            </div>
            <section className='menu-contenu'>

                <div onClick={projectClick} className="menu-container">
                    <span className={isDarkMode ? 'dark titre-container' : "titre-container"}>PROJECTS</span>
                    <span className={isDarkMode ? "dark hover-container" : "hover-container"}>project</span>
                </div>

                <div onClick={aboutClick} className="menu-container">
                    <span className={isDarkMode ? 'dark titre-container' : "titre-container"}>À PROPOS</span>
                    <span className={isDarkMode ? "dark hover-container" : "hover-container"}>à propos</span>
                </div>

                <div onClick={contactClick} className="menu-container">
                    <span className={isDarkMode ? 'dark titre-container' : "titre-container"}>CONTACT</span>
                    <span className={isDarkMode ? "dark hover-container" : "hover-container"}>contact</span>
                </div>
            </section>
        </div>
    )
}

export default page