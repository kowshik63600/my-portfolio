import React, { useEffect, useState } from "react";
import "./Hero.css";
import profile from "../assets/profile.jpeg";

function Hero() {
  const roles = ["Frontend Developer", "React Developer", "Web Designer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = roles[index];
    const timer = setTimeout(() => {
      setText(currentWord.slice(0, charIndex + 1));
      if (charIndex < currentWord.length) {
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setText("");
          setIndex((index + 1) % roles.length);
        }, 1000);
      }
    }, 120);
    return () => clearTimeout(timer);
  }, [charIndex, index]);
  const handleMouseMove = (e) => {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  btn.style.setProperty("--x", `${x}px`);
  btn.style.setProperty("--y", `${y}px`);

  const moveX = (x - rect.width / 2) * 0.2;
  const moveY = (y - rect.height / 2) * 0.2;

  btn.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.03)`;
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.transform = "translate(0,0) scale(1)";
};

 return (
  <section className="hero section-mask" id="home">
    {/* Left Column Wrapper */}
    <div className="hero-left-container reveal-left"> 
      <div className="hero-left">
        <div className="status-badge">🟢 Available for Work</div>
        <h3>Hello, I'm</h3>
        <h1>Kowshik</h1>
        <h2>
          I'm a <span>{text}<span className="cursor">|</span></span>
        </h2>
<p>
  Frontend Developer specializing in React, Firebase, and modern UI design.
  I build fast, responsive, and production-ready web applications.
</p>
<p className="tech-stack">
  React • JavaScript • Firebase • HTML • CSS • Git
</p>        

{/* ✅ ADD HERE */}
<div className="hero-stats">
  <div>
    <h3>3+</h3>
    <p>Projects Built</p>
  </div>

  <div>
    <h3>React</h3>
    <p>Core Skill</p>
  </div>

  <div>
    <h3>Firebase</h3>
    <p>Backend</p>
  </div>
</div>

<div className="hero-buttons">
<a 
  href="#contact" 
  className="btn"
  onMouseMove={(e) => handleMouseMove(e)}
>
  Hire Me
</a>

<a 
  href="#projects" 
  className="btn"
  onMouseMove={(e) => handleMouseMove(e)}
>
  Projects
</a>

<a 
  href="/kowshik-resume.pdf" 
  download 
  className="btn"
  onMouseMove={(e) => handleMouseMove(e)}
>
  Download Resume
</a>
<a 
  href="https://github.com/kowshik63600" 
  target="_blank" 
  rel="noopener noreferrer"
  className="btn"
  onMouseMove={(e) => handleMouseMove(e)}
>
  GitHub
</a>

     </div>
      </div>
    </div>
    

    {/* Right Column Wrapper */}
    <div className="hero-right reveal-right">
      <div className="image-container">
        <img src={profile} alt="Kowshik" fetchPriority="high" />
      </div>
      
    </div>
    
  </section>
);
}
export default Hero;