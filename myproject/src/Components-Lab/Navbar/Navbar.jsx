import React from 'react'
import './Navbar.css'
import zelor from '../../assets/zelor.png'

const Navbar = () => {
  return (
    <div className="container">
      {/* Logo */}
      <div className="logo">
        <img src={zelor} alt="Zelor Logo" />
      </div>

      {/* Main Navigation */}
      <nav className="nav-menu">
        <ul>
          <li>SHOP</li>
          <li>NEW IN</li>
          <li>ACCESSORIES</li>
          <li>ARCHIVES</li>
          <li>LAST CHANCE</li>
          <li>BEST SELLER</li>
          <li>KIDS</li>
          <li>MEN</li>
          <li>WOMEN</li>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>HELP</li>
        </ul>
      </nav>

      {/* Right Side Actions */}
      <div className="right">
        <ul>
          <li>NEWSLETTER</li>
          <li>LOG IN</li>
          <li>REGION</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar