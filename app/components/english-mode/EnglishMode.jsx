import React from 'react'
import Link from 'next/link'
import "./EnglishMode.css"

import { kelson_regular } from '@/app/fonts/kelson/kelson'


function EnglishMode(props) {
    return (
        <div className={props.langues}>
            <Link href={"#"}>
                <div className={props.rect} />
                <div className={kelson_regular.className}>
                <div className={props.en} >en</div>
                <div className={props.fr}>fr</div>
                </div>
            </Link>
        </div>
    )
}

export default EnglishMode