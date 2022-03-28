import React from "react";
import {Link} from "wouter";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-light" >
          Widget-app
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/wikipedia"
                className="nav-link active text-light"
                aria-current="page"
                
              >
                Wikipedia
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/todos" className="nav-link text-light" >
              TODOS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/lang" className="nav-link text-light" >
              Translator
              </Link>
            </li>
            <li className="nav-item dropdown">
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
