'use client'
import React from 'react';

import './LandingHeader.css';
import { MdEmojiObjects } from "react-icons/md";
import { kelson } from '@/app/fonts/kelson/kelson';
import { kaushan } from '@/app/fonts/kaushan/kaushan';
const LandingHeader = (props) => {

    return (
        <div className={props.headerClass}>
            <MdEmojiObjects className={props.emojiClass} onClick={props.click} />
            <div className="title-project">
                <div className={kelson.className}>
                    <div className={props.titleMajClass}>
                        MAKE IT
                    </div>
                </div>
                <div className={kaushan.className}>
                    <div className={props.titleCursClass}>differently</div>
                </div>
            </div>
        </div>
    );
}

export default LandingHeader;
