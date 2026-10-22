
const projectVisuals = {
  urlbee: {
    src: '/projects/URLBEE.png',
    alt: 'URLBee application screenshot',
  },
  infobridge: {
    src: '/projects/InfoBridge.png',
    alt: 'Info Bridge application screenshot',
  },
  portfolio: {
    src: '/projects/Portfolio.png',
    alt: 'Portfolio website screenshot',
  },
}

export default function ProjectVisual({ type }) {
  const project = projectVisuals[type] || projectVisuals.portfolio

  return (
    <div className={`visual-frame project-screenshot-frame ${type}-visual`}>
      <img
        className="project-screenshot"
        src={project.src}
        alt={project.alt}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.visibility = 'hidden'
        }}
      />
    </div>
  )
}
