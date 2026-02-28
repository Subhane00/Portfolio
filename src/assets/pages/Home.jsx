import React from 'react'
// import heroImage from './assets/images/subus-anaekran.png'
import heroImage from '../images/subus-anaekran.png'
import { NavLink } from 'react-router'
// import Writter from './assets/pages/Writter'

const Home = () => {
    
  
  return (
    <>
    <header>
        <nav>
            <div className="title">Hi!</div>
            <div className="contact">
                <ul>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/resume'>Resume</NavLink></li>
                    <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>

        </nav>
    </header>

    <div className="hero-wrapper">
       <img src={heroImage} alt="" />
        <div className="kolge"></div>
        <p>Subhana Alibayova</p>
        <p className="iam">I'm a Front-end Developer</p>
    </div>
    
 </>
    
  )
}


export default Home