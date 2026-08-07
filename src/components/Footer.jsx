import { Link } from 'react-router-dom'

const contactDetails = [
  { label: 'EMAIL', value: 'hello@turingwings.com', href: 'mailto:hello@turingwings.com' },
  { label: 'PHONE', value: '+1 (555) 019-2834', href: 'tel:+15550192834' },
]

const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer
      className="pt-8 sm:pt-12 pb-0 font-sans overflow-hidden"
      style={{ backgroundColor: '#000000', color: '#9ca3af', borderTop: '1px solid rgba(255,255,255,0.1)' }}
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8 md:px-12">

        {/* Top Info, Contact & Social Chips Section */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-6 sm:pb-8 items-start"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >

          {/* Brand Vision Statement with Custom Icon */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-3">
                {/* Custom icon from /public/Logos/WhiteFill.png — no box, transparent, full size */}
                <img
                  src="/public/Logos/WhiteFill.png"
                  alt="Turing Wings"
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain shrink-0"
                />
              </div>
            </div>
          </div>

          {/* Contact Details Row */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex flex-col gap-1.5 min-w-0">
                  <span
                    className="text-[10px] font-mono font-bold uppercase tracking-widest"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                  >
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-xs sm:text-sm font-medium transition-colors duration-200 underline underline-offset-4 truncate"
                      style={{ color: '#d1d5db', textDecorationColor: 'rgba(255,255,255,0.25)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#34d399')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#d1d5db')}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      className="text-xs sm:text-sm font-medium truncate"
                      style={{ color: 'rgba(255,255,255,0.8)' }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Connect Chips / Pills */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span
              className="text-[10px] font-mono font-bold uppercase tracking-widest"
              style={{ color: 'rgba(255,255,255,0.4)' }}
            >
              CONNECT WITH US
            </span>
            <div className="flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#d1d5db',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff'
                    e.currentTarget.style.color = '#000000'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = '#d1d5db'
                  }}
                >
                  <span>{social.label}</span>
                  <span
                    className="text-[10px] font-mono opacity-40 transition-[transform,opacity] duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Quote Row */}
        <div className="py-6 sm:py-8 flex justify-center px-2">
          <p
            className="font-serif italic text-base xs:text-lg sm:text-2xl md:text-3xl leading-snug text-center whitespace-nowrap"
            style={{
              color: '#d1d5db',
              textShadow: '0 0 14px rgba(255,255,255,0.15), 0 0 32px rgba(255,255,255,0.06)',
            }}
          >
            "Built by engineers, for engineers."
          </p>
        </div>

        {/* Legal & Copyright Row */}
        <div
          className="pt-4 pb-1 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs font-mono"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          <p>© {new Date().getFullYear()} Turing Wings. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="transition-colors duration-200"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="transition-colors duration-200"
              style={{ color: 'inherit' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
            >
              Terms of Service
            </Link>
          </div>
        </div>

      </div>

      {/* Half-Cut "TURING WINGS" Text at Very Bottom, dimmed against black */}
      <div
        className="w-full overflow-hidden pointer-events-none select-none flex justify-center -mb-2 sm:-mb-4 mt-0 pt-1"
        style={{
          background: 'linear-gradient(to top, rgba(255,255,255,0.03), transparent)',
        }}
      >
        <h1
          className="text-[15vw] xs:text-[13vw] sm:text-[12.5vw] md:text-[13.5vw] font-black tracking-tighter leading-none uppercase whitespace-nowrap text-center translate-y-[26%] sm:translate-y-[28%]"
          style={{
            color: '#d1d5db',
            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))',
          }}
        >
          TURING WINGS
        </h1>
      </div>
    </footer>
  )
}