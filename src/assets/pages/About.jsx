import React, { useEffect } from 'react'
import photo_whoami from '../images/image2.png'
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
        <p className='about-p-two'>I’m a Frontend Developer passionate about creating modern, responsive, and user-friendly web experiences.
 </p>
        <p className='about-p-three'>I’m a Frontend Developer experienced in building modern and responsive web applications using React.js, Next.js, TypeScript, and JavaScript. I work with Tailwind CSS, Sass, Bootstrap, Redux, and Zustand to create clean and user-friendly interfaces. I also have experience with REST APIs and Git-based workflows, and I’m always focused on learning and improving my skills.
</p>
        <div className="nameandemail">
            <div className="name">
                <p>Name: Alibayova Subhana</p>
                <p>Birth Date: 27.06.2006</p>
            </div>
            <div className="email">
                <p>Email: <a href="mailto:subhanaalibayova@gmail.com">subhanaalibayova@gmail.com</a></p>
                <p>From: Baku, Azerbaijan</p>
            </div>
        </div>
        <div className="cv">
           <div className="dw-cv">
            <a href='./src/public/CV_SUBHANA_ALIBAYOVA.pdf' download className='download-cv'>Download CV </a>
            </div>     
             <div className="social-media-for-about">
            <a href="https://www.linkedin.com/in/subhana-alibayova-95a835295/" target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/Subhane00" target='_blank'><i className="fa-brands fa-github"></i></a>
        </div>       
        </div>
       
        </div>
       
    </div>
    
    
    
    </>
  )
}

export default About