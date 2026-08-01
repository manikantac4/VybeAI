import { forwardRef } from 'react';

// A soft diagonal gold/white band, clipped to the logo's silhouette by
// the parent <mask>, and swept left-to-right by GSAP (see
// hooks/useLogoAssembly.js). Framer Motion owns piece assembly; GSAP
// owns this single continuous sweep because it's a plain tween on one
// element rather than a staggered multi-piece sequence.
const ShineSweep = forwardRef(function ShineSweep(_props, ref) {
  return (
    <rect
      ref={ref}
      x={-400}
      y={0}
      width={300}
      height={1160}
      fill="url(#tw-shine)"
      style={{ transform: 'skewX(-20deg)', transformOrigin: 'center', opacity: 0 }}
    />
  );
});

export default ShineSweep;
