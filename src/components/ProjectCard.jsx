import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import ProjectVisual from './ProjectVisual'
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiGoogle,
  SiTailwindcss,
} from 'react-icons/si'

const projectTechIcons = {
  React: SiReact,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Mongoose: Code2,
  JWT: SiJsonwebtokens,
  'Google OAuth': SiGoogle,
  'Tailwind CSS': SiTailwindcss,
  
}

function ProjectLink({ href, children, muted = false, download = false }) {
  if (!href) return <span className="project-link project-link--missing" aria-label={`${children} link needs to be added`}>{children}<span className="missing-dot" /></span>
  return <a className={`project-link ${muted ? 'project-link--muted' : ''}`} href={href} target={href.startsWith('#') ? undefined : '_blank'} rel={href.startsWith('#') ? undefined : 'noreferrer'} download={download}>
    {children}{href.startsWith('#') ? <ArrowUpRight size={14} /> : <ExternalLink size={13} />}
  </a>
}

export default function ProjectCard({ project, index }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.article className={`project-card ${project.featured ? 'project-card--featured' : ''}`} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.08 }}>
      <ProjectVisual type={project.visual} />
      <div className="project-card-content">
        <div className="project-meta"><span>{project.kind}</span><span className="project-number">{project.number}</span></div>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
       <div className="tech-tags" aria-label="Technologies used">
  {project.stack.map((item) => {
    const TechIcon = projectTechIcons[item] || Code2

    return (
      <span className="tech-tag" key={item}>
        <TechIcon size={14} aria-hidden="true" />
        {item}
      </span>
    )
  })}
</div>
        <div className="project-actions">
          <ProjectLink href={project.demo}>{project.demo ? 'Live demo' : 'Add live demo'}</ProjectLink>
          <ProjectLink href={project.source} muted><Code2 size={14} /> {project.source ? 'Source code' : project.sourceLabel}</ProjectLink>
        </div>
      </div>
    </motion.article>
  )
}
