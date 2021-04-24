import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav id="nav" className="navbar navbar-expand-lg navbar-dark sticky-top">
      <Link className="navbar-brand" href="#">
        AlgoApp
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="stringAlgoDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Number Algos
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" href="/fibonacci">
                Fibonacci
              </Link>
              <Link className="dropdown-item" href="/palindrome">
                Fizzbuzz
              </Link>
              <Link className="dropdown-item" href="/int-reverse">
                Integer Reversal
              </Link>
            </div>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="stringAlgoDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              String Algos
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" href="/reverse">
                String Reversal
              </Link>
              <Link className="dropdown-item" href="/palindrome">
                Palindrome
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
