import React, { useEffect } from 'react'
import photo_whoami from '../images/image.png'
import { useNavigate } from 'react-router'

const About = () => {
       useEffect(() => {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";},[])


    const navigate = useNavigate();
  return (
    <>
 <div className="backhome">
    <button onClick={()=> navigate('/')}>X</button>
 </div>

    <div className="header-text">
          <h4 className='about-me-h4'>Get to know me</h4>
    <p className='about-me'>About Me</p>
    </div>
    

    <div className="who-am-i">
       
        <div className="image">
            <img src={photo_whoami} alt="" />
        </div>
        <div className="whoami-text">
            
        <p className='about-p-one'>Who am i?</p>
        <p className='about-p-two'>I'm Subhana Alibayova, a Front-end Developer and React Enthusiast. </p>
        <p className='about-p-three'>I am a freelancer based in the Azerbaijan, and I have recently started working in UX/UI design and website development. I am eager to create user-friendly and meaningful products that follow modern design trends. I am motivated and open to learning, turning ideas and visions into valuable products. Paying attention to product evolution helps me prioritize tasks and iterate quickly.</p>
        <div className="nameandemail">
            <div className="name">
                <p>Name: Alibayova Subhana</p>
                <p>Age: 20</p>
            </div>
            <div className="email">
                <p>Email: <a href="mailto:subhanaalibayova@gmail.com">subhanaalibayova@gmail.com</a></p>
                <p>From: Baku, Azerbaijan</p>
            </div>
        </div>
        <div className="cv">
           <div className="dw-cv">
            <a href='./src/public/Cv_Subhana.pdf' download className='download-cv'>Download CV </a>
            </div>     
             <div className="social-media-for-about">
            <a href="https://www.instagram.com/elbyvaa_/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/subhane-elibeyova-95a835295/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Subhane00" target='_blank'><i class="fa-brands fa-github"></i></a>
        </div>       
        </div>
       
        </div>
       
    </div>
    
    
    
    </>
  )
}

export default About