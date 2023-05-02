import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
    <a className="navbar-brand" href="#">
      Bank of Razan
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to='/Main' className="nav-link text-white">Main</Link>
        </li>
        <li className="nav-item">
          <Link to='/' className="nav-link text-white">Home</Link>
        </li>
      </ul>
    </div>
   
  </nav>
  )
}
