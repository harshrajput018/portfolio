import { Link } from "react-router-dom";
import '../styles/Nav.css'

const Nav = () => {



    return (
        <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', padding: '1rem 0', background: 'white', fontFamily: 'Roboto, monospace', color: 'white', fontWeight: '900', gap: '1.5rem', fontWeight: '200', backgroundColor: 'white', fontSize: '0.95rem', height: '2rem', }}>

            <div style={{ textAlign: 'start', flex: '1', paddingLeft: '7rem' }}>
                <img className="logo" src={require('../images/H.jpeg')} alt="" />
            </div>


            <a className="nav-item" href="#home-container">Home</a>
            <a href="#about-container" className="nav-item">About</a>
            <a href="#projects-container" className="nav-item">Projects</a>
            <a href="#skills-container" className="nav-item">Skills</a>
            <a href="#contact-container" className="nav-item">Contact</a>

            <div style={{ borderLeft: 'solid 2px #c0c5cf', paddingLeft: '1rem', height: '2rem', display: 'flex', alignItems: 'center' }}>
                <a
                    href={require("../docx/Harsh Rajput - Resume.pdf")}
                    download={"Harsh_CV"}
                    style={{
                        textDecoration: "none",
                        color: "white", // Change color to white for visibility
                        background: "#34c759", // Use the same background color as the navbar
                        padding: "0.5rem 1rem",
                        marginRight: '4rem',

                        borderRadius: "4px", // Add rounded corners
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
                        transition: "background 0.3s ease, transform 0.3s ease", // Add smooth hover effect
                    }}
                    onMouseOver={(e) => {
                        e.target.style.background = "#4a2682"; // Change background color on hover
                        e.target.style.transform = "scale(1.05)"; // Add slight scale effect on hover
                    }}
                    onMouseOut={(e) => {
                        e.target.style.background = "#34c759"; // Restore background color
                        e.target.style.transform = "scale(1)"; // Remove scale effect
                    }}
                >
                    Get My Resume
                </a>
            </div>


        </div>
    )
}

export default Nav;