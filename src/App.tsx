import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* =====================================================
          NAVIGATION
      ===================================================== */}
      <header className="header">
        <nav className="navbar">
          <a href="#home" className="logo">
            HG<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
          </div>

          <a
            href="mailto:hemanthgangavarapu2118@gmail.com"
            className="nav-cta"
          >
            Let's Talk <span>↗</span>
          </a>
        </nav>
      </header>

      {/* =====================================================
          HERO
      ===================================================== */}
      <main id="home" className="hero">
        <div className="hero-left">
          <div className="hero-label">
            <span className="label-line"></span>
            FULL-STACK DEVELOPER • SOFTWARE ENGINEER
          </div>

          <h1>
            Hemanth
            <span>Gangavarapu.</span>
          </h1>

          <p className="hero-role">
            I build <strong>modern web applications</strong> from polished
            frontend experiences to scalable backend systems.
          </p>

          <p className="hero-description">
            Java Full-Stack Developer specializing in React, Spring Boot,
            REST APIs, and database-driven applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore Projects <span>→</span>
            </a>

            <a
              href="/Hemanth_Gangavarapu_Resume.pdf"
              className="resume-btn"
              download
            >
              Resume <span>↓</span>
            </a>
          </div>

          <div className="hero-bottom">
            <div className="social-links">
              <a
                href="https://github.com/Hemanth0103"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/gangavarapu-hemanth-3a748026b/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>

            <div className="available">
              <span></span>
              Available for opportunities
            </div>
          </div>
        </div>

        {/* FULL STACK ARCHITECTURE */}
        <div className="hero-visual">
          <div className="visual-glow glow-one"></div>
          <div className="visual-glow glow-two"></div>

          <div className="architecture-card">
            <div className="architecture-header">
              <div>
                <span className="architecture-dot"></span>
                WEB APPLICATION
              </div>

              <span>FULL STACK</span>
            </div>

            <div className="architecture-content">
              <div className="architecture-section">
                <p className="architecture-label">01 / CLIENT</p>

                <div className="frontend-box">
                  <div className="box-icon">&lt;/&gt;</div>

                  <div>
                    <span>FRONTEND</span>
                    <strong>React + TypeScript</strong>
                  </div>

                  <div className="active-dot"></div>
                </div>
              </div>

              <div className="connector">
                <span></span>
                <p>HTTP / JSON</p>
                <span></span>
              </div>

              <div className="architecture-section">
                <p className="architecture-label">02 / API LAYER</p>

                <div className="api-grid">
                  <div className="small-box">
                    <span>GET</span>
                    <strong>/api/users</strong>
                  </div>

                  <div className="small-box">
                    <span>POST</span>
                    <strong>/api/data</strong>
                  </div>

                  <div className="small-box">
                    <span>PUT</span>
                    <strong>/api/update</strong>
                  </div>
                </div>
              </div>

              <div className="connector">
                <span></span>
                <p>REST API</p>
                <span></span>
              </div>

              <div className="architecture-section">
                <p className="architecture-label">03 / SERVER</p>

                <div className="backend-box">
                  <div className="spring-icon">S</div>

                  <div>
                    <span>BACKEND</span>
                    <strong>Java + Spring Boot</strong>
                  </div>

                  <div className="server-status">
                    <span></span>
                    RUNNING
                  </div>
                </div>
              </div>

              <div className="database-connector">
                <div></div>
              </div>

              <div className="database-row">
                <div className="database-box">
                  <div className="database-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div>
                    <span>DATABASE</span>
                    <strong>MySQL</strong>
                  </div>
                </div>

                <div className="database-box">
                  <div className="mongo-icon">M</div>

                  <div>
                    <span>DATABASE</span>
                    <strong>MongoDB</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="architecture-footer">
              <span>FRONTEND</span>
              <div></div>
              <span>API</span>
              <div></div>
              <span>BACKEND</span>
              <div></div>
              <span>DATABASE</span>
            </div>
          </div>

          <div className="floating-tag tag-react">
            <span>●</span>
            REACT
          </div>

          <div className="floating-tag tag-java">
            <span>●</span>
            JAVA
          </div>

          <div className="floating-tag tag-api">
            REST API <span>↗</span>
          </div>
        </div>
      </main>

      {/* =====================================================
          TECH STRIP
      ===================================================== */}
      <div className="tech-strip">
        <div className="tech-strip-inner">
          <span>JAVA</span>
          <i></i>
          <span>SPRING BOOT</span>
          <i></i>
          <span>REACT</span>
          <i></i>
          <span>TYPESCRIPT</span>
          <i></i>
          <span>REST APIs</span>
          <i></i>
          <span>MYSQL</span>
          <i></i>
          <span>MONGODB</span>
        </div>
      </div>

      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section id="about" className="section about-section">
        <div className="section-top">
          <p className="section-number">01 / ABOUT</p>
          <p className="section-side-text">WHO I AM</p>
        </div>

        <div className="about-grid">
          <div className="about-heading">
            <h2>
              I turn ideas into
              <span>complete web applications.</span>
            </h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I'm a Computer Science graduate student and full-stack developer
              focused on building reliable, scalable, and user-friendly
              software.
            </p>

            <p>
              I enjoy working across the entire development process — creating
              responsive frontend experiences, designing backend services,
              building REST APIs, and connecting applications to databases.
            </p>

            <p>
              My primary focus is Java full-stack development with Spring Boot
              and React, while my experience also includes Node.js, Express,
              MongoDB, Python, AI/ML, and Big Data technologies.
            </p>

            <div className="about-details">
              <div>
                <span>01</span>
                <p>PRIMARY FOCUS</p>
                <strong>Java Full-Stack</strong>
              </div>

              <div>
                <span>02</span>
                <p>EDUCATION</p>
                <strong>M.S. Computer Science</strong>
              </div>

              <div>
                <span>03</span>
                <p>BUILDING</p>
                <strong>Web Applications</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="development-flow">
          <div className="flow-heading">
            <span>HOW I BUILD</span>
            <p>From interface to infrastructure</p>
          </div>

          <div className="flow-items">
            <div className="flow-item">
              <div className="flow-number">01</div>
              <div className="flow-symbol">&lt;/&gt;</div>
              <p>FRONTEND</p>
              <h3>Interface</h3>
              <span>React · TypeScript</span>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-item">
              <div className="flow-number">02</div>
              <div className="flow-symbol">API</div>
              <p>COMMUNICATION</p>
              <h3>REST API</h3>
              <span>HTTP · JSON</span>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-item highlighted-flow">
              <div className="flow-number">03</div>
              <div className="flow-symbol">{"{ }"}</div>
              <p>BACKEND</p>
              <h3>Business Logic</h3>
              <span>Java · Spring Boot</span>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-item">
              <div className="flow-number">04</div>
              <div className="flow-symbol">DB</div>
              <p>DATA</p>
              <h3>Database</h3>
              <span>MySQL · MongoDB</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TECH STACK
      ===================================================== */}
      <section id="skills" className="section skills-section">
        <div className="section-top">
          <p className="section-number">02 / TECH STACK</p>
          <p className="section-side-text">WHAT I WORK WITH</p>
        </div>

        <div className="skills-heading">
          <div>
            <h2>
              Technology behind
              <span>the applications.</span>
            </h2>
          </div>

          <p>
            A full-stack toolkit for building responsive interfaces, backend
            systems, APIs, and data-driven applications.
          </p>
        </div>

        <div className="skills-grid">
          <article className="skill-card featured-skill">
            <div className="skill-card-top">
              <span className="skill-number">01</span>
              <div className="skill-icon">{"{ }"}</div>
            </div>

            <p className="skill-category">BACKEND DEVELOPMENT</p>

            <h3>Java & Server-Side</h3>

            <p className="skill-description">
              Building backend services, application logic, APIs, and
              database-driven systems.
            </p>

            <div className="skill-tags">
              <span className="important-tag">Java</span>
              <span className="important-tag">Spring Boot</span>
              <span>Spring MVC</span>
              <span>Spring Data JPA</span>
              <span>Hibernate</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
              <span>GraphQL</span>
              <span>gRPC</span>
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-top">
              <span className="skill-number">02</span>
              <div className="skill-icon">&lt;/&gt;</div>
            </div>

            <p className="skill-category">FRONTEND DEVELOPMENT</p>

            <h3>Modern Interfaces</h3>

            <p className="skill-description">
              Creating responsive, reusable, and user-focused web interfaces.
            </p>

            <div className="skill-tags">
              <span className="important-tag">React.js</span>
              <span className="important-tag">TypeScript</span>
              <span>JavaScript</span>
              <span>Angular</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Bootstrap</span>
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-top">
              <span className="skill-number">03</span>
              <div className="skill-icon">DB</div>
            </div>

            <p className="skill-category">DATABASE & DATA</p>

            <h3>Data Layer</h3>

            <p className="skill-description">
              Working with relational, NoSQL, and distributed data
              technologies.
            </p>

            <div className="skill-tags">
              <span className="important-tag">MySQL</span>
              <span className="important-tag">MongoDB</span>
              <span>SQL</span>
              <span>NoSQL</span>
              <span>Hadoop</span>
              <span>HDFS</span>
              <span>Spark</span>
              <span>Kafka</span>
            </div>
          </article>

          <article className="skill-card">
            <div className="skill-card-top">
              <span className="skill-number">04</span>
              <div className="skill-icon">↗</div>
            </div>

            <p className="skill-category">DEVELOPER WORKFLOW</p>

            <h3>Tools & Practices</h3>

            <p className="skill-description">
              Tools I use for development, testing, collaboration, and version
              control.
            </p>

            <div className="skill-tags">
              <span className="important-tag">Git</span>
              <span className="important-tag">GitHub</span>
              <span>Maven</span>
              <span>Postman</span>
              <span>VS Code</span>
              <span>Eclipse</span>
              <span>Jupyter</span>
              <span>Agile</span>
            </div>
          </article>
        </div>

        <div className="supporting-skills">
          <div>
            <p>ADDITIONAL EXPERIENCE</p>
            <h3>AI / ML & Data Technologies</h3>
          </div>

          <div className="supporting-tags">
            <span>Python</span>
            <span>PyTorch</span>
            <span>scikit-learn</span>
            <span>BERT</span>
            <span>NLP</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECTS
      ===================================================== */}
      <section id="projects" className="section projects-section">
        <div className="section-top">
          <p className="section-number">03 / FEATURED PROJECTS</p>
          <p className="section-side-text">SELECTED WORK</p>
        </div>

        <div className="projects-heading">
          <h2>
            Things I've
            <span>built.</span>
          </h2>

          <p>
            Selected projects spanning full-stack web development, backend
            engineering, data analysis, and machine learning.
          </p>
        </div>

        <div className="projects-list">
          {/* PROJECT 1 */}
          <article className="project-row">
            <div className="project-index">01</div>

            <div className="project-main">
              <p className="project-type">AI / NLP / FINANCIAL DATA</p>

              <h3>
                Financial News Sentiment &
                <span> Stock Price Analysis</span>
              </h3>

              <p className="project-description">
                A graduate project analyzing financial news sentiment and its
                relationship with stock-price movements. The application
                combines natural language processing, market data, prediction,
                and an interactive Streamlit interface.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>BERT</span>
                <span>PyTorch</span>
                <span>NLP</span>
                <span>Streamlit</span>
              </div>
            </div>

            <div className="project-side">
              <div className="project-mark">AI</div>

              <div className="project-meta">
                <span>FOCUS</span>
                <strong>Sentiment Analysis</strong>
              </div>

              <div className="project-meta">
                <span>APPLICATION</span>
                <strong>Financial Analytics</strong>
              </div>
            </div>
          </article>

          {/* PROJECT 2 */}
          <article className="project-row">
            <div className="project-index">02</div>

            <div className="project-main">
              <p className="project-type">JAVA FULL-STACK DEVELOPMENT</p>

              <h3>
                Full-Stack
                <span> Web Application</span>
              </h3>

              <p className="project-description">
                A full-stack application using React for the frontend and Java
                with Spring Boot for backend services, connected through REST
                APIs and backed by a MySQL database with CRUD functionality.
              </p>

              <div className="project-tech">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React</span>
                <span>REST API</span>
                <span>MySQL</span>
              </div>
            </div>

            <div className="project-side project-side-blue">
              <div className="project-mark">{"{ }"}</div>

              <div className="project-meta">
                <span>ARCHITECTURE</span>
                <strong>Full Stack</strong>
              </div>

              <div className="project-meta">
                <span>BACKEND</span>
                <strong>Spring Boot</strong>
              </div>
            </div>
          </article>

          {/* PROJECT 3 */}
          <article className="project-row">
            <div className="project-index">03</div>

            <div className="project-main">
              <p className="project-type">MERN STACK</p>

              <h3>
                Stack Overflow
                <span> Clone</span>
              </h3>

              <p className="project-description">
                A MERN-based question-and-answer platform inspired by Stack
                Overflow, with frontend and backend integration, API-driven
                functionality, database operations, and real-time chat
                features.
              </p>

              <div className="project-tech">
                <span>MongoDB</span>
                <span>Express.js</span>
                <span>React</span>
                <span>Node.js</span>
                <span>REST APIs</span>
              </div>
            </div>

            <div className="project-side">
              <div className="project-mark">M</div>

              <div className="project-meta">
                <span>STACK</span>
                <strong>MERN</strong>
              </div>

              <div className="project-meta">
                <span>FEATURE</span>
                <strong>Real-Time Chat</strong>
              </div>
            </div>
          </article>
        </div>

        <div className="github-project-link">
          <p>Want to see more?</p>

          <a
            href="https://github.com/Hemanth0103"
            target="_blank"
            rel="noreferrer"
          >
            Explore my GitHub <span>↗</span>
          </a>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}
      <section id="experience" className="section experience-section">
        <div className="section-top">
          <p className="section-number">04 / EXPERIENCE</p>
          <p className="section-side-text">WHERE I'VE WORKED</p>
        </div>

        <div className="experience-heading">
          <h2>
            Professional
            <span>experience.</span>
          </h2>

          <p>
            Experience building web applications, APIs, frontend interfaces,
            backend functionality, and database-driven software.
          </p>
        </div>

        <div className="experience-list">
          {/* EXPERIENCE 1 */}
          <article className="experience-item">
            <div className="experience-date">
              <span>JAN 2023</span>
              <div></div>
              <span>DEC 2024</span>
            </div>

            <div className="experience-role">
              <p>THE VALOR SOLUTIONS</p>
              <h3>Junior Software Developer</h3>
              <span>Bengaluru, India</span>
            </div>

            <div className="experience-description">
              <p>
                Developed and maintained full-stack web applications using
                React.js, Node.js, Express.js, and MongoDB.
              </p>

              <p>
                Designed and integrated RESTful APIs for frontend/backend
                communication, CRUD operations, data processing, and
                application workflows.
              </p>

              <p>
                Built reusable frontend components and backend functionality,
                while contributing to debugging, testing, code reviews, and
                Git/GitHub-based collaboration.
              </p>
            </div>
          </article>

          {/* EXPERIENCE 2 */}
          <article className="experience-item">
            <div className="experience-date">
              <span>JUL 2022</span>
            </div>

            <div className="experience-role">
              <p>NULLCLASS</p>
              <h3>Full-Stack Development Engineer Intern</h3>
              <span>Bengaluru, India</span>
            </div>

            <div className="experience-description">
              <p>
                Worked on a Stack Overflow-inspired application using the MERN
                stack.
              </p>

              <p>
                Contributed to frontend and backend functionality, API
                integration, database operations, and real-time chat features.
              </p>
            </div>
          </article>

          {/* EXPERIENCE 3 */}
          <article className="experience-item">
            <div className="experience-date">
              <span>FEB 2022</span>
              <div></div>
              <span>JUN 2022</span>
            </div>

            <div className="experience-role">
              <p>OCTANET SERVICES PVT LTD</p>
              <h3>Full-Stack Development Engineer Intern</h3>
              <span>Chennai, India</span>
            </div>

            <div className="experience-description">
              <p>
                Developed full-stack web application functionality using
                React, Node.js, Express.js, and MongoDB.
              </p>

              <p>
                Worked with REST APIs and contributed to debugging, testing,
                Git/GitHub workflows, and collaborative development.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          EDUCATION + CERTIFICATIONS
      ===================================================== */}
      <section id="education" className="section education-section">
        <div className="section-top">
          <p className="section-number">05 / BACKGROUND</p>
          <p className="section-side-text">EDUCATION & CERTIFICATIONS</p>
        </div>

        <div className="background-heading">
          <h2>
            Education &
            <span>continuous learning.</span>
          </h2>
        </div>

        <div className="background-grid">
          {/* EDUCATION */}
          <div className="education-column">
            <p className="background-label">EDUCATION</p>

            <article className="education-item">
              <div className="education-year">2025 — PRESENT</div>

              <h3>Master of Science</h3>
              <h4>Computer Science</h4>

              <p>Purdue University Northwest</p>
              <span>Indiana, United States</span>
            </article>

            <article className="education-item">
              <div className="education-year">2020 — 2024</div>

              <h3>Bachelor's Degree</h3>
              <h4>Computer Science</h4>

              <p>Prathyusha Engineering College</p>
              <span>Chennai, India</span>
            </article>
          </div>

          {/* CERTIFICATIONS */}
          <div className="certification-column">
            <p className="background-label">CERTIFICATIONS</p>

            <div className="certification-list">
              <article className="certification-item">
                <span>01</span>

                <div>
                  <h3>Full-Stack Development Certification</h3>
                  <p>Infosys Springboard</p>
                </div>

                <div className="cert-arrow">↗</div>
              </article>

              <article className="certification-item">
                <span>02</span>

                <div>
                  <h3>AWS Academy Cloud Foundations</h3>
                  <p>AWS Academy</p>
                </div>

                <div className="cert-arrow">↗</div>
              </article>

              <article className="certification-item">
                <span>03</span>

                <div>
                  <h3>Fabric Data Engineer Associate</h3>
                  <p>Microsoft</p>
                </div>

                <div className="cert-arrow">↗</div>
              </article>

              <article className="certification-item">
                <span>04</span>

                <div>
                  <h3>Meta Back-End Developer</h3>
                  <p>Professional Certificate · Coursera</p>
                </div>

                <div className="cert-arrow">↗</div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}
      <section id="contact" className="contact-section">
        <div className="contact-glow"></div>

        <div className="contact-inner">
          <p className="contact-label">06 / LET'S CONNECT</p>

          <h2>
            Have a project or
            <span>opportunity in mind?</span>
          </h2>

          <p className="contact-description">
            I'm interested in software engineering and Java full-stack
            development opportunities where I can build meaningful,
            production-focused applications.
          </p>

          <a
            href="mailto:hemanthgangavarapu2118@gmail.com"
            className="contact-button"
          >
            Let's Talk
            <span>↗</span>
          </a>

          <div className="contact-links">
            <a href="mailto:hemanthgangavarapu2118@gmail.com">
              EMAIL ↗
            </a>

            <a
              href="https://github.com/Hemanth0103"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>

            <a
              href="https://www.linkedin.com/in/gangavarapu-hemanth-3a748026b/"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="footer">
        <div className="footer-inner">
          <a href="#home" className="footer-logo">
            HG<span>.</span>
          </a>

          <p>Hemanth Gangavarapu · Java Full-Stack Developer</p>

          <a href="#home" className="back-top">
            BACK TO TOP ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;