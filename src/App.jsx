

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'
import Portfolio from './assets/pages/Portfolio'
import Resume from './assets/pages/Resume'
import Home from './assets/pages/Home'


const App = () => {
  return (
    <>
   
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/resume' element={<Resume />} />



    </Routes>
    

    </BrowserRouter>

     </>
  )
}

export default App