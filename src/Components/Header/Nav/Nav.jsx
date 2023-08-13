import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCaretDown } from "react-icons/ai"

function Nav() {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <Link
                        to="/"
                        className='link'
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        to="/about"
                        className='link'
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link 
                    to="/users"
                    className='link'
                    >
                        Users
                    </Link>
                </li>
                <li>
                    <Link 
                    to="/create"
                    className='link'
                    >
                        Create blog
                    </Link>
                </li>

                <li>
                    <Link 
                    to="/blogs"
                    className='link'
                    >
                        Blogs
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default Nav