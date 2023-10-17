import React from 'react'
import Link from 'next/link'
import "./EnglishMode.css"

function EnglishMode() {
    return (
        <div className="englishmode">
            <Link href={"#"}>
                <div className="rectangle5" />
                <div className="en" >en</div>
                <div className="fr" >fr</div>
            </Link>
        </div>
    )
}

export default EnglishMode