import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCaretDown } from "react-icons/ai"
import { AppContext } from '../../../context/AppContext'

function Nav() {

    const { handleLogout } = useContext(AppContext)

    return (
        <div className='navbar'>
            <ul>
                <li>
                    <Link
                        to="/blogs"
                        className='link active'
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
                        to="/shopping"
                        className='link'
                    >
                        Shopping online
                    </Link>
                </li>


                <li>
                    <Link
                        to="/"
                        className='link'
                        onClick={handleLogout}
                    >
                        Logout
                    </Link>
                </li>

            </ul>
        </div>
    )
}

export default Nav