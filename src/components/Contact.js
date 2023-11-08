import '../styles/contact.css'
const Contact = () => {
    return (
        <div id='contact-container' >

            <div style={{fontSize:'3rem',fontFamily:'Montserrat, sansSerif', textAlign:'center',color:'white'}}>GET IN TOUCH</div>

            <p style={{textAlign:'justify', padding:'0 0 2rem 0', lineHeight:'2rem',fontWeight:'600',fontSize:'0.85rem',color:'white'}}>Stay in the loop and reach out through my social media channels. Feel free to connect on Instagram, Twitter, and LinkedIn. I'm always open to connecting with like-minded individuals and exploring new opportunities. Let's engage and stay connected!</p>

            <div style={{display:'flex',maxHeight:'50vh',flexWrap:'wrap',background:'',gap:'2rem', justifyContent:'center', alignItems:"center"}}>
                <a href='' className='cont-img'>
                    <img  src={require('../images/linkedin.png')} alt="" />
                </a>
                <a href='' className='cont-img'>
                    <img  src={require('../images/github.png')} alt="" />
                </a>
                <a href='' className='cont-img'>
                    <img  src={require('../images/mail.webp')} alt="" />
                </a>
                <a href='' className='cont-img'>
                    <img  src={require('../images/phone.webp')} alt="" />
                </a>
                <a href='' className='cont-img'>
                    <img  src={require('../images/instagram.avif')} alt="" />
                </a>
            </div>



        </div>
    )
}

export default Contact