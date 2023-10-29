'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Projects } from '../../../data/Projects';
import './ProjectLigne.css'

const ProjectLigne = (props) => {



    return (
        <Link href="#">
            <span>{props.name}</span>
            <span>{props.category}</span>

        </Link>
    )
}

export default ProjectLigne