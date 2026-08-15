import React from 'react'
import { useNavigate } from 'react-router';
import portfolio1 from '../images/portolio_1.png'
import portfolio2 from '../images/portfolio_2.png'
import portfolio3 from '../images/portfolio_3.png'
import portfolio4 from '../images/portfolio_4.png'
import portfolio5 from '../images/portfolio_5.png'
import portfolio6 from '../images/portfolio_6.png'
import portfolio7 from '../images/portfolio_7.png'
import portfolio8 from '../images/portfolio_8.png'
import portfolio9 from '../images/portfolio_9.png'

const Portfolio = () => {
    const navigate = useNavigate();

   const projects = [
        {
            image: portfolio9,
            link: "https://github.com/Subhane00/petfun",
            description: "PetFun is a full-featured pet care, grooming, reservation, and product sales platform. The system offers a public-facing frontend for users, an admin/veterinarian management dashboard, and a social-media-style blog section — where every user can publish their own blog posts and leave reviews on others' posts. The project is built on React 19, TypeScript, and a .NET/ASP.NET Core backend, and includes features such as multilingual support (Azerbaijani/English), dark/light theme, real-time notifications, and role-based authorization (User/Admin/Veterinarian)."
        },
        {
            image: portfolio8,
            link: "https://matrixacademy.edu.az/",
            description: "Matrix Academy — a React project I contributed to as part of the team during my internship at Webluna Software."
        },
        {
            image: portfolio7,
            link: "https://girlscode.az/",
            description: "GirlsCode.az — a React project I contributed to as part of the team during my internship at Webluna Software."
        },
        {
            image: portfolio6,
            link: "https://brilliant.az/az",
            description: "Brilliant.az — a Next.js project I contributed to as part of the team during my internship at Webluna Software."
        },
        {
            image: portfolio2,
            link: "https://product-details-fawn.vercel.app/",
            description: "A full-featured React app styled with Bootstrap, featuring Home, Blog, Shopping and Contact pages — complete with multi-language support and dark/light mode"
        },
        {
            image: portfolio1,
            link: "https://github-finder-pi-lilac.vercel.app/",
            description: "A sleek React app that taps into the GitHub Users API, letting you search and explore developer profiles in real time."
        },
        
        {
            image: portfolio4,
            link: "https://subhane00.github.io/ToDoApp/",
            description: "A classic To-Do app built with plain HTML, CSS and JavaScript — add, complete, and manage your daily tasks."
        },
        {
            image: portfolio3,
            link: "https://login-page-bice-iota.vercel.app/",
            description: "A simple login/register flow where user data is stored in localStorage — entering a registered email on the login page redirects you straight to the home page."
        },
         {
            image: portfolio5,
            link: "https://subhane00.github.io/Responsive-web/",
            description: "A responsive website built with plain HTML, CSS and JavaScript, using Bootstrap classes for the entire layout and structure."
        },
    ];

    return (
        <>
            <div className="backhome">
                <button onClick={() => navigate('/')}>X</button>
            </div>

            <div className="header-text">
                <h4 className='about-me-h4'>Showcasing some of my best work</h4>
                <p className='about-me'>Portfolio</p>
            </div>

            <div className="container portfolio_box mt-5">
                <div className="row g-5">
                    {projects.map((project, i) => (
                        <div className="col-4" key={i}>
                            <div className="project-item">
                                <div className="box-wrapper">
                                    <img src={project.image} alt="" />
                                    <div className="box-overlay">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">View More</a>
                                    </div>
                                </div>
                                <p style={{textAlign:'center'}} className="project-desc">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Portfolio