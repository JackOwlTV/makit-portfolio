'use client'
import React, { useState, useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import 'animate.css';

import Image from "next/image"
import LandingHeader from "./components/Landing Header/LandingHeader"
import ProjectPage from "./components/Project Page/ProjectPage"
import Cadre from "./components/Cadre/Cadre"

import './components/Cadre/Cadre.css'
import './components/Landing Header/LandingHeader.css'




export default function Home() {


  const containerConfigs = [
    {
      ref: useRef(),
      threshold: 5, // Seuil de défilement pour le premier conteneur
    },

    {
      ref: useRef(),
      threshold: 30, // Seuil de défilement pour le premier conteneur
    },
    // Ajoutez autant d'objets de configuration que nécessaire
  ];

  useEffect(() => {
    const checkScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > containerConfigs[0].threshold) {
        // Le seuil pour le premier conteneur est atteint
        containerConfigs[0].ref.current.classList.add('hidden');
        containerConfigs[0].ref.current.classList.remove('show');
      } else {
        containerConfigs[0].ref.current.classList.add('show');
        containerConfigs[0].ref.current.classList.remove('hidden');
      }

      if (scrollY > containerConfigs[1].threshold) {
        // Le seuil pour le second conteneur est atteint
        containerConfigs[1].ref.current.classList.add('show');
        containerConfigs[1].ref.current.classList.remove('hidden');
      } else {
        containerConfigs[1].ref.current.classList.add('hidden');
        containerConfigs[1].ref.current.classList.remove('show');
      }
    };

    const scrollToProjectPage = () => {
      checkScroll();
      scroll.scrollTo(containerConfigs[1].ref.current.offsetTop, {
        duration: 500, // Durée de l'animation du scroll en millisecondes
      });
    };

    window.addEventListener('scroll', () => {
      scrollToProjectPage();
      checkScroll();
    });
  });

  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  }
  const mainClass = `${isDarkMode ? 'main-dk min-h-screen' : ' main min-h-screen'}`;
  const pgProjectsClass = `${isDarkMode ? 'pg-projects-dk' : 'pg-projects'}`;
  const rectangle2Class = `${isDarkMode ? 'rectangle2 rect-dk' : 'rectangle2'}`;
  const titleMajClass = `${isDarkMode ? 'lp-title-maj maj-dk' : 'lp-title-maj'}`;
  const titleCursClass = `${isDarkMode ? 'lp-title-curs curs-dk' : 'lp-title-curs'}`;
  const headerClass = `${isDarkMode ? 'dk-mode' : 'landing-header animate__fadeIn'}`;
  const emojiClass = `emoji ${isDarkMode ? 'dark' : 'light-mode'}`;




  return (
    <main className={mainClass}>
      <section ref={containerConfigs[0].ref} className={'show animate__fadeIn'}>
        <LandingHeader
          click={toggleDarkMode}
          emojiClass={emojiClass}
          headerClass={headerClass}
          titleMajClass={isDarkMode ? 'dark-maj' : 'title-maj'}
          titleCursClass={isDarkMode ? 'dark-curs' : 'title-curs'}
        />
      </section>

      <div ref={containerConfigs[1].ref} className={'hidden animate__fadeIn'}>
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
