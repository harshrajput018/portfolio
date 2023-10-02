const Contact = () => {
    return (
        <div id='contact-container' style={{  padding: '4rem 15%', background:'black',color:'white'}}>

            <div style={{fontSize:'3rem',fontFamily:'Montserrat, sansSerif', textAlign:'center'}}>GET IN TOUCH</div>

            <p style={{textAlign:'center', padding:'0 0 2rem 0', lineHeight:'2rem', fontFamily:'Roboto'}}>Stay in the loop and reach out through my social media channels. Feel free to connect on Instagram, Twitter, and LinkedIn. I'm always open to connecting with like-minded individuals and exploring new opportunities. Let's engage and stay connected!</p>

            <div style={{display:'flex',maxHeight:'50vh',flexWrap:'wrap',background:'',gap:'2rem', justifyContent:'center', alignItems:"center", boxShadow:"0 1px grey"}}>
                <a href='' style={{  height: '16vh',  }}>
                    <img style={{height:'50px'}} src={require('../images/linkedin.png')} alt="" />
                </a>
                <a href='' style={{  height: '16vh',  }}>
                    <img style={{height:'50px'}} src={require('../images/github.png')} alt="" />
                </a>
                <a href='' style={{  height: '16vh',  }}>
                    <img style={{height:'50px'}} src={require('../images/mail.webp')} alt="" />
                </a>
                <a href='' style={{  height: '16vh',  }}>
                    <img style={{height:'50px'}} src={require('../images/phone.webp')} alt="" />
                </a>
                <a href='' style={{  height: '16vh',  }}>
                    <img style={{height:'50px'}} src={require('../images/instagram.avif')} alt="" />
                </a>
            </div>



        </div>
    )
}

export default Contact