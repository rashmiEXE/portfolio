import { useEffect, useState } from 'react';
import profileImage from '../rashmi.png';

const education = [
  { year: '2023 – 2027', title: 'B.Tech in ECE', place: 'Silicon University, Bhubaneswar, Odisha', value: '7.46 (Till Date)', type: 'CGPA' },
  { year: '2021 – 2023', title: 'Higher Secondary (Class XII)', place: 'Fakir Mohan College, Balasore, Odisha', value: '69.7%', type: 'Percentage' },
  { year: 'Passed 2021', title: 'Secondary Class X', place: 'Pragyan Bharati Shikshya Kendra, Odisha', value: '92.33%', type: 'Percentage' },
];

const projects = [
  {
    title: 'Line Follower Robot',
    category: 'Hardware & Robotics',
    date: 'Mar 2024',
    tags: ['Arduino', 'IR Sensors', 'Embedded Systems'],
    points: [
      'Designed and developed a line follower robot using Arduino and IR sensors.',
      'Implemented sensor calibration and motor control for smooth navigation.',
      'Gained hands-on experience in embedded systems and hardware integration.'
    ]
  },
  {
    title: 'Traffic Light Control System (Simulation)',
    category: 'Circuit Design & Logic Control',
    date: 'Nov 2023',
    tags: ['Proteus', 'Embedded Systems'],
    points: [
      'Designed and simulated an automated traffic light control system.',
      'Used timers and logic circuits to manage signal switching.',
      'Improved understanding of digital electronics and real-time control.'
    ]
  },
  {
    title: 'Portfolio Website',
    category: 'Frontend Development',
    date: 'Aug 2024',
    tags: ['HTML', 'CSS', 'JavaScript'],
    points: [
      'Built a personal portfolio website to showcase my skills, projects and achievements.',
      'Implemented a clean and responsive design.'
    ]
  }
];

const skills = {
  languages: ['Java', 'C (Basics)'],
  web: ['HTML', 'CSS', 'JavaScript', 'React.js (Basics)'],
  tools: ['Git', 'GitHub', 'VS Code', 'Google Analytics', 'Google Search Console'],
  ece: ['Digital Electronics', 'Analog Electronics', 'Communication Systems', 'Microprocessors & Microcontrollers']
};

const courses = ['Digital Electronics', 'Analog Electronics', 'Communication Systems', 'Microprocessors & Microcontrollers', 'Signals and Systems', 'Basic Networking Concepts'];

const certifications = [
  { name: 'Digital Marketing & SEO', year: '2024' },
  { name: 'MERN Stack Development', year: 'In Progress', highlight: true },
  { name: 'Arduino for Beginners', year: '2023' }
];

