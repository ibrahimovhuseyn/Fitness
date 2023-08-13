import React from 'react'
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div className='logo'>
            <div className="img-wrapper">
                <h1>
                    <Link className='link' to="/">
                        MEGAWIDTH
                    </Link>
                </h1>
            </div>
        </div>
    )
}

export default Logo