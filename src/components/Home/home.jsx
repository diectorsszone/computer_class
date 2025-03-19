import React from 'react';
import '../Navbar/navBar.css';
import { Courses } from './courses';
import GoogleFormPopup from './GoogleFormPopup';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

>>>>>>> 58c054c (sszone)

export const MainContent = () => {

  return (
   <>
     <section id="hero" className="hero">
        <h1>SCIENCE LAB & RESEARCH CENTER   </h1>
<<<<<<< HEAD
        <h2>A new batch is starting on 15-01-2025 </h2 >
=======
        <h2>A new batch is starting on 03-04-2025 </h2 >
>>>>>>> 58c054c (sszone)
        
        <br />
        <h1 className='bakbak-one-regular '>ADMISSION के लिए ,<span><GoogleFormPopup/></span> </h1>        
    </section>
<<<<<<< HEAD
=======


>>>>>>> 58c054c (sszone)
   </>
  );
};

export const FuterComponants = () => {

  return (
   <>
    <Courses />
<<<<<<< HEAD
    
   </>
  );
=======

    <div className="see-more-container">
        <Link to="/courses">See more <GoArrowRight className='icn' /></Link>
      </div>
    
   </>
  );
  
>>>>>>> 58c054c (sszone)
};
