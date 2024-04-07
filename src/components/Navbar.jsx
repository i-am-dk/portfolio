import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
      <nav className="flex-end">
        <div className="fixed top-0 left-0 p-3 flex">
          <NavLink
            to={"/"}
            className="w-8 h-8 align-center rounded-lg blue-gradient items-center justify-center flex font-bold shadow-md"
          >
            <p className="black-gradient_text">DK</p>
          </NavLink>
          <div>
      <nav className="w-100vh h-8 align-center items-center justify-center flex font-bold shadow-md ml-3">
        <NavLink
          to={"/skills"}
          className={({ isActive }) =>
            isActive ? "blue-gradient_text" : "white-gradient_text"
          }
        >
          Skills
        </NavLink>
      </nav>
    </div>
          <a
            href="https://in.linkedin.com/in/dhaneeshkumar-r"
            target="_blank"
            rel="noopener noreferrer"
            className="w-100vh h-8 align-center items-center justify-center flex font-bold shadow-md ml-3"
          >
            <p className="white-gradient_text">LinkedIn</p>
          </a>
        </div>
      </nav>
      
     
    </header>

  )
}

export default Navbar