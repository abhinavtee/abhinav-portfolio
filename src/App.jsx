
import { useEffect, useState } from 'react'
import { FaJava, FaCss3Alt } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import {
  AlertCircle,
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  LoaderCircle,
  Mail,
  MapPin,
  Send,
  Sparkles,
  Terminal,
} from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiReactrouter,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFlask,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiGoogle,
  SiGit,
  SiGithub,
  SiPostman,
  SiNpm,
  SiApachemaven,
  SiVercel,
} from 'react-icons/si'
import { motion, useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'
import SectionHeading from './components/SectionHeading'
import Reveal from './components/Reveal'
import ProjectCard from './components/ProjectCard'
import BrandMark from './components/BrandMark'
import {
  experience,
  profile,
  projects,
  skillGroups,
} from './data/portfolio'

const icons = {
  layers: Layers3,
  terminal: Terminal,
  database: Database,
  code: Code2,
}

const skillIcons = {
  'React.js': SiReact,
  'Next.js': SiNextdotjs,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: FaCss3Alt,
  'Tailwind CSS': SiTailwindcss,
  'React Router': SiReactrouter,
  Vite: SiVite,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  Python: SiPython,
  Flask: SiFlask,
  Java: FaJava,
  'Spring Boot': SiSpringboot,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  JWT: SiJsonwebtokens,
  'Google OAuth': SiGoogle,
  Git: SiGit,
  GitHub: SiGithub,
 'VS Code': VscVscode,
  Postman: SiPostman,
  npm: SiNpm,
  Maven: SiApachemaven,
  Vercel: SiVercel,
  'REST APIs': Code2,
}

const skillIconColors = {
  'React.js': '#61dafb',
  'Next.js': '#e8e8ef',
  JavaScript: '#ead65a',
  HTML5: '#e77855',
  CSS3: '#68a8f8',
  'Tailwind CSS': '#49bfd4',
  'React Router': '#ca4245',
  Vite: '#bba4ff',
  'Node.js': '#86c879',
  'Express.js': '#c6c5d0',
  Python: '#e0bd61',
  Flask: '#e6e6eb',
  Java: '#e77855',
  'Spring Boot': '#80c982',
  MongoDB: '#63bd86',
  MySQL: '#6ca9dc',
  JWT: '#a9a6ce',
  'Google OAuth': '#8baeff',
  Git: '#ef795e',
  GitHub: '#ededf3',
  'VS Code': '#53a6ed',
  Postman: '#ff936d',
  npm: '#ef7e8d',
  Maven: '#d8ad72',
  Vercel: '#ededf3',
  'REST APIs': '#b4a1ff',
}

function SocialLink({ href, label, children }) {
  const isEmail = href.startsWith('mailto:')

  return (
    <a
      className="social-link"
      href={href}
      aria-label={label}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noreferrer'}
    >
      {children}
      <ArrowUpRight size={12} />
    </a>
  )
}

function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-grid container">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="availability">
            <span className="availability-pulse" />
            Open to opportunities
          </div>

          <p className="hero-intro">
            Hey there, I'm <span>Abhinav.</span>
          </p>

          <h1>
            Building digital
            <br className="desktop-break" /> experiences{' '}
            <span className="headline-accent">that matter.</span>
          </h1>

          <p className="hero-description">
            Full Stack Developer blending thoughtful interfaces with
            dependable backend logic. I turn ideas into responsive,
            useful web experiences.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowDownRight size={16} />
            </a>

            <a
              className="button button-secondary"
              href={profile.resume}
              download
            >
              <Download size={15} /> Download resume
            </a>
          </div>

          <div className="hero-socials">
            <SocialLink href={profile.github} label="GitHub profile">
              <Github size={15} /> GitHub
            </SocialLink>

            <SocialLink href={profile.linkedin} label="LinkedIn profile">
              <Linkedin size={15} /> LinkedIn
            </SocialLink>

            <SocialLink
              href={`mailto:${profile.email}`}
              label="Send email"
            >
              <Mail size={15} /> Email
            </SocialLink>
          </div>
        </motion.div>

        <motion.div
          className="hero-art hero-photo-art"
          aria-label="Portrait of Abhinav Tripathi"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 0.12,
          }}
        >
          <div className="portrait-caption">
            <span className="tiny-square" />
            A LITTLE ABOUT THE DEVELOPER
            <span className="art-caption-line" />
          </div>

          <div className="portrait-glow" aria-hidden="true" />

          <figure className="portrait-frame">
            <img
              src="/abhinav.jpg"
              alt="Portrait of Abhinav Tripathi, Full Stack Developer"
              fetchPriority="high"
              decoding="async"
            />

            <div className="portrait-shade" aria-hidden="true" />

            <figcaption className="portrait-caption-bottom">
              <span className="portrait-overline">
                FULL STACK DEVELOPER
              </span>
              <span className="portrait-name">Abhinav Tripathi</span>
              <span className="portrait-role">
                React · Next.js · Node.js · Python
              </span>
            </figcaption>

            <span className="portrait-corner" aria-hidden="true">
              <ArrowUpRight size={17} />
            </span>
          </figure>

          <div className="portrait-chip portrait-chip--top">
            <span className="chip-icon">
              <Code2 size={14} />
            </span>
            <span>
              <b>Thoughtful UI</b>
              <small>Built with intent</small>
            </span>
          </div>

          <div className="portrait-chip portrait-chip--bottom">
            <span className="chip-icon chip-icon--blue">
              <Globe2 size={14} />
            </span>
            <span>
              <b>Full Stack</b>
              <small>Front to back</small>
            </span>
          </div>

          <div className="portrait-index">
            01 <span>/</span> 04
          </div>
        </motion.div>
      </div>

      <a className="scroll-cue" href="#about">
        <span>SCROLL TO DISCOVER</span>
        <ArrowDown size={13} />
      </a>
    </section>
  )
}

