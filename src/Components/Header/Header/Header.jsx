import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import "../../../assets/css/Header.css"

function Header() {
  return (
    <div className='header'>
        <Logo/>
        <Nav/>
    </div>
  )
}

export default Header