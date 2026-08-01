import { COLORS } from '../utils/constants';

// Gradient + filter definitions shared by every logo piece.
// Kept in one place so all five pieces read as a single brushed-metal
// material rather than five independently-styled shapes.
export default function LogoDefs() {
  return (
    <defs>
      <linearGradient id="tw-metal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.metalLight} />
        <stop offset="45%" stopColor={COLORS.metalMid} />
        <stop offset="100%" stopColor={COLORS.metalDark} />
      </linearGradient>

      <linearGradient id="tw-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={COLORS.goldBright} />
        <stop offset="50%" stopColor={COLORS.gold} />
        <stop offset="100%" stopColor={COLORS.goldDeep} />
      </linearGradient>

      <linearGradient id="tw-shine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor={COLORS.goldBright} stopOpacity="0" />
        <stop offset="45%" stopColor={COLORS.goldBright} stopOpacity="0.85" />
        <stop offset="55%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="100%" stopColor={COLORS.goldBright} stopOpacity="0" />
      </linearGradient>

      <filter id="tw-drop-shadow" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="14" stdDeviation="16" floodColor={COLORS.shadow} />
      </filter>
    </defs>
  );
}
