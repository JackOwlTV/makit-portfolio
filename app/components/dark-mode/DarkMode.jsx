'use client'
import React from 'react'
import { MdEmojiObjects } from "react-icons/md";

function DarkMode(props) {
    return (
        <div className={props.dk}>
            <div className={props.rectClass} />
            <div className={props.icon}><MdEmojiObjects /></div>
        </div>)
}

export default DarkMode