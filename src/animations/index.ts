import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

/**
 * Global GSAP configuration and reusable animation hooks will go here in Phase 2.
 * This architecture is prepared to handle scroll choreography and 3D interactions.
 */

export const initAnimations = () => {
  // Setup global animation defaults
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.8,
  });
};
