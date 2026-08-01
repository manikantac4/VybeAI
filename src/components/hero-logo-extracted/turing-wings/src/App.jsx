import { HeroLogo } from './components/HeroLogo';

// Demo scroll page: filler sections above/below so the assembly and
// direction-aware disassembly are easy to see while scrolling.
export default function App() {
  return (
    <main>
      <section className="w-full min-h-screen flex items-center justify-center" style={{ background: '#f5f5f5' }}>
        <p className="text-xl" style={{ color: '#111' }}>Scroll down to meet the mark ↓</p>
      </section>

      <HeroLogo />

      <section className="w-full min-h-screen flex items-center justify-center" style={{ background: '#f5f5f5' }}>
        <p className="text-xl" style={{ color: '#111' }}>Scroll back up to watch it retrace ↑</p>
      </section>
    </main>
  );
}
