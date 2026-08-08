import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavAnchor = (hash) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const id = hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    } else {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-sm' : ''}`}>
      <div className="mx-auto flex h-14 md:h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 md:px-12">
        <Link to="/" aria-label="Turing Wings home" className="flex items-center overflow-hidden h-7 sm:h-8 md:h-11 shrink-0">
          <img src="/Logos/BlackFillNoBg.png" alt="Turing Wings" className="h-[160%] w-auto object-contain object-top" />
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-4">
          <Link
            to="/cohorts"
            className="group hidden sm:inline-flex items-center gap-1.5 rounded-full border border-black/20 px-4 md:px-6 py-2 text-[9px] md:text-[10px] font-bold tracking-[.1em] md:tracking-[.15em] uppercase text-black transition-colors duration-200 hover:border-[#22C55E] hover:text-[#22C55E] bg-white cursor-pointer whitespace-nowrap"
          >
            <span>Explore Cohorts</span>
            <span className="text-[10px] font-mono opacity-40 transition-[transform,opacity] duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>

          <Link
            to="/buildathons"
            className="group inline-flex items-center gap-1 sm:gap-1.5 rounded-full border border-black/20 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-[9px] md:text-[10px] font-bold tracking-[.1em] md:tracking-[.15em] uppercase text-black transition-colors duration-200 hover:border-[#22C55E] hover:text-[#22C55E] bg-white whitespace-nowrap"
          >
            <span>Buildathons</span>
            <span className="text-[10px] font-mono opacity-40 transition-[transform,opacity] duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 rounded-full border border-black/20 px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 text-[9px] md:text-[10px] font-bold tracking-[.1em] md:tracking-[.15em] uppercase text-black transition-colors duration-200 hover:border-[#22C55E] hover:text-[#22C55E] bg-white whitespace-nowrap"
          >
            <span>Contact</span>
            <span className="text-[10px] font-mono opacity-40 transition-[transform,opacity] duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-full border border-black/20 text-black bg-white shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            <span className="block h-[1px] w-4 bg-current"></span>
          </button>
        </div>
      </div>

      {/* Mobile / Full Dropdown Menu */}
      {menuOpen && (
        <div className="bg-white border-b border-black/10 px-6 py-6 space-y-4 shadow-xl text-left animate-in fade-in max-w-[1600px] mx-auto md:hidden">
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleNavAnchor('#top')}
              className="text-left text-xs font-mono font-bold uppercase tracking-wider text-black/70 hover:text-[#22C55E]"
            >
              01 / Ecosystem
            </button>
            <button
              onClick={() => handleNavAnchor('#experience')}
              className="text-left text-xs font-mono font-bold uppercase tracking-wider text-black/70 hover:text-[#22C55E]"
            >
              02 / Evolution & Engineering
            </button>
            <Link
              to="/cohorts"
              onClick={() => setMenuOpen(false)}
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#22C55E]"
            >
              03 / Flagship Cohorts
            </Link>
            <Link
              to="/buildathons"
              onClick={() => setMenuOpen(false)}
              className="text-xs font-mono font-bold uppercase tracking-wider text-[#22C55E]"
            >
              04 / Buildathons Directory
            </Link>
            <button
              onClick={() => handleNavAnchor('#community')}
              className="text-left text-xs font-mono font-bold uppercase tracking-wider text-black/70 hover:text-[#22C55E]"
            >
              05 / Community & Why Turing Wings
            </button>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-xs font-mono font-bold uppercase tracking-wider text-black/70 hover:text-[#22C55E]"
            >
              06 / Contact Leads & Mentors
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}