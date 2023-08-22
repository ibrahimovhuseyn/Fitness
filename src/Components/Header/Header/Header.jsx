import React from 'react'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import "../../../assets/css/Header.css"
import Bag from '../Nav/Bag'

function Header() {
  return (
    <div className='header'>
        <Logo/>
        <Nav/>
        <Bag/>
    </div>
  )
}

export default Header