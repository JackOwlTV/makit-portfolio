'use strict'
import React from 'react'
import Link from 'next/link'

import './menu.css'

const Menu = () => {
    return (
        <div className="menu">
            <Link href={"#"}>
                <div className="rectangle4" />
                <div className="bentomenu">
                    <div className="Vector" style={{ left: 0, top: 0 }}></div>
                    <div className="Vector" style={{ left: 12.75, top: 0 }}></div>
                    <div className="Vector" style={{ left: 25.50, top: 0 }}></div>
                    <div className="Vector" style={{ left: 0, top: 25.50 }}></div>
                    <div className="Vector" style={{ left: 12.75, top: 25.50 }}></div>
                    <div className="Vector" style={{ left: 25.50, top: 25.50 }}></div>
                    <div className="Vector" style={{ left: 0, top: 12.75 }}></div>
                    <div className="Vector" style={{ left: 12.75, top: 12.75 }}></div>
                    <div className="Vector" style={{ left: 25.50, top: 12.75 }}></div>
                </div>
                <div className="bentomenhover">
                    <div className="Vector" style={{ left: 0, top: 0, background: 'white' }}></div>
                    <div className="Vector" style={{ width: 8.50, height: 34, left: 12.78, top: 0, background: '#AD00FF' }}></div>
                    <div className="Vector" style={{ left: 25.50, top: 0, background: 'white' }}></div>
                    <div className="Vector" style={{ left: 0, top: 25.50, background: 'white' }}></div>
                    <div className="Vector" style={{ left: 25.50, top: 25.50, background: 'white' }}></div>
                    <div className="Vector" style={{ width: 34, height: 8.50, left: 0, top: 12.75, background: '#AD00FF' }}></div>
                </div>
            </Link>
        </div>)
}

export default Menu