function About() {
  return (
    <section className="section-wrap section-about" id="about">
      <div className="container about-layout">
        <Reveal>
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title={
              <>
                Curious by nature.
                <br />
                <span className="muted-heading">
                  Developer by choice.
                </span>
              </>
            }
          />
        </Reveal>

        <Reveal delay={0.08} className="about-copy">
          <p className="about-lead">
            I enjoy building digital products that are as practical as
            they are considered.
          </p>

          <p>
            I'm a Full Stack Developer with hands-on project and internship
            experience across React, Next.js, Node.js, Python, and databases.
            I like connecting the details of a clean interface with the
            logic that makes an application work.
          </p>

          <p>
            I'm continuously learning, improving how I solve problems,
            and looking to contribute to a development team where I can
            build useful software and grow alongside experienced engineers.
          </p>

          <a className="text-link" href="#experience">
            A little more about my journey <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>

      <div className="container about-facts">
        <Reveal className="fact-card">
          <span className="fact-icon">
            <Code2 size={17} />
          </span>
          <span className="fact-label">CURRENT FOCUS</span>
          <strong>Full Stack Development</strong>
          <p>From responsive UI to API integrations.</p>
        </Reveal>

        <Reveal delay={0.05} className="fact-card">
          <span className="fact-icon">
            <Sparkles size={17} />
          </span>
          <span className="fact-label">MY APPROACH</span>
          <strong>Learn by building</strong>
          <p>Turn concepts into working projects.</p>
        </Reveal>

        <Reveal delay={0.1} className="fact-card">
          <span className="fact-icon">
            <MapPin size={17} />
          </span>
          <span className="fact-label">OPEN TO</span>
          <strong>Fresher &amp; junior roles</strong>
          <p>Internships and entry-level teams.</p>
        </Reveal>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section-wrap section-skills" id="skills">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="THE TOOLKIT"
            title={
              <>
                Tools I use to turn
                <br />
                <span className="muted-heading">
                  ideas into software.
                </span>
              </>
            }
            description="A growing set of technologies for building complete, useful web applications."
          />
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon] || Code2

            return (
              <Reveal
                key={group.title}
                delay={index * 0.055}
                className="skill-card"
              >
                <div className="skill-card-top">
                  <span className="skill-icon">
                    <Icon size={18} strokeWidth={1.7} />
                  </span>
                  <span className="skill-index">
                    0{index + 1}
                  </span>
                </div>

                <h3>{group.title}</h3>
                <p>{group.description}</p>

                <div className="skill-tags">
                  {group.skills.map((skill) => {
                    const SkillIcon = skillIcons[skill] || Code2

                    return (
                      <span
                        className="skill-tag"
                        key={skill}
                        title={skill}
                      >
                        <SkillIcon
                          className="skill-tech-icon"
                          size={13}
                          aria-hidden="true"
                          style={{
                            color: skillIconColors[skill] || 'currentColor',
                          }}
                        />
                        {skill}
                      </span>
                    )
                  })}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section-wrap section-projects" id="projects">
      <div className="container">
        <Reveal>
          <div className="section-row">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title={
                <>
                  A few things I've
                  <br />
                  <span className="muted-heading">
                    put into the world.
                  </span>
                </>
              }
              description="A selection of projects where I’ve worked across interface, application logic, and data."
            />

            <span className="project-count">
              03 <span>PROJECTS</span>
            </span>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section
      className="section-wrap section-experience"
      id="experience"
    >
      <div className="container experience-layout">
        <Reveal>
          <SectionHeading
            eyebrow="THE JOURNEY SO FAR"
            title={
              <>
                Learning through
                <br />
                <span className="muted-heading">
                  real-world work.
                </span>
              </>
            }
            description="A quick look at the experiences that have shaped how I work."
          />
        </Reveal>

        <div className="timeline">
          {experience.map((item, index) => (
            <Reveal
              key={item.role}
              delay={index * 0.08}
              className="timeline-item"
            >
              <div className="timeline-marker">
                <span />
              </div>

              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>

                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [formStatus, setFormStatus] = useState({
    type: 'idle',
    message: '',
  })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  const handleContactSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const submittedValues = Object.fromEntries(
      new FormData(form).entries()
    )

    // Honeypot: ignore automated submissions that fill the hidden field.
    if (submittedValues._honey) return

    setIsSending(true)
    setFormStatus({
      type: 'loading',
      message: 'Sending your message…',
    })

    const payload = {
      name: submittedValues.name || 'Portfolio visitor',
      email: submittedValues.email,
      reason: submittedValues.reason,
      query: submittedValues.query,
      _subject: `Portfolio enquiry — ${submittedValues.reason}`,
      _replyto: submittedValues.email,
      _template: 'table',
      _honey: '',
    }

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${profile.email}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      )

      const result = await response.json()

      if (
        !response.ok ||
        result.success === false ||
        result.success === 'false' ||
        result.error
      ) {
        throw new Error(
          result.message ||
          result.error ||
          'The form service could not accept your message.'
        )
      }

      setFormStatus({
        type: 'success',
        message:
          'Thanks — your message has been submitted. I’ll get back to you at the email you provided.',
      })

      form.reset()
    } catch {
      setFormStatus({
        type: 'error',
        message:
          'Your message could not be sent right now. Please try again or email me directly at ' +
          profile.email +
          '.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="section-wrap section-contact" id="contact">
      <div className="container">
        <Reveal className="contact-panel contact-panel--form">
          <div className="contact-glow" aria-hidden="true" />

          <div className="contact-layout">
            <div className="contact-intro">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                HAVE SOMETHING IN MIND?
              </span>

              <h2>
                Let's build something
                <br />
                <span className="headline-accent">meaningful.</span>
              </h2>

              <p>
                Have a role, project, collaboration, or question in mind?
                Send me a note using the form. Your message will arrive
                by email.
              </p>

              <div className="contact-actions contact-actions--left">
                <a
                  className="button button-primary"
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(
                    'Opportunity to connect'
                  )}`}
                >
                  Email me directly <ArrowUpRight size={16} />
                </a>

                <button
                  className="button button-secondary copy-email"
                  type="button"
                  onClick={copyEmail}
                >
                  {copied ? <Check size={15} /> : <Mail size={15} />}
                  {copied ? 'Email copied' : 'Copy email'}
                </button>
              </div>

              <div className="contact-availability">
                <span className="availability-pulse" />
                Available for relevant opportunities
              </div>

              <a
                className="contact-email"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </div>

            <form
              className="contact-form"
              onSubmit={handleContactSubmit}
            >
              <div className="contact-form-heading">
                <span>CONTACT FORM</span>
                <small>Fields marked * are required</small>
              </div>

              <div className="contact-form-grid">
                <div className="form-field form-field--full">
                  <label htmlFor="contact-name">
                    Your name <span>optional</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="How should I address you?"
                    maxLength={120}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email-address">
                    Your email address *
                  </label>
                  <input
                    id="contact-email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    maxLength={254}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-reason">
                    Reason for contacting me *
                  </label>
                  <select
                    id="contact-reason"
                    name="reason"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a reason
                    </option>
                    <option value="Job or internship opportunity">
                      Job or internship opportunity
                    </option>
                    <option value="Project or freelance inquiry">
                      Project or freelance inquiry
                    </option>
                    <option value="Collaboration">
                      Collaboration
                    </option>
                    <option value="Technical question">
                      Technical question
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-field form-field--full">
                  <label htmlFor="contact-query">Your query *</label>
                  <textarea
                    id="contact-query"
                    name="query"
                    rows={5}
                    placeholder="Tell me a little about what you have in mind…"
                    maxLength={5000}
                    required
                  />
                </div>
              </div>

              <input
                className="contact-honey"
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <button
                className="button button-primary contact-submit"
                type="submit"
                disabled={isSending}
              >
                {isSending ? (
                  <LoaderCircle size={15} className="spin-icon" />
                ) : (
                  <Send size={15} />
                )}
                {isSending ? 'Sending message…' : 'Send message'}
              </button>

              {formStatus.message && (
                <p
                  className={`contact-form-status contact-form-status--${formStatus.type}`}
                  role={formStatus.type === 'error' ? 'alert' : 'status'}
                  aria-live="polite"
                >
                  {formStatus.type === 'success' ? (
                    <CheckCircle2 size={16} />
                  ) : formStatus.type === 'error' ? (
                    <AlertCircle size={16} />
                  ) : (
                    <LoaderCircle size={16} className="spin-icon" />
                  )}

                  <span>{formStatus.message}</span>
                </p>
              )}

              <p className="contact-privacy-note">
                Your details are sent through FormSubmit to my inbox and
                used to respond to your enquiry.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home">
          <BrandMark />
          <span className="brand-name">Abhinav Tripathi</span>
        </a>

        <p>
          Designed and Developed by Abhinav Tripathi{' '}
          <span>© {new Date().getFullYear()}</span>
        </p>

        <div className="footer-socials">
          <a
            href={profile.github}
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
          </a>
 
          <a
            href={profile.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} />
          </a>

          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={16} />
          </a>

          <a
            className="back-to-top"
            href="#home"
            aria-label="Back to top"
          >
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return window.localStorage.getItem('portfolio-theme') === 'light'
        ? 'light'
        : 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.body.dataset.theme = theme

    try {
      window.localStorage.setItem('portfolio-theme', theme)
    } catch {
      // The portfolio still works if browser storage is disabled.
    }

    const themeColorMeta = document.querySelector(
      'meta[name="theme-color"]'
    )

    if (themeColorMeta) {
      themeColorMeta.setAttribute(
        'content',
        theme === 'light' ? '#f7f7fb' : '#09090b'
      )
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
