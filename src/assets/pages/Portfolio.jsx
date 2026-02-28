import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Portfolio = () => {

    const navigate = useNavigate();

    // const projects =[
    //     {id:1,
    //      title: 'js', 
    //     category: 'js',
    //     img: './src/assets/images/react-project1.png'
    //     },
    //     {id:2, title: 'react', category: 'react',
    //         img: './src/assets/images/react-project1.png'
    //     }
    // ]


    // const [activeCategory, setActiveCategory] = useState('all')
    // const [activeImage, setActiveImage] = useState(null);

    // const filteredProjects =
    //  activeCategory === 'all' ? projects : projects.filter(item => item.category === activeCategory)
  return (
   <>
    <div className="backhome">
    <button onClick={()=> navigate('/')}>X</button>
 </div>

  <div className="header-text">
          <h4 className='about-me-h4'>Showcasing some of my best work</h4>
    <p className='about-me'>Portfolio</p>
    </div>
{/* 
     <button onClick={() => setActiveCategory("all")}>ALL</button>
        <button onClick={() => setActiveCategory("react")}>React</button>
        <button onClick={() => setActiveCategory("js")}>JS</button>

       <div className="cards">
  {filteredProjects.map(item => (
    <Card key={item.id} style={{ width: '18rem' }}>
      <Card.Img 
        variant="top" 
        src={item.img} 
        onClick={() => setActiveImage(item.img)}
        style={{ cursor: 'pointer' }}
      />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
      </Card.Body>
    </Card>
  ))}
</div> */}

{/* {activeImage && (
  <div className="image-modal" onClick={() => setActiveImage(null)}>
    <img src={activeImage} alt="" />
  </div>
)} */}

   
   </>
  )
}

export default Portfolio