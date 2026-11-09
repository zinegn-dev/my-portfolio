import Image from "next/image";
export default function Home() {
  return (
    <>
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo">
          Zinegn
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>

          <h1>
            Zinegn
          </h1>

          <h2>Frontend Developer</h2>

          <p className="hero-description">
            I create beautiful, responsive, and user-friendly
            websites using modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-box">
            &lt; / &gt;
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
<section className="about" id="about">
  <div className="about-content">
    <p className="section-label">ABOUT ME</p>

    <h2>
      Turning Ideas Into
      <span> Websites</span>
    </h2>
     <p>
  I'm a frontend developer focused on building modern,
  responsive, and user-friendly websites. I use HTML,
  CSS, JavaScript, React, and Next.js to turn ideas
  into functional and attractive web experiences.
</p>

<p>
  I enjoy creating clean designs, reusable components,
  and websites that provide a smooth experience
  across different devices.
</p>
  </div>
</section>
{/* SKILLS SECTION */}
<section className="skills" id="skills">
  <div className="section-heading">
    <p className="section-label">MY SKILLS</p>
    <h2>Technologies I Work With</h2>
    <p>
      Tools and technologies I use to build modern websites.
    </p>
  </div>

  <div className="skills-container">
    <div className="skill-card">HTML5</div>
    <div className="skill-card">CSS3</div>
    <div className="skill-card">JavaScript</div>
    <div className="skill-card">React</div>
    <div className="skill-card">Next.js</div>
    <div className="skill-card">Git & GitHub</div>
  </div>
</section>
{/* PROJECTS SECTION */}
<section className="projects" id="projects">
  <div className="section-heading">
    <p className="section-label">MY WORK</p>
    <h2>Featured Projects</h2>
    <p>
      Here are some projects I've built using modern web technologies.
    </p>
  </div>

  <div className="projects-container">
    <div className="project-card">
      <div className="project-image">
  <Image
    src="/projects/creamy-bliss.png"
    alt="Creamy Bliss ice cream website homepage"
    width={1200}
    height={700}
    className="project-screenshot"
  />
</div>

      <div className="project-content">
        <h3>Creamy Bliss - Ice Cream Website</h3>

        <p>
          A responsive ice cream website with product filtering,
          shopping cart functionality, and a contact form.
        </p>

        <p className="project-tech">
          Next.js · React · JavaScript · CSS
        </p>

     <div className="project-links">
  <a
    href="https://creamy-bliss-plum.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Live Project →
  </a>

  <a
    href="https://github.com/zinegn-dev/creamy-bliss"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Source Code →
  </a>
</div>
      </div>
    </div>
  </div>
</section>
{/* SERVICES SECTION */}
<section className="services" id="services">
  <div className="section-heading">
    <p className="section-label">WHAT I OFFER</p>
    <h2>My Services</h2>
    <p>
      I help businesses build a strong online presence.
    </p>
  </div>

  <div className="services-container">
    <div className="service-card">
      <h3>Website Development</h3>
      <p>
        Modern and responsive websites built to work
        smoothly across different devices.
      </p>
    </div>

    <div className="service-card">
      <h3>Responsive Design</h3>
      <p>
        Websites that adapt to mobile phones, tablets,
        and desktop screens.
      </p>
    </div>

    <div className="service-card">
      <h3>Website Redesign</h3>
      <p>
        Improving website layouts, appearance, and
        user experience.
      </p>
    </div>
  </div>
</section>
{/* CONTACT SECTION */}
<section className="contact" id="contact">
  <div className="section-heading">
    <p className="section-label">GET IN TOUCH</p>
    <h2>Let's Work Together</h2>
    <p>
      Have a project in mind? I'd love to hear from you.
    </p>
  </div>

  <div className="contact-content">
    <p>
      I'm available for frontend development projects.
      Feel free to contact me to discuss your ideas.
    </p>

    <a href="mailto:your-email@example.com" className="primary-button">
      Send Me an Email
    </a>
  </div>
</section>
{/* FOOTER */}
<footer className="footer">
  <div className="footer-content">
    <a href="#home" className="logo">
      Zinegn<span>.</span>
    </a>

    <p>
      Building modern and user-friendly web experiences.
    </p>

    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2026 Zinegn. All rights reserved.</p>
  </div>
</footer>
    </>
  );
}
