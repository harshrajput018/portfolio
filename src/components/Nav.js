import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import '../styles/Nav.css';

const Nav = () => {
  // Initialize state for controlling the navbar collapse
  const [navbarCollapsed, setNavbarCollapsed] = useState(true);

  // Function to toggle the navbar state
  const toggleNavbar = () => {
    setNavbarCollapsed(!navbarCollapsed);
  };

  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${navbarCollapsed ? '' : 'navbar-open'}`}>
      <div className="container-fluid">
        <a style={{ fontSize: '3rem', fontFamily: 'cursive' }} className="navbar-brand" href="#">HR</a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div style={{ justifyContent: 'flex-end' }} className={`collapse navbar-collapse ${navbarCollapsed ? '' : 'show'}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home-container" onClick={toggleNavbar}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-container" onClick={toggleNavbar}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects-container" onClick={toggleNavbar}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills-container" onClick={toggleNavbar}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact-container" onClick={toggleNavbar}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
