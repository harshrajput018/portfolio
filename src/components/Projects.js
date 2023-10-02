import '../styles/Projects.css'
import { useNavigate } from "react-router-dom";
const image1 = require('../images/dietx.png')
const image2 = require('../images/Tickle.png')
const Projects = () => {
    const navigate = useNavigate()
    return (
        <div id='projects-container' className='project-section'>
            <h1 style={{ fontSize: '4rem', fontFamily: 'cursive', padding: '0', paddingTop: '3rem', margin: '0' }}>Portfolio Picks</h1>
            <p >A glimpse into my world of creativity and innovation.</p>
            <div className="projects-container">
                <a href='https://diet-x.vercel.app/' className="projects-item">
                <div className="img-container">
                        <img className="img1" src={image1} alt="" />
                    </div>
                   
                </a>
                <a href='https://super-tulumba-c8bc97.netlify.app/' onClick={() => {
                }} className="projects-item">
                    <div className="img-container">
                        <img className="img1" src={image2} alt="" />
                    </div>

                </a>
            </div>

        </div>
    )
}

export default Projects