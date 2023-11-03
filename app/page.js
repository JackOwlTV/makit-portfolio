'use client'
import React, { useState, useEffect, useRef } from 'react';
import 'animate.css';

import LandingHeader from "./components/Landing Header/LandingHeader.jsx"
import Cadre from "./components/Cadre/Cadre.jsx"


import './components/Cadre/Cadre.css'
import './components/Landing Header/LandingHeader.css'

export default function Home() {

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }
  const mainClass = `${isDarkMode ? 'main-dk min-h-screen' : ' main min-h-screen'}`;
  const pgProjectsClass = `${isDarkMode ? 'pg-projects-dk' : ' pg-projects'}`;
  const rectangle2Class = `${isDarkMode ? 'rectangle2 rect-dk' : 'rectangle2'}`;
  const titleMajClass = `${isDarkMode ? 'lp-title-maj maj-dk' : 'lp-title-maj'}`;
  const titleCursClass = `${isDarkMode ? 'lp-title-curs curs-dk' : 'lp-title-curs'}`;
  const headerClass = `${isDarkMode ? 'dk-mode' : ' landing-header animate__fadeIn'}`;
  const emojiClass = `emoji ${isDarkMode ? 'dark' : 'light-mode'}`;


  const section1Ref = useRef();
  const section2Ref = useRef();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Lorsque 50 % de la section est visible
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        const sectionDiv = entry.target.querySelector('.observe-me'); // Classe personnalisée
        if (entry.isIntersecting && sectionDiv) {
          sectionDiv.classList.add('show');
          sectionDiv.classList.remove('hidden');
        } else if (sectionDiv) {
          sectionDiv.classList.remove('show');
          sectionDiv.classList.add('hidden');

        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (section1Ref.current) {
      observer.observe(section1Ref.current);
    }

    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className={mainClass}>

      <section ref={section1Ref} className={'slider'}>
        <div className='observe-me hidden'>
          <LandingHeader
            click={toggleDarkMode}
            emojiClass={emojiClass}
            headerClass={headerClass}
            titleMajClass={isDarkMode ? 'dark-maj' : 'title-maj'}
            titleCursClass={isDarkMode ? 'dark-curs' : 'title-curs'}
          /></div>
      </section>

      <section ref={section2Ref} className={'slider'}>
        <div className='observe-me hidden'>
          <Cadre cadreClass={pgProjectsClass}
            click={toggleDarkMode}
            rect2Class={rectangle2Class}
            majClass={titleMajClass}
            cursClass={titleCursClass}
            rectmenuClass={isDarkMode ? 'rectangle4 rect-dk' : 'rectangle4'}
            vectorClass={isDarkMode ? 'Vector-dk Vector' : 'Vector'}
            dkClass='darkmode'
            dkRectClass={isDarkMode ? 'rectangle-dk rect-dk' : 'rectangle-dk'}
            dkIconClass={isDarkMode ? 'icon icon-dk' : 'icon'}
            rect5Class={isDarkMode ? 'rectangle5 rect-dk' : 'rectangle5'}
            languesClass='englishmode'
            enClass={isDarkMode ? 'en en-dk' : 'en'}
            frClass={isDarkMode ? 'fr fr-dk' : 'fr'}
            projects={isDarkMode ? 'project-dk' : 'project'}
            project={isDarkMode ? 'lg-project-dk' : 'lg-project'}
            title={isDarkMode ? 'title-dk' : 'title-projects'}
          />

        </div>
      </section>
    </main>
  )
}
