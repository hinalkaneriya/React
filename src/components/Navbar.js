import React from 'react';
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="header">
        <div className="container m-auto m-auto">
          <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav ml-auto align-items-center">
                <li className="nav-item"><NavLink exact to="/" className="nav-link">Starwar</NavLink></li>
                <li className="nav-item"><NavLink to="/people" className="nav-link">People</NavLink></li>
                <li className="nav-item"><NavLink to="/planets" className="nav-link">Planets</NavLink></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