export default function App() {
  const [toast, setToast] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(showToast.timeout);
    showToast.timeout = setTimeout(() => setToast(''), 2500);
  };

  const copyToClipboard = (text, message) => {
    const helper = document.createElement('input');
    helper.value = text;
    document.body.appendChild(helper);
    helper.select();
    document.execCommand('copy');
    helper.remove();
    showToast(message);
  };

  const handleContact = (event) => {
    event.preventDefault();
    showToast('MESSAGE SENT SUCCESSFULLY');
    event.target.reset();
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-bar">
          <a href="#" className="brand">R. R. Pradhan</a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="primary-btn">Get In Touch</a>
        </div>
      </header>

      <main className="container main-content">
        <section id="about" className="section reveal">
          <div className="masthead">
            <span>VOL. I — NO. 01</span>
            <span>BHUBANESWAR, ODISHA, INDIA</span>
            <span>ECE & FULL-STACK DEV</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <div className="chip">B.Tech Student — ECE</div>
              <h1>
                RASHMI RANJAN <br />
                <span>PRADHAN</span>
              </h1>

              <p>
                B.Tech student in Electronics and Communication Engineering with a strong focus on <strong>embedded systems</strong>, <strong>digital electronics</strong>, and <strong>modern web development</strong>. Eager to solve practical engineering challenges and build robust technical solutions.
              </p>

              <div className="link-row">
                <a href="mailto:rashmiranjanpradhan623@gmail.com" className="secondary-btn">Email Me</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="secondary-btn">LinkedIn ↗</a>
                <a href="https://github.com/RashmiRanjan-git" target="_blank" rel="noreferrer" className="secondary-btn">GitHub ↗</a>
              </div>
            </div>

            <div className="photo-wrap">
              <div className="photo-card">
                <img src={profileImage} alt="Rashmi Ranjan Pradhan Profile Photo" />
                <div className="photo-badge">Rashmi</div>
              </div>
            </div>
          </div>

          <div className="summary-card reveal">
            <h2>Professional Summary</h2>
            <p>
              B.Tech student in Electronics and Communication Engineering with a strong interest in embedded systems, digital electronics and communication systems. I am also exploring web development and digital marketing to build versatile technical and problem-solving skills. Eager to apply my knowledge through projects and practical experiences while contributing to innovative solutions.
            </p>
          </div>
        </section>

        <section id="education" className="section reveal">
          <div className="section-header">
            <h2>Academic Background</h2>
            <span>2021 — 2027</span>
          </div>

          <div className="card-grid three-col">
            {education.map((item) => (
              <article className="info-card" key={item.title}>
                <div className="card-top">
                  <span className="tag">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </div>
                <div className="card-meta">
                  {item.type}: <span>{item.value}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section reveal">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <span>Hands-On Work</span>
          </div>

          <div className="project-stack">
            {projects.map((project) => (
              <article className="info-card project-card" key={project.title}>
                <div className="project-head">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
                  </div>
                  <span className="project-date">{project.date}</span>
                </div>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="mini-tag">{tag}</span>
                  ))}
                </div>

                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section reveal">
          <div className="section-header">
            <h2>Technical Skills</h2>
            <span>Capabilities</span>
          </div>

          <div className="card-grid two-col">
            <div className="skill-card">
              <h3>Programming Languages</h3>
              <div className="pill-row">
                {skills.languages.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>

            <div className="skill-card">
              <h3>Web Technologies</h3>
              <div className="pill-row">
                {skills.web.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>

            <div className="skill-card">
              <h3>Tools & Platforms</h3>
              <div className="pill-row">
                {skills.tools.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>

            <div className="skill-card">
              <h3>Core ECE Areas</h3>
              <div className="pill-row">
                {skills.ece.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </div>
          </div>

          <div className="wide-card">
            <h3>Academic Courses (ECE)</h3>
            <div className="course-grid">
              {courses.map((course) => (
                <div className="course-item" key={course}><span className="dot" /> {course}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section reveal">
          <div className="section-header">
            <h2>Experience & Training</h2>
            <span>Freelance & Learning</span>
          </div>

          <div className="experience-grid">
            <div className="info-card experience-card">
              <div className="project-head">
                <div>
                  <h3>Digital Marketing and SEO</h3>
                  <p>Self-learning / Freelance</p>
                </div>
                <span className="project-date">2024</span>
              </div>

              <ul>
                <li>Gained hands-on experience in keyword research, on-page and off-page SEO, and content optimization.</li>
                <li>Used Google Analytics, Google Search Console and SEMrush for performance tracking.</li>
                <li>Created and optimized content to improve website visibility.</li>
              </ul>
            </div>

            <div className="cert-card">
              <h3>Certifications</h3>
              <ul>
                {certifications.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <span className={item.highlight ? 'highlight' : ''}>{item.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section reveal split-section">
          <div className="small-card">
            <h2>Achievements & Interests</h2>
            <ul>
              <li>Strong academic record in Class X (<strong>92.33%</strong>)</li>
              <li>Actively learning MERN stack development</li>
              <li>Interested in Embedded Systems, IoT, Web Development and Emerging Technologies</li>
            </ul>
          </div>

          <div className="small-card">
            <h2>Languages</h2>
            <div className="language-list">
              <div><span>English</span><small>Fluent</small></div>
              <div><span>Hindi</span><small>Fluent</small></div>
              <div><span>Odia</span><small>Native</small></div>
            </div>
          </div>
        </section>

        <section id="contact" className="section reveal contact-section">
          <div className="contact-title">
            <h2>Initiate Contact</h2>
            <p>Reach out directly for collaborations, embedded projects, or technical opportunities.</p>
          </div>

          <div className="contact-quick">
            <button onClick={() => copyToClipboard('rashmiranjanpradhan623@gmail.com', 'EMAIL COPIED TO CLIPBOARD')}>
              <span>Email Address</span>
              <strong>rashmiranjanpradhan623@gmail.com</strong>
            </button>

            <button onClick={() => copyToClipboard('7846968601', 'PHONE NUMBER COPIED TO CLIPBOARD')}>
              <span>Phone Number</span>
              <strong>+91 7846968601</strong>
            </button>
          </div>

          <form onSubmit={handleContact} className="contact-form">
            <div className="field-row">
              <div>
                <label>Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
            </div>

            <div>
              <label>Message</label>
              <textarea rows="4" placeholder="Your message here..." required />
            </div>

            <button type="submit" className="submit-btn">Send Correspondence</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Rashmi Ranjan Pradhan — All Information Verified via Resume</p>
      </footer>

      {toast && <div className="toast show">{toast}</div>}
    </div>
  );
}
