export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'section-heading--center' : ''}`}>
      <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
