import { useId } from 'react'

export default function BrandMark() {
  const gradientId = `brand-stroke-${useId().replace(/:/g, '')}`

  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 44 44" focusable="false">
        <defs>
          <linearGradient id={gradientId} x1="10" y1="34" x2="34" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#b6a2ff" />
            <stop offset="1" stopColor="#8eb8ff" />
          </linearGradient>
        </defs>
        <path d="M11.5 31.5 21.8 11.8 32.5 31.5" fill="none" stroke={`url(#${gradientId})`} strokeWidth="3.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.1 23.5h11.4" fill="none" stroke="#c9bcff" strokeWidth="2.8" strokeLinecap="round" />
        <circle cx="32.7" cy="11.8" r="2.6" fill="#91b8ff" />
        <circle cx="32.7" cy="11.8" r="5.1" fill="#91b8ff" opacity="0.12" />
      </svg>
    </span>
  )
}
