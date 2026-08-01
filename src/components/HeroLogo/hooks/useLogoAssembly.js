import { useEffect, useRef } from 'react';
import { useAnimation } from 'framer-motion';
import gsap from 'gsap';
import { TIMING } from '../utils/constants';

/**
 * Drives the whole logo sequence:
 *  - IntersectionObserver decides when the section is on/off screen.
 *  - A plain scrollY comparison decides which direction the user is
 *    moving, since that determines HOW a piece should leave:
 *      scrolling down + leaving   -> pieces disperse & fade forward
 *      scrolling up + leaving     -> pieces retrace their entry path
 *      either direction + entering -> pieces assemble
 *  - Once assembled and settled, a GSAP tween sweeps the shine once,
 *    then a slow idle float loop starts on the whole group.
 *
 * Returns { sectionRef, groupRef, shineRef, controls } to wire into the
 * markup — controls is a single framer-motion AnimationControls shared
 * by all five pieces so they can be driven in lockstep.
 */
export function useLogoAssembly() {
  const sectionRef = useRef(null);
  const groupRef = useRef(null);
  const shineRef = useRef(null);
  const controls = useAnimation();

  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const direction = useRef('down');
  const idleTween = useRef(null);
  const shineTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      direction.current = y > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(shineTimeout.current);
        idleTween.current?.kill();

        if (entry.isIntersecting) {
          controls.start('assembled');

          // Shine sweeps once the pieces have locked into place.
          shineTimeout.current = setTimeout(() => {
            if (!shineRef.current) return;
            gsap.set(shineRef.current, { x: -300, opacity: 0 });
            gsap.timeline()
              .to(shineRef.current, { opacity: 1, duration: 0.15 })
              .to(shineRef.current, { x: 1400, duration: TIMING.shineDuration, ease: 'power2.inOut' }, '<')
              .to(shineRef.current, { opacity: 0, duration: 0.2 }, '-=0.2')
              .call(() => {
                // Gentle idle float once everything has settled.
                if (groupRef.current) {
                  idleTween.current = gsap.to(groupRef.current, {
                    y: '+=10',
                    duration: 2.6,
                    ease: 'sine.inOut',
                    yoyo: true,
                    repeat: -1,
                  });
                }
              });
          }, (TIMING.lockDuration + TIMING.shineDelay) * 1000);
        } else {
          if (groupRef.current) gsap.killTweensOf(groupRef.current);
          controls.start(direction.current === 'down' ? 'dispersed' : 'hidden');
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(shineTimeout.current);
      idleTween.current?.kill();
    };
  }, [controls]);

  return { sectionRef, groupRef, shineRef, controls };
}
