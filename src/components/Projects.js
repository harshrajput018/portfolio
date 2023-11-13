import { useState, useEffect } from 'react';
import '../styles/Projects.css';
import arr from './array';
let image3 = require('../images/kanban-board.png')
const Projects = () => {


    let end = image3;
    const [description, setDescription] = useState(arr)

    // setInterval(() => {
    //     console.log(document.getElementsByClassName('project-section')[0].offsetWidth)
    //     let n = (document.getElementsByClassName('project-section')[0].offsetWidth / 350)



    // },500)

    const [width, setWidth] = useState(window.innerWidth)
    
    setInterval(() => {
        setWidth(window.innerWidth)
    }, (500));

    useEffect(()=>{
        
        console.log(width)

    },[window.innerWidth])






    return (
        <div id='projects-container' className='project-section'>
            <div className='heading-project' >Portfolio Picks</div>
            <p style={{ textAlign: 'center', padding: '0 0.55rem' }}>A glimpse into my world of creativity and innovation.</p>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                
                <div className="projects-container">
                    {description.map(elem => {
                        console.log(elem.link)
                        return (<a id={elem.link} href={elem.link} onClick={() => {
                        }} className="projects-item">

                            <img className="img1" src={elem.image} alt="" />
                            <div className='project-description'>
                                <div className='title'>{elem.title}</div>
                                <div className='content'>{elem.content}</div>
                            </div>



                        </a>)
                    })}

                </div>
            </div>

            

        </div>
    )
}

export default Projects