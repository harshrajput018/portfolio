import '../styles/Home.css'
const logo = require('../images/logo.png')
const Home = () => {

    return (
        <div id='home-container' className='home-container'>
            <div className="image" >
                <img style={{
                    clip: 'rect(-5px, auto, auto, auto)', // Crop 5 pixels from the top
                    // Ensure the image takes up the container's width
                }} src="https://miro.medium.com/v2/resize:fit:1360/1*IRGHmiGsa16stedQvIaZfw.gif" alt="" />
            </div>

            <div className="name">
                Harsh Rajput
            </div>
            <div className="designation">
                Full Stack Web Developer
            </div>
        </div>
    )
}
export default Home;