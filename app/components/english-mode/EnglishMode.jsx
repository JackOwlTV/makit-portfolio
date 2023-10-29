import React from 'react'
import Link from 'next/link'
import "./EnglishMode.css"
import PreviousMap from 'postcss/lib/previous-map'

function EnglishMode(props) {
    return (
        <div className="englishmode">
            <Link href={"#"}>
                <div className={props.rect} />
                <div className={props.en} >en</div>
                <div className={props.fr}>fr</div>
            </Link>
        </div>
    )
}

export default EnglishMode