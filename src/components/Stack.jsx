import { useEffect, useState, useCallback } from 'react'

// Data configuration
export const technologyStack = [
  { name: 'React', image: '/tech_logos/react.svg' },
  { name: 'Node.js', image: '/tech_logos/nodejs.svg' },
  { name: 'PostgreSQL', image: '/tech_logos/postgresql.svg' },
  { name: 'Docker', image: '/tech_logos/docker.svg' },
  { name: 'Vercel', image: '/tech_logos/vercel.svg' },
  { name: 'Stripe', image: '/tech_logos/stripe.svg' },
  { name: 'GitHub', image: '/tech_logos/github.svg' },
  { name: 'Figma', image: '/tech_logos/figma.svg' },
]

export const aiTools = [
  { name: 'ChatGPT', image: '/tech_logos/chatgpt.svg' },
  { name: 'Claude', image: '/tech_logos/claude.svg' },
  { name: 'Cursor', image: '/tech_logos/cursor.svg' },
  { name: 'Gemini', image: '/tech_logos/gemini.svg' },
  { name: 'Codex', image: '/tech_logos/codex.svg' },
  { name: 'LangChain', image: '/tech_logos/langchain.svg' },
  { name: 'LangGraph', image: '/tech_logos/langgraph.svg' },
  { name: 'MCP', image: '/tech_logos/mcp.svg' },
]

const ROTATION_INTERVAL = 4000
const TRANSITION_DURATION = 700

// Position configuration using pure Tailwind classes
const positionStyles = {
  exit: 'translate-x-[-120%] opacity-0 scale-90 pointer-events-none',
  left: 'translate-x-[0%] opacity-70 scale-95 hover:opacity-100',
  center: 'translate-x-[105%] opacity-100 scale-100 shadow-lg shadow-black/[0.03] border-black/15 bg-white',
  right: 'translate-x-[210%] opacity-70 scale-95 hover:opacity-100',
  enter: 'translate-x-[330%] opacity-0 scale-90 pointer-events-none',
}

function LogoCard({ item, position }) {
  const [imageError, setImageError] = useState(false)

  return (
    <article
      className={`
        absolute top-0 left-0 w-[30%]
        flex flex-col items-center justify-center gap-3 rounded-2xl
        border border-black/[0.08] bg-neutral-50/80 p-5 md:p-6
        transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
        will-change-transform ${positionStyles[position]}
      `}
    >
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-black/5 bg-white p-2.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
        {!imageError ? (
          <img
            src={item.image}
            alt={`${item.name} logo`}
            className="h-full w-full object-contain"
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="font-mono text-base font-bold text-neutral-700" aria-hidden="true">
            {item.name.slice(0, 1)}
          </span>
        )}
      </div>
      <p className="text-xs font-semibold tracking-wide text-neutral-800">{item.name}</p>
    </article>
  )
}

function LogoCarousel({ title, data, initialIndex = 0 }) {
  const [startIndex, setStartIndex] = useState(initialIndex % data.length)
  const [isRotating, setIsRotating] = useState(false)

  const handleNext = useCallback(() => {
    setIsRotating(true)
    setTimeout(() => {
      setStartIndex((current) => (current + 1) % data.length)
      setIsRotating(false)
    }, TRANSITION_DURATION)
  }, [data.length])

  useEffect(() => {
    const timer = setInterval(handleNext, ROTATION_INTERVAL)
    return () => clearInterval(timer)
  }, [handleNext])

  // Rolling set of 4 items to allow continuous right-to-left flow
  const rollingItems = [0, 1, 2, 3].map((offset) => data[(startIndex + offset) % data.length])

  return (
    <div className="flex flex-col justify-between rounded-3xl border border-neutral-200/80 bg-neutral-50/40 p-6 md:p-8 backdrop-blur-sm">
      {/* Header with active index dots */}
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">{title}</h3>
        <div className="flex items-center gap-1.5">
          {data.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === startIndex ? 'w-5 bg-neutral-900' : 'w-1.5 bg-neutral-200'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Overflow container with subtle edge gradient mask */}
      <div 
        className="relative h-32 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
        aria-live="polite"
      >
        <div className="relative h-full w-full">
          {rollingItems.map((item, index) => {
            const position = isRotating
              ? ['exit', 'left', 'center', 'right'][index]
              : ['left', 'center', 'right', 'enter'][index]

            return <LogoCard key={`${item.name}-${index}`} item={item} position={position} />
          })}
        </div>
      </div>
    </div>
  )
}

export default function Stack() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-6 py-20 text-neutral-900 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-neutral-400">
              02 / THE ECOSYSTEM
            </p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 md:text-6xl">
              The modern AI<br />
              <span className="text-neutral-400">engineering stack.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-neutral-500 md:text-base">
            Not a collection of isolated tools. A connected system for going from an idea to a reliable production software.
          </p>
        </div>

        {/* Carousels Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <LogoCarousel title="Core Technology Stack" data={technologyStack} />
          <LogoCarousel title="AI Tools & Intelligence" data={aiTools} initialIndex={3} />
        </div>
      </div>
    </section>
  )
}