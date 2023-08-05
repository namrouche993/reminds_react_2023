// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Propshome</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/redux">App2 Redux</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/props3">App3 Props -byme-</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/redux4">App4 redux istd props-</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/props5">App5 test-</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/app6">App6-</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/app7">App7-</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/app8">App8-</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/app9">App9-</Link>
            </li>

            
            <li className="nav-item">
              <Link className="nav-link" to="/app10">App10</Link>
            </li>



          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
