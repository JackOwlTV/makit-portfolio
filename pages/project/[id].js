'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { Projects } from '../../app/data/Projects';
import DarkMode from '@/app/components/dark-mode/DarkMode';
import EnglishMode from '@/app/components/english-mode/EnglishMode';

import { kelson, kelson_meduim } from "@/app/fonts/kelson/kelson";
import { kaushan } from "@/app/fonts/kaushan/kaushan";

import '@/app/components/dark-mode/DarkMode.css';
import '@/app/components/english-mode/EnglishMode.css';
import '@/app/menu/page.css';

const ProjectDetails = () => {
    const router = useRouter();
    const { id } = router.query;

    // Récupérez les détails du projet en fonction de l'id
    const project = Projects.find((p) => p.id === id);
    const handleClick = () => {
        router.push("/");
    };

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    };

    if (!project) {

        return (
            <div className={isDarkMode ? "dk div" : "div"}>
                <div className="navbar">
                    <div className="close" onClick={handleClick}>
                        <svg
                            width="34"
                            height="34"
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g>
                                <path
                                    className={isDarkMode ? " close-dk" : "vector"}
                                    d="M34 25.5V34H25.5L0 8.5V0H8.5L34 25.5Z"
                                />
                                <path
                                    className={isDarkMode ? " close-dk" : "vector"}
                                    d="M8.5 34H0V25.5L25.5 0H34V8.5L8.5 34Z"
                                />
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
                            langues="rectangle"
                            rect=""
                            en={isDarkMode ? "en-menu en-dk" : "en-menu"}
                            fr={isDarkMode ? "fr-menu fr-dk" : "fr-menu"}
                        />
                    </div>
                    <div className="dark-mode" onClick={toggleDarkMode}>
                        <DarkMode
                            dk=""
                            rectClass=""
                            icon={isDarkMode ? "menu-dk" : "icon-menu"}
                        />
                    </div>
                </div>
                <section className="menu-contenu">
                    <div className="menu-container">
                        <div className={kelson.className}>
                            <span className={
                                isDarkMode ? "dark titre-container" : "titre-container"
                            }>WHAT’S??!</span>
                        </div>


                        <div className={kaushan.className}>
                            <span className={
                                isDarkMode ? "dark hover-container" : "hover-container"
                            }>what's??!</span>
                        </div>
                    </div>
                    <div className={kelson_meduim.className}>
                        <span className={
                            isDarkMode ? "dark error" : "error"
                        }>un problème est survenu...</span>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div>
            <h1>{project.name}</h1>
            <p>Description: {project.description}</p>
            {/* Ajoutez d'autres détails du projet en fonction de vos besoins */}
        </div>
    );
};

export default ProjectDetails;
