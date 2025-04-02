import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

function App() {
  return (
    <>
      {/* Navbar Section */}
      <nav className="nav">
        <div className="logo">Olisaemeka Nwandu</div>
        <ul className="nav-list">
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#work" className="nav-link">Work</a></li>
        </ul>
        <div className="nav-icons">
          <a href="https://www.tiktok.com/@user51236849?_t=ZM-8u116NOpXqJ&_r=1" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://www.linkedin.com/in/olisaemeka-nwandu-805220301" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Olisaemeka1708" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-content">
          <p>Hello, I'm Olisaemeka,</p>
          <h1>Software<br />Developer<br />&<br />Sustainable Engineer.</h1>
          <p>Based in Lagos.</p>
          <a href="/Olisaemeka Nwandu President Resume.pdf" className="hover-link" target="_blank" rel="noopener noreferrer">
            <button className="hover-btn">Resume</button>
          </a>
        </div>
        <img src="/progrm.jpg" alt="Profile Picture" className="profile-picture" />
      </section>

      {/* About Section */}
      <section id="about" className="about-container">
        <h2 className="section-title">About Me</h2>
        <p>
          I am a software developer with expertise in HTML, CSS, JavaScript, and Python, as well as frameworks like React, Django, and Flask. 
          With a background in Industrial Physics and Renewable Energy, I am passionate about building innovative tech solutions and exploring 
          sustainable energy advancements. My experience as a Sales Engineer Intern at Daystar Power Solutions has strengthened my problem-solving 
          and teamwork skills. I thrive in collaborative environments and am always eager to learn and innovate.
          <br /><br />
          Let’s connect and create something impactful! 🚀
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-list">
          <div className="skill">
            <i className="fa-brands fa-html5"></i>
            <p>HTML</p>
          </div>
          <div className="skill">
            <i className="fa-brands fa-css3"></i>
            <p>CSS</p>
          </div>
          <div className="skill">
            <i className="fa-brands fa-js"></i>
            <p>JavaScript</p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="portfolio">
        <h2 className="section-title">My Work</h2>
        <p>These are some of the projects I have worked on, including my time at Aptech and personal projects.</p>
        <div className="work-gallery">
          <div className="work-item">
            <a href="/age.html">
              <img src="/image1.jpg" alt="Project 1" width="300" height="200" />
            </a>
            <p>A user-friendly age calculator that accurately determines a person’s age.</p>
          </div>
          <div className="work-item">
            <a href="/down.html">
              <img src="/countdown GIF (1).gif" alt="Project 2" width="300" height="200" />
            </a>
            <p style={{ textAlign: "center" }}>A countdown timer application built for tracking events efficiently.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
