import '../styles/Skills.css'
import React, { useEffect, useState } from 'react';
const Skills = () => {



    const text = "Unlocking Potential with a Versatile and Dynamic Skill Set";
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= text.length) {
                setDisplayText(text.slice(0, currentIndex));
                currentIndex++;
            }
            else clearInterval(interval)

        }, 100);
        setInterval(() => {
            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex <= text.length) {
                    setDisplayText(text.slice(0, currentIndex));
                    currentIndex++;
                }

            }, 100); // Adjust the typing speed by changing the interval (e.g., 100ms for faster typing)

        }, 10000)

    }, [text]);




    return (
        <div id='skills-container' style={{ minHeight: '70vh', padding: '6rem 0', borderBottom: 'solid 1px #e3dae0' }}>



            <p className="typewriter-text">
                {displayText}
            </p>

            <div style={{display:'flex', padding:'3rem'}}>
            <div className='gif' style={{ display: 'flex', justifyContent: 'center', margin: '3rem 0' }}>
                    <img style={{ borderRadius: '2rem', height:'40vh' }} src="https://www.wingstechsolutions.com/wp-content/uploads/2022/03/full-stack-development.gif" alt="" />
                </div>

            <div className='allskills' style={{ margin: 'auto', display: 'flex', gap: "3rem", flexWrap: 'wrap', padding: '', justifyContent: 'center'}}>
                
                <img  src={require('../images/html.png')} alt="" /><img  src={require('../images/css.png')} alt="" /><img  src={require('../images/javascript.png')} alt="" /><img  src={require('../images/mongodb.webp')} alt="" /><img  src={require('../images/express.png')} alt="" /><img  src={require('../images/react.png')} alt="" /><img  src={require('../images/node.png')} alt="" />
            </div>
            </div>

            


        </div>



    )
}

export default Skills;