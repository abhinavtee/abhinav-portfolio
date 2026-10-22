import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../data/portfolio'
import BrandMark from './BrandMark'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ theme = 'dark', onToggleTheme = () => {} }) {
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label={`${profile.name}, home`}>
          <BrandMark />
          <span className="brand-name">Abhinav Tripathi</span>
        </a>

        <div className="desktop-nav">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>

        <a className="nav-resume" href={profile.resume} download>
          Resume <ArrowUpRight size={14} strokeWidth={1.8} />
        </a>

        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={theme === 'light'} title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}>
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.22 }}
          >
            {links.map((link, index) => (
              <motion.a key={link.href} href={link.href} onClick={closeMenu} initial={reduceMotion ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : index * 0.035 }}>
                {link.label}<ArrowUpRight size={15} />
              </motion.a>
            ))}
            <a className="mobile-resume" href={profile.resume} download onClick={closeMenu}>Download resume <ArrowUpRight size={15} /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
