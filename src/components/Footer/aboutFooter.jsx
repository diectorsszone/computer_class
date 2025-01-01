import { Link } from 'react-router-dom';
import "./aboutFooter.css";
import Image from "../Public/logo.png";

export function AboutFooter () {
  return (
    <footer className="footer">
      <div className="container">
        
        <div className="logoSection">
          <div className="logo">
            <img 
              src={Image}
              alt="STP Computer Education Logo"
              width={40}
              height={40}
            />
            <h2>Sakatpur Smart Zone</h2>
          </div>

          <div className="social">
                <p>FOLLOW US :</p>
                <div className="socialIcons">
                    <Link to={""}><i className="fa-brands fa-facebook"></i></Link>
                    <Link to={""}><i className="fa-brands fa-youtube"></i></Link>
                    <Link to={""}><i className="fa-brands fa-instagram"></i></Link>
                    <Link to={""}><i className="fa-brands fa-whatsapp"></i></Link>
                </div>
           </div>
        </div>


        <div className="linksSection">
          <h3>USEFUL LINKS</h3>
          <ul>
            <li><Link to={"/"}>Home Page</Link></li>
            <li><Link to={"/courses"}>All Courses</Link></li>
            <li><Link to={"/notes"}>Pdf Notes</Link></li>
            <li><Link to={"/web-development"}>Web Development</Link></li>
          </ul>
        </div>


        <div className="linksSection">
          <h3>IMPORTANT LINKS</h3>
          <ul>
            <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/team"}>Terms & Conditions</Link></li>
            <li><Link to={"/certification"}>Certification</Link></li>
          </ul>
        </div>
      </div>
      

      <div className="copyright">
        <p>© 2024 Sakatpur Smart Zone. All rights reserved</p>
      </div>
    </footer>
  )
}

