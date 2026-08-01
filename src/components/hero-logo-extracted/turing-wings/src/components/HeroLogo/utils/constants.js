// Turing Wings — logo palette & motion constants
// Colors are consumed as inline style values (no Tailwind color utilities),
// per project convention: Tailwind is structural only.

export const COLORS = {
  metalDark: '#0a0a0b',
  metalMid: '#232326',
  metalLight: '#3a3a3e',
  gold: '#caa34c',
  goldBright: '#f5d787',
  goldDeep: '#8a6a24',
  bgWhite: '#ffffff',
  shadow: 'rgba(0,0,0,0.35)',
};

// Each piece's off-stage starting point, expressed as a translate (px) +
// rotation (deg) it animates FROM when entering, and animates back TO
// when it exits in the same direction it came from.
export const ORIGINS = {
  centerMark:     { x: 0,    y: -220, rotate: -6  },
  leftUpperWing:  { x: -320, y: -140, rotate: -18 },
  rightUpperWing: { x: 320,  y: -140, rotate: 18  },
  leftLowerWing:  { x: -260, y: 220,  rotate: 14  },
  rightLowerWing: { x: 260,  y: 220,  rotate: -14 },
};

// Stagger start times (seconds) within the assembly timeline.
export const TIMING = {
  centerMark: 0.0,
  leftUpperWing: 0.2,
  rightUpperWing: 0.35,
  leftLowerWing: 0.55,
  rightLowerWing: 0.75,
  lockDuration: 0.7,
  shineDelay: 1.0,
  shineDuration: 0.9,
  idleDelay: 1.5,
};

export const EASE_ASSEMBLE = [0.16, 1, 0.3, 1]; // easeOutExpo-ish, with a settle
export const EASE_EXIT = [0.6, 0, 0.9, 0.2];     // fast-out, matches original path
