'use client'
import React, { useState } from 'react';
import './LandingHeader.css';
import { MdEmojiObjects } from "react-icons/md";

const LandingHeader = (props) => {

    return (
        <section className={props.headerClass}>
            <MdEmojiObjects className={props.emojiClass} onClick={props.click} />
            <div className="title-project">
                <div className={props.titleMajClass}>MAKE IT</div>
                <div className={props.titleCursClass}>differently</div>
            </div>
        </section>
    );
}

export default LandingHeader;
