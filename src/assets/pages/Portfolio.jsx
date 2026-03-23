import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import portolio1 from '../images/portolio_1.png'
import portfolio2 from '../images/portfolio_2.png'
import portfolio3 from '../images/portfolio_3.png'
import portfolio4 from '../images/portfolio_4.png'
import portfolio5 from '../images/portfolio_5.png'

const Portfolio = () => {

    const navigate = useNavigate();

  return (
   <>
    <div className="backhome">
    <button onClick={()=> navigate('/')}>X</button>
 </div>

  <div className="header-text">
          <h4 className='about-me-h4'>Showcasing some of my best work</h4>
    <p className='about-me'>Portfolio</p>
    </div>

    <div className="container portfolio_box mt-5 ">
      <div className="row g-5">
       <div className="col-4">
        <div className="box-wrapper" style={{ overflow: 'hidden' }} >
          <img src={portolio1}  alt="" />
<div className="box-overlay">
          <a href="https://github-finder-pi-lilac.vercel.app/" target="_blank" rel="noopener noreferrer">View More</a>
  </div>      
    </div>
       </div>
        <div className="col-4">
        <div className="box-wrapper">
          <img src={portfolio2}  alt="" />
<div className="box-overlay">
          <a href="https://product-details-fawn.vercel.app/" target="_blank" rel="noopener noreferrer">View More</a>
  </div>        </div>
       </div>
        <div className="col-4">
        <div className="box-wrapper">
          <img src={portfolio3}  alt="" />
<div className="box-overlay">
          <a href="https://login-page-bice-iota.vercel.app/" target="_blank" rel="noopener noreferrer">View More</a>

</div>
          </div>
       </div>
        <div className="col-4">
        <div className="box-wrapper">
          <img src={portfolio4}  alt="" />
<div className="box-overlay">
          <a href="https://subhane00.github.io/ToDoApp/" target="_blank" rel="noopener noreferrer">View More</a>

</div>

          
        </div>
       </div>
        <div className="col-4">
        <div className="box-wrapper">
          <img src={portfolio5}  alt="" />
<div className="box-overlay">
          <a href="https://subhane00.github.io/Responsive-web/" target="_blank" rel="noopener noreferrer">View More</a>

</div>

        </div>
       </div>
      </div>
    </div>

   
   </>
  )
}

export default Portfolio