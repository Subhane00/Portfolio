import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Resume = () => {
    const navigate = useNavigate();

     useEffect(() => {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";},[])

    const skillsData = [
  { name: "HTML/CSS", level: 95 },
  { name: "React JS", level: 60 },
  { name: "Web Design", level: 80 },
  { name: "JavaScript", level: 90 }
];

  return (
    <>
   
    <div className="backhome">
    <button onClick={()=> navigate('/')}>X</button>
 </div>

    <div className="header-text">
          <h4 className='about-me-h4'>Check out my Resume</h4>
    <p className='about-me'>Resume</p>
    </div>

    <div className="resume">
        <div className="education">
            <p className='header-education'>Education</p>
            <p className='education-text'>Azerbaijan Technical University</p>
            <p className='education-text'>Bachelor’s Degree in Information Security / 2023-2027 <span>(Expected) </span> </p>
            <p className='education-text'>GPA: 92.43/100</p>
            <p className='education-text'>During my university studies, I delivered a presentation at an event focused on the role of women in IT, highlighting their contributions and opportunities in the tech industry. Additionally, I developed a basic website, gaining hands-on experience in web development and practical application of my skills.</p>
        </div>
        <div className="education">
            <p className='header-education'>Experience</p>
            <p className='education-text'>Matrix Academy</p>
            <p className='education-text'>Girls Code Scholarship Program / 2025 September - 2026 May <span>(Expected)</span></p>
            <p className='education-text'>Throughout the course, I completed numerous small projects using HTML, CSS, and JavaScript, which helped me strengthen my foundational web development skills. Currently, I am learning the React library and developing projects using it to further enhance my practical experience in building modern, interactive web applications.</p>



        </div>
    </div>


      <div className="skills-container">
      <h2>My Skills</h2>
      {skillsData.map((skill, index) => (
        <div className="skill" key={index}>
          <span className="skill-name">{skill.name}</span>
          <span className="skill-percent">{skill.level}%</span>
          <div className="skill-bar">
            <div
              className="skill-fill"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
     </>
  )
}

export default Resume