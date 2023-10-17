'use client'
import React, { useState } from 'react';
import './LandingHeader.css';
import { MdEmojiObjects } from "react-icons/md";

const LandingHeader = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!isDarkMode);
    }

    const headerClass = `${isDarkMode ? 'dk-mode' : 'landing-header'}`;
    const emojiClass = `emoji ${isDarkMode ? 'dark' : 'light-mode'}`;
    const titleMajClass = `${isDarkMode ? 'dark-maj' : 'title-maj'}`;
    const titleCursClass = `${isDarkMode ? 'dark-curs' : 'title-curs'}`;


    return (
        <section className={headerClass}>
            <MdEmojiObjects className={emojiClass} onClick={toggleDarkMode} />
            <div className="title-project">
                <div className={titleMajClass}>MAKE IT</div>
                <div className={titleCursClass}>differently</div>
            </div>
        </section>
    );
}

export default LandingHeader;
