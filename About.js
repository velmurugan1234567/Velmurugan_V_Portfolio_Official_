// About.jsx
import "./About.css";
import profile from "./my_image.jpeg";

function About() {
  return (
    <div className="about-container">

      {/* ===== HERO / PROFILE ===== */}
      <section className="about-hero">
        <img src={profile} alt="profile" className="about-profile-img" />

        <div className="about-intro">
          <h1>About Me</h1>
          <h2>VELMURUGAN V</h2>
          <p className="about-degree">MCA - 2025</p>
        </div>
      </section>

      {/* ===== CAREER OBJECTIVE ===== */}
      <section className="about-section">
        <h2>Career Objective</h2>
        <p>
          To start my career as a Full Stack and AI Developer where I can apply
          my skills in React, Python, Flask, and Machine Learning to build
          scalable and intelligent applications while continuously learning and
          growing in a professional environment.
        </p>
      </section>

      {/* ===== EDUCATION ===== */}
      <section className="about-section dark">
        <h2>Education</h2>
        <div className="education-cards">
          <div className="edu-card">
            <h3>MCA</h3>
            <p>Master of Computer Applications</p>
            <span>2023 – 2025</span>
          </div>

          <div className="edu-card">
            <h3>B.Sc</h3>
            <p>Bachelor of Science in Computer Science</p>
            <span>2020 – 2023</span>
          </div>
        </div>
      </section>

      {/* ===== SKILLS ===== */}
      <section className="about-section">
        <h2>Skills</h2>
        <div className="skills-container">

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>HTML, CSS, Bootstrap, JavaScript, React.js</p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>Python, Node.js, PHP</p>
          </div>

          <div className="skill-card">
            <h3>Databases</h3>
            <p>SQL, MySQL, SQLite</p>
          </div>

          <div className="skill-card">
            <h3>Frameworks & Libraries</h3>
            <p>Django, Flask, Express.js, NumPy, Pandas</p>
          </div>

        </div>
      </section>

      {/* ===== INTERNSHIPS ===== */}
      <section className="about-section dark">
        <h2>Internships</h2>
        <div className="intern-cards">
          <div className="intern-card">
            <h3>Key Management System</h3>
            <h4>TCS iON</h4>
            <ul className="project-list">
              <li>Studied cryptography and secure data protection.</li>
              <li>Designed a Key Vault for secure secret storage.</li>
              <li>Implemented encryption and access control.</li>
              <li>Focused on secure storage and data protection.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="about-section">
        <h2>Projects</h2>
        <div className="cert-cards">

          <div className="cert-card">
            <h3>Crop Nutritional Deficiency Detection</h3>
            <p>AI-Based Deep Learning System</p>
            <ul className="project-list">
              <li>FCM segmentation</li>
              <li>ResNet feature extraction</li>
              <li>ML classification</li>
              <li>React | Python | Flask</li>
            </ul>
          </div>

          <div className="cert-card">
            <h3>Portfolio Website</h3>
            <p>Personal Developer Portfolio</p>
            <ul className="project-list">
              <li>Responsive design</li>
              <li>Animated background</li>
              <li>React routing</li>
              <li>React | CSS | JavaScript</li>
            </ul>
          </div>

          <div className="cert-card">
            <h3>REST API System</h3>
            <p>Backend Application</p>
            <ul className="project-list">
              <li>CRUD operations</li>
              <li>Express routing</li>
              <li>Database integration</li>
              <li>Node.js | Express | MySQL</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="about-section dark">
        <h2>Certifications</h2>
        <div className="cert-cards">

          <div className="cert-card">
            <h3>Advanced Frontend Development</h3>
            <p>Anudip Foundation</p>
          </div>

          <div className="cert-card">
            <h3>Python Full Stack</h3>
            <p>Besant Technologies</p>
          </div>

          <div className="cert-card">
            <h3>Full Stack Development</h3>
            <p>NoviTech R&D Pvt Ltd</p>
          </div>

          <div className="cert-card">
            <h3>TCS iON Career Edge</h3>
            <p>Tata Consultancy Services</p>
          </div>

          <div className="cert-card">
            <h3>Machine Learning with Python</h3>
            <p>SmartBridge & TNSDC</p>
          </div>

          <div className="cert-card">
            <h3>Data Science Training</h3>
            <p>IITM Pravartak & Internshala</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default About;