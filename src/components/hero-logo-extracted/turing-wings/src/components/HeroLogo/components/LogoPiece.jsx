import { motion } from 'framer-motion';
import { EASE_ASSEMBLE, EASE_EXIT } from '../utils/constants';

/**
 * One piece of the logo (center mark or a wing).
 *
 * `origin`   — { x, y, rotate } offstage position it flies in from.
 * `delay`    — seconds after the assembly starts before this piece moves.
 * `controls` — a framer-motion `useAnimation()` instance driven by the
 *              parent's scroll-direction logic (see useLogoAssembly.js).
 *
 * Three variants:
 *   hidden     — offstage at `origin`, used for the very first mount and
 *                for a reversed (scroll-up) exit, so the piece retraces
 *                the exact path it flew in on.
 *   assembled  — locked in place at (0,0,0).
 *   dispersed  — offstage further out than `origin` and faded, used when
 *                the section is scrolled *past* (scroll-down exit), so
 *                the pieces drift apart and fade rather than snap back.
 */
export default function LogoPiece({ d, origin, delay, controls, children }) {
  const variants = {
    hidden: {
      x: origin.x,
      y: origin.y,
      rotate: origin.rotate,
      opacity: 0,
      transition: { duration: 0.01 },
    },
    assembled: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.9, delay, ease: EASE_ASSEMBLE },
    },
    dispersed: {
      x: origin.x * 1.6,
      y: origin.y * 1.6,
      rotate: origin.rotate * 1.8,
      opacity: 0,
      transition: { duration: 0.6, delay: delay * 0.4, ease: EASE_EXIT },
    },
  };

  return (
    <motion.g
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ filter: 'url(#tw-drop-shadow)' }}
    >
      <path d={d} fill="url(#tw-metal)" stroke="url(#tw-gold)" strokeWidth="6" strokeLinejoin="round" />
      {children}
    </motion.g>
  );
}
