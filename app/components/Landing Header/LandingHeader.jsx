'use client'
import React from 'react';

import './LandingHeader.css';
import { MdEmojiObjects } from "react-icons/md";

const LandingHeader = (props) => {

    return (
        <div className={props.headerClass}>
            <MdEmojiObjects className={props.emojiClass} onClick={props.click} />
            <div className="title-project">
                <div className={props.titleMajClass}>MAKE IT</div>
                <div className={props.titleCursClass}>differently</div>
            </div>

        </div>
    );
}

export default LandingHeader;
