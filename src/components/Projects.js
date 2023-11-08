import '../styles/Projects.css'
import { useNavigate } from "react-router-dom";
const image1 = require('../images/dietx.png')
const image2 = require('../images/Tickle.png')
const Projects = () => {
    const navigate = useNavigate()
    return (
        <div id='projects-container' className='project-section'>
            <div className='heading-project' >Portfolio Picks</div>
            <p style={{textAlign:'center', padding:'0 0.55rem'}}>A glimpse into my world of creativity and innovation.</p>
            <div className="projects-container">
                
                <a href='https://super-tulumba-c8bc97.netlify.app/' onClick={() => {
                }} className="projects-item">
                    
                        <img className="img1" src={image2} alt="" />
                   

                </a>
                <a href='https://diet-x.vercel.app/' className="projects-item">
                
                        <img className="img1" src={image1} alt="" />
                    
                   
                </a>
                
            </div>

        </div>
    )
}

export default Projects