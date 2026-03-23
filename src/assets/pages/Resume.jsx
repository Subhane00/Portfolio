import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const Resume = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
    }, [])

    const skills = [
        { name: "HTML5", level: "pro" },
        { name: "CSS3", level: "pro" },
        { name: "JavaScript", level: "pro" },
        { name: "React", level: "mid" },
        { name: "Redux", level: "mid" },
        { name: "Bootstrap", level: "mid" },
        { name: "REST APIs", level: "mid" },
        { name: "Responsive Design", level: "mid" },
        { name: "TypeScript", level: "beginner" },
    ];

    const experience = [
    {
        title: "Frontend Development",
        org: "Peerstack Academy · Subject Exchange Program",
        date: "Feb 2026 – May 2026 (Expected)",
        desc: "Practical projects focused on React and modern frontend technologies.",
        tags: ["React", "Redux", "REST API"],
        type: "work"
    },
    {
        title: "Frontend Development — GirlsCode",
        org: "Matrix Academy · Scholarship Program",
        date: "Sep 2025 – May 2026 (Expected)",
        desc: "Learned HTML, CSS, JavaScript and React through a scholarship program, building real-world projects.",
        tags: ["HTML5", "CSS3", "JavaScript", "React"],
        type: "work"
    },
    {
        title: "Information Security — Bachelor's Degree",
        org: "Azerbaijan Technical University",
        date: "Sep 2023 – 2027 (Expected)",
        desc: "Studying Information Security with a GPA of 92.43/100. Core topics include programming fundamentals, networking and system security.",
        tags: ["Programming", "Networking", "Cybersecurity"],
        type: "edu"
    },
];

    return (
        <>
            <div className="backhome">
                <button onClick={() => navigate('/')}>X</button>
            </div>

            <div className="header-text">
                <h4 className='about-me-h4'>Check out my Resume</h4>
                <p className='about-me'>Resume</p>
            </div>

           
            <div className="skills-container">
                <p className="section-label">Technical Skills</p>
                <h2>My Skills</h2>

                <div className="skills-grid">
                    {skills.map((skill, i) => (
                        <span className="skill-tag" key={i}>
                            <span className={`skill-dot ${skill.level}`}></span>
                            {skill.name}
                        </span>
                    ))}
                </div>

                <div className="skills-legend">
                    <span className="legend-item">
                        <span className="skill-dot pro"></span> Proficient
                    </span>
                    <span className="legend-item">
                        <span className="skill-dot mid"></span>  Intermediate
                    </span>
                    <span className="legend-item">
                        <span className="skill-dot beginner"></span> Beginner
                    </span>
                </div>
            </div>

        
            <div className="resume-timeline-section">
                <p className="section-label">Education & Experience</p>
                <h2>Experience</h2>

                <div className="timeline">
                    {experience.map((item, i) => (
                        <div className="timeline-item" key={i}>
                            <div className={`timeline-dot ${item.type}`}></div>
                            <div className="timeline-card">
                                <div className="timeline-header">
                                    <span className="timeline-title">{item.title}</span>
                                    <span className="timeline-date">{item.date}</span>
                                </div>
                                <div className="timeline-org">{item.org}</div>
                                <p className="timeline-desc">{item.desc}</p>
                                <div className="timeline-tags">
                                    {item.tags.map((tag, j) => (
                                        <span className="tag" key={j}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Resume