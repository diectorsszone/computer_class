import React from 'react';
import '../Navbar/navBar.css';
import { Courses } from './courses';
import GoogleFormPopup from './GoogleFormPopup';

export const MainContent = () => {

  return (
   <>
     <section id="hero" className="hero">
        <h1>SCIENCE LAB & RESEARCH CENTER   </h1>
        <h2>A new batch is starting on 15-01-2025 </h2 >
        
        <br />
        <h1 className='bakbak-one-regular '>ADMISSION के लिए ,<span><GoogleFormPopup/></span> </h1>        
    </section>
   </>
  );
};

export const FuterComponants = () => {

  return (
   <>
    <Courses />
    
   </>
  );
};
