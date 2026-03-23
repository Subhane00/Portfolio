// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router';

// const Contact = () => {
//      useEffect(() => {
//       document.body.style.backgroundColor = "#000";
//       document.body.style.color = "#fff";},[])


//    const navigate = useNavigate();
//   return (
//    <>
//     <div className="backhome">
//     <button onClick={()=> navigate('/')}>X</button>
//  </div>

//  <div className="header-text">
//           <h4 className='about-me-h4'>Feel free to contact me anytimes</h4>
//     <p className='about-me'>Get in Touch</p>
//     </div>

//   {/* <form action="">
//       <div className="contact-page">
//       <div className="message-me">
//         <p className='message-p'>Message Me</p>
//         <div className="nameandemail-forcontact">
//           <div className="name">
//             <input type="text" placeholder=' Name' />
//           </div>
//           <div className="name">
//             <input type="email" placeholder=' Email' />
//           </div>
//         </div>
//         <input className='subject' type="text" placeholder=' Subject' />
//         <input className='subject' type="text" placeholder=' Message' />
//         <div className="button-contact">
//           <button type="submit">Send Message</button>
//         </div>
//       </div>
//       <div className="contact-info">
//         <div className="info-text">
//           <p className='info-text-p1'>Contact Info</p>
//           <p className='info-text-p2'>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
//         </div>
//         <div className="contactinfo-iconandname">
//           <div className="icons">
//             <i class="fa-solid fa-user"></i>
//               <div className="name-div">
//               <p>Name</p>
//               <p className='gray-p'>Subhana Alibayova</p>
//             </div>
//             </div>
//              <div className="icons">
//             <i class="fa-solid fa-location-arrow"></i>
//               <div className="name-div">
//              <p>Location</p>
//               <p className='gray-p'>28 Xasmemmedov Street, Sabunchu District, Baku, Azerbaijan</p>
//             </div>
//             </div>
//               <div className="icons">
//             <i class="fa-solid fa-phone"></i>
//               <div className="name-div">
//             <p>Call Me</p>
//               <p className='gray-p'>+994 70 381 96 66</p>
//             </div>
//             </div>
//              <div className="icons">
//             <i class="fa-regular fa-envelope"></i>
//               <div className="name-div">
//             <p>Email Me</p>
//               <p className='gray-p'><a href="mailto:subhanaalibayova@gmail.com">subhanaalibayova@gmail.com</a></p>
//             </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   </form> */}




   
   
   
//    </>
//   )
// }

// export default Contact


import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
  }, [])

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    form.current,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then(() => {
    e.target.reset();
    Swal.fire({
      icon: 'success',
      title: 'Sent!',
      text: 'Your message has been sent successfully ✅',
      background: '#111',
      color: '#fff',
      confirmButtonColor: '#fff',
    });
  })
  .catch((error) => {
    console.error('EmailJS xətası:', error);
    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Something went wrong. Please try again ❌',
      background: '#111',
      color: '#fff',
      confirmButtonColor: '#000',
    });
  });
};

  return (
    <>
      <div className="backhome">
        <button onClick={() => navigate('/')}>X</button>
      </div>

      <div className="header-text">
        <h4 className='about-me-h4'>Feel free to contact me anytimes</h4>
        <p className='about-me'>Get in Touch</p>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <div className="contact-page">
          <div className="message-me">
            <p className='message-p'>Message Me</p>
            <div className="nameandemail-forcontact">
              <div className="name">
                <input type="text" name="name" placeholder=' Name' required />
              </div>
              <div className="name">
                <input type="email" name="email" placeholder=' Email' required />
              </div>
            </div>
            <input className='subject' type="text" name="title" placeholder=' Subject' required />
            <input className='subject' type="text" name="message" placeholder=' Message' required />
            <div className="button-contact">
              <button type="submit">Send Message</button>
            </div>
          </div>

          <div className="contact-info">
            <div className="info-text">
              <p className='info-text-p1'>Contact Info</p>
              <p className='info-text-p2'>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
            </div>
            <div className="contactinfo-iconandname">
              <div className="icons">
                <i className="fa-solid fa-user"></i>
                <div className="name-div">
                  <p>Name</p>
                  <p className='gray-p'>Subhana Alibayova</p>
                </div>
              </div>
              <div className="icons">
                <i className="fa-solid fa-location-arrow"></i>
                <div className="name-div">
                  <p>Location</p>
                  <p className='gray-p'>28 Xasmemmedov Street, Sabunchu District, Baku, Azerbaijan</p>
                </div>
              </div>
              <div className="icons">
                <i className="fa-solid fa-phone"></i>
                <div className="name-div">
                  <p>Call Me</p>
                  <p className='gray-p'>+994 70 381 96 66</p>
                </div>
              </div>
              <div className="icons">
                <i className="fa-regular fa-envelope"></i>
                <div className="name-div">
                  <p>Email Me</p>
                  <p className='gray-p'>
                    <a href="mailto:subhanaalibayova@gmail.com">subhanaalibayova@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Contact