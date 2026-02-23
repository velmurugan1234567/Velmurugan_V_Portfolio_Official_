import "./Footer.css";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowUp, FaInstagram} from "react-icons/fa";


function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-brand">
          <h2>VELMURUGAN V</h2>
          <p> </p>
        </div>

        {/* Navigation Links (Home Sections) */}
        <div className="footer-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Project</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Connect</h4>
          <a href="https://github.com/velmurugan1234567" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/velmurugan-v-4622ba285" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
            <a href="https://www.instagram.com/velmuruganv_official?igsh=MXZkaXNpNmd3NzV2dg==" target="_blank" rel="noreferrer">
                        <FaInstagram />
                      </a>
        </div>
      </div>
      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {year}Velmurugan V | All Rights Reserved</p>

        {/* Scroll to Top */}
        <a href="#home" className="scroll-top">
  <FaArrowUp />
</a>
      </div>

    </footer>
  );
}

export default Footer;