import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">

      {/* Navigation */}

      <nav className="navbar">
        <h1 className="logo">My Portfolio</h1>
        <ul className="nav-links">
          <li><a href="#service" id="b1">Services</a></li>
          <li><a href="#projects" id="b2">Projects</a></li>
          <li><a href="#contacts" id="b3">Contact Me</a></li>
        </ul>
      </nav>

      {/* Introduction Section */}

      <div className="intro-section">
        <div className="image-container">
          <img src="416303183_2629504920557685_8758361235084537409_n.jpg" alt="Mhel Lawrence Beter" className="profile-image" />
        </div>
        <div className="intro-info1">
          <h2>Hello I'm</h2>
          </div>
          <div className="intro-info2">
          <h1>Mhel Lawrence Beter</h1>
          <button className="about-btn"><a href="#aboutme">About Me</a></button>
        </div>
      </div>

      {/* About Me Section */}

      <section className="about-section">
        <h2 id="aboutme">About Me</h2>
        <p>
        I'm Mhel Lawrence Beter, currently studying Bachelor of Science in Information Technology (BSIT) at Western Institute of Technology. 
        I'm passionate about technology, with a focus on networking, UI/UX design, and web/app development. 
        My skills include building secure networks, designing user-friendly interfaces, and developing responsive web and mobile apps. 
        I love combining creativity with technical expertise to enhance both user experience and functionality.
        </p>
        <div className="about-image-container">
          <img src="461073057-2827920484049460-3508276118524745162-n-1.png" alt="About Me" className="about-image" />
        </div>
      </section>

      {/* Services Section */}

      <section className="services-section">
        <h2 id="service">My Services</h2>
        <div className="service-cards">
          <div className="networking">
           <img src = "net.png" alt="net" className="badge1"/>
            <h3>Networking</h3>
            <p>
            I provide a range of networking services, including custom network design, setup, and security to ensure seamless communication and protection from threats. 
            My expertise covers troubleshooting, wireless networking, and VPN solutions for secure remote access. 
            Additionally, I offer network upgrades to improve performance and security, keeping your infrastructure reliable and up to date.
            </p>
          </div>
          <div className="uiux">
          <img src = "uiux.png" alt="net" className="badge2"/>
            <h3>UI/UX Design</h3>
            <p>
            I specialize in UI/UX design, creating user-friendly interfaces that enhance usability and accessibility across all devices. 
            My focus is on clean, functional designs that not only look great but also improve user satisfaction and interaction. 
            Whether it's a website, app, or software interface, I ensure a perfect balance of aesthetics and functionality to meet both user needs and business goals.
            </p>
          </div>
          <div className="webapp">
          <img src = "webapp.png" alt="net" className="badge3"/>
            <h3>Web/App Development</h3>
            <p>
            I specialize in web and app development, providing responsive, high-quality solutions tailored to your needs. 
            From dynamic websites to mobile and web apps, I ensure each project is optimized for performance, security, and scalability. 
            My focus is on creating user-friendly, interactive designs that work smoothly on all devices. 
            Using modern technologies and best practices, I efficiently bring your ideas to life, whether for a custom website or a powerful app.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}

      <section className="projects-section">
        <h2 id="projects">My Projects</h2>
        <div className="projects">
          <div className="proj1">
            <h3>Project 1: Secure Enterprise Network Design using Cisco Technologies</h3>
                <img src = "cisco.png" alt="net" className="cisco"/>
            <p>
            The project successfully delivered a secure, high-performance, 
            and scalable network infrastructure that meets the current and future demands of the organization. 
            It improved security, ensured reliable data flow, and provided an architecture that can easily grow with the company.
            </p>
          </div>
          <div className="proj2">
            <h3>Project 2: To-do List (MERN Stack)</h3>
            <img src = "macbook-air-2022.png" alt="net" className="laptop"/>
            <img src = "iphone-15.png" alt="net" className="phone"/>
            <p>
            AWESOMETODOS provides users with a simple, efficient tool to manage their tasks, 
            delivering a smooth user experience with responsive design and real-time functionality. 
            The project demonstrates the power of the MERN stack in building dynamic, data-driven web applications.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      
      <section className="contact-section">
        <h2 id="contacts">Contact Me</h2>
        <img src = "discord.png" alt="discord" className="discord"/>
        <img src = "twitter.png" alt="twitter" className="twitter"/>
        <img src = "google.png" alt="google" className="google"/>
        <div className="contact-info">
          <div className="info1">
          <p>Smile? smile_of_existentialism</p>
          </div>
          <div className="info2">
          <p>@LookaSmileyFace</p>
          </div>
          <div className="info3">
          <p>mhellawrence33@gmail.com 09XXXXXXXXXX </p>
          </div>
        </div>
        <div className="contact-form-box">
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Submit</button>
        </form>
        </div>
        
        <div className="blank">
          <p>--</p>
        </div>

      </section>
    </div> 
  );
};

export default Portfolio;