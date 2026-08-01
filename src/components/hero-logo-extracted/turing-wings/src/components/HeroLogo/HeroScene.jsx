import { useLogoAssembly } from './hooks/useLogoAssembly';
import LogoAssembler from './LogoAssembler';

// Handles the scroll-driven lifecycle; HeroLogo.jsx just adds layout/sizing.
export default function HeroScene({ className, style }) {
  const { sectionRef, groupRef, shineRef, controls } = useLogoAssembly();

  return (
    <div ref={sectionRef} className={className} style={style}>
      <LogoAssembler controls={controls} groupRef={groupRef} shineRef={shineRef} />
    </div>
  );
}
