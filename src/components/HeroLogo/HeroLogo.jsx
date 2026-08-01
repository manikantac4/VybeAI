import HeroScene from './HeroScene';
import { COLORS } from './utils/constants';

/**
 * Drop this anywhere in a scroll page. It fires its own assembly
 * animation the first time it enters the viewport, disassembles when
 * scrolled past (direction-aware — see useLogoAssembly), and re-plays
 * every time it re-enters.
 */
export default function HeroLogo() {
  return (
    <div
      className="w-full flex items-center justify-center px-6"
      style={{ background: COLORS.bgWhite, minHeight: '100vh' }}
    >
      <HeroScene
        className="w-full max-w-3xl aspect-[1240/1160]"
        style={{ overflow: 'visible' }}
      />
    </div>
  );
}
