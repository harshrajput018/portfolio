import { Link } from "react-router-dom";
import '../styles/Nav.css'

const Nav = () => {



    return (
        <nav   class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid">
          <a style={{fontSize:'3rem', fontFamily:'cursive'}} class="navbar-brand" href="#">HR</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div style={{justifyContent:'flex-end'}} class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#home-container">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about-container">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#projects-container">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skills-container" >Skills</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact-container" >Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Nav;