import { useEffect, useRef } from "react";
import "./Home.css";
import profile from "./my_image.jpeg";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let growth = 0;

  function drawTree(x, y, length, angle, branchWidth) {
    ctx.beginPath();
    ctx.save();

    ctx.strokeStyle = "rgba(0,255,204,0.6)";
    ctx.lineWidth = branchWidth;
    ctx.translate(x, y);
    ctx.rotate(angle * Math.PI / 180);

    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.stroke();

    // If branch is small → draw leaves
    if (length < 25) {
      drawLeaves(x, y - length);
      ctx.restore();
      return;
    }

    // Branching
    drawTree(0, -length, length * 0.75, angle + 20, branchWidth * 0.7);
    drawTree(0, -length, length * 0.75, angle - 20, branchWidth * 0.7);

    ctx.restore();
  }

  function drawLeaves(x, y) {
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.fillStyle = "rgba(74,108,247,0.5)";
      const offsetX = Math.random() * 20 - 10;
      const offsetY = Math.random() * 20 - 10;
      ctx.arc(x + offsetX, y + offsetY, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centerX = canvas.width / 2;
    const baseY = canvas.height;

    // Tree grows gradually
    drawTree(centerX, baseY, growth, 0, 10);

    if (growth < 120) {
      growth += 1;
      requestAnimationFrame(animate);
    }
  }
  animate();
}, []);

useEffect(() => {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach((element) => {
      const revealTop = element.getBoundingClientRect().top;

      if (revealTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  return () => window.removeEventListener("scroll", revealOnScroll);
}, []);

return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section id="home" className="home-container">
        <canvas ref={canvasRef} className="tree-canvas"></canvas>

        <div className="left-section">
          <h1 className="name">VELMURUGAN V</h1>
          <h2 className="degree">MCA</h2>
          <p className="objective">
            To obtain a challenging position as a Full Stack and AI Developer where I can apply my skills in React, Python, and Machine Learning to build intelligent, scalable, 
            and user-friendly applications while continuously learning and growing in a dynamic environment.
          </p>
        </div>

        <div className="right-section">
          <img src={profile} alt="profile" className="profile-img" />

          <div className="social-icons">
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
      </section>

      {/* ===== ABOUT SECTION ===== */}
<section id="about" className="section  reveal">
  <h2>About Me</h2>
  <p>
    I am a passionate Full Stack and AI Developer with knowledge in React,
    Python, Flask, and Machine Learning. I enjoy building modern web
    applications and intelligent systems that solve real-world problems.
  </p>

  {/* Navigate to full About page */}
  <Link to="/about" className="read-more-btn">
    Read Full Profile →
  </Link>
</section>
      {/* ===== PROJECTS SECTION ===== */}
<section id="project" className="section dark reveal">
  <h2>Projects</h2>

  <div className="home-project-grid">

    {/* Project 1 */}
    <div className="home-project-card">
      <h3>Crop Nutritional Deficiency Detection</h3>
      <p className="proj-desc">AI-Based Deep Learning System</p>

      <p className="proj-summary">
        Developed a deep learning model to detect and classify nutrient
        deficiencies in rice plants using image processing and machine learning.
      </p>
      <ul>
        <li>FCM segmentation</li>
        <li>ResNet feature extraction</li>
        <li>ML classification</li>
      </ul>

      <span className="tech">
        React | Python | Flask | Machine Learning
      </span>
    </div>


    {/* Project 2 */}
    <div className="home-project-card">
      <h3>Portfolio Website</h3>
      <p className="proj-desc">Personal Developer Portfolio</p>

      <p className="proj-summary">
        Built a responsive portfolio with modern UI, animations, and project showcase.
      </p>

      <ul>
        <li>Responsive design</li>
        <li>Animated background</li>
        <li>React routing</li>
      </ul>

      <span className="tech">
        React | CSS | JavaScript
      </span>
    </div>


    {/* Project 3 */}
    <div className="home-project-card">
      <h3>REST API System</h3>
      <p className="proj-desc">Backend Application</p>

      <p className="proj-summary">
        Developed REST APIs with database integration and secure CRUD operations.
      </p>

      <ul>
        <li>CRUD operations</li>
        <li>Express routing</li>
        <li>Database connection</li>
      </ul>

      <span className="tech">
        Node.js | Express | MySQL
      </span>
    </div>

  </div>
</section>


      {/* ===== CONTACT SECTION ===== */}
      

<section id="blog" className="section reveal">
        <h2>Latest Blog</h2>

        <p className="section-subtitle">
          Read my latest article on modern technology and software trends.
        </p>

        <div className="blog-preview-card">
          <h3>How AI is Transforming the Software Industry in 2025</h3>
          <p className="blog-date">Recent Technology Trends</p>

          <p>
         Passionate developer with the ability to design user-friendly frontend experiences and 
         build efficient backend workflows.
         Seeking an opportunity to contribute to end-to-end application development
         and enhance technical skills.
          </p>

          <Link to="/blog" className="read-more-btn">
            Read Full Blog →
          </Link>
        </div>
      </section>

        {/* ===== CONTACT SECTION ===== */}
<section id="contact" className="section dark reveal">
  <h2>Contact Me</h2>

  <p>
    Feel free to reach out for job opportunities, freelance work, or collaboration.
  </p>

  {/* Contact Preview */}
  <div className="home-contact-preview">
    <p>Email: velmuruganxxxxxxx@email.com</p>
    <p>Phone: +91 XXXXX XXX90</p>
  </div>

  {/* Navigate to Full Contact Page */}
  <Link to="/contact" className="read-more-btn">
    Go to Contact Page →
  </Link>
</section>
    </div>
  );
}
export default Home;