'use client'
import React, { useState, useEffect } from 'react'

import Image from "next/image"
import LandingHeader from "./components/Landing Header/LandingHeader"
import ProjectPage from "./components/Project Page/ProjectPage"
import Cadre from "./components/Cadre/Cadre"

import './components/Cadre/Cadre.css'
import './components/Landing Header/LandingHeader.css'




export default function Home() {

  const scrollThreshold = [0, 10];

  const [isHidden, setIsHidden] = useState(false);
  const [isContainerHidden, setIsContainerHidden] = useState(true);

  function checkScroll() {
    const scrollY = window.scrollY;
    if (scrollY > scrollThreshold[0]) {
      setIsHidden(true);
      setIsContainerHidden(false);
    } else if (scrollY <= scrollThreshold[0] && isHidden) {
      setIsHidden(false);
      setIsContainerHidden(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, [isHidden]);

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }
  const mainClass = `${isDarkMode ? 'main-dk flex min-h-screen' : 'flex main min-h-screen'}`;
  const pgProjectsClass = `${isDarkMode ? 'pg-projects-dk' : 'pg-projects'}`;
  const rectangle2Class = `${isDarkMode ? 'rectangle2 rect-dk' : 'rectangle2'}`;
  const titleMajClass = `${isDarkMode ? 'lp-title-maj maj-dk' : 'lp-title-maj'}`;
  const titleCursClass = `${isDarkMode ? 'lp-title-curs curs-dk' : 'lp-title-curs'}`;

  return (
    <main className={mainClass}>
      <section className={isHidden ? 'hidden' : 'header show'}>
        <LandingHeader />
      </section>

      <div className={`container ${isContainerHidden ? 'hidden' : 'show'}`}>
        <Cadre cadreClass={pgProjectsClass}
          click={toggleDarkMode}
          rect2Class={rectangle2Class}
          majClass={titleMajClass}
          cursClass={titleCursClass}
          rectmenuClass={isDarkMode ? 'rectangle4 rect-dk' : 'rectangle4'}
          vectorClass={isDarkMode ? 'Vector-dk Vector' : 'Vector'}
          dkRectClass={isDarkMode ? 'rectangle-dk rect-dk' : 'rectangle-dk'}
          dkIconClass={isDarkMode ? 'icon icon-dk' : 'icon'}
          rect5Class={isDarkMode ? 'rectangle5 rect-dk' : 'rectangle5'}
          enClass={isDarkMode ? 'en en-dk' : 'en'}
          frClass={isDarkMode ? 'fr fr-dk' : 'fr'} />
        <ProjectPage
          projects="project hidden"
        />
      </div>
    </main>
  )
}
