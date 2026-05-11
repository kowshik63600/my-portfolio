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
        <p>I build responsive web apps using React, Firebase, and modern UI practices.</p>
        
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