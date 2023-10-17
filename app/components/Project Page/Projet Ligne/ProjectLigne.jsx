'use client'
import React from 'react'
import Link from 'next/link'
import './ProjectLigne.css'

const ProjectLigne = (props) => {
    return (
        <div className='lg-project'>
            <Link href="#">
                <span>{props.name}</span>
                <span>{props.category}</span>
            </Link>
        </div>
    )
}

export default ProjectLigne