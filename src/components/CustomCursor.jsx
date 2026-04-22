import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const xDot = gsap.quickSetter(dot, 'x', 'px');
    const yDot = gsap.quickSetter(dot, 'y', 'px');

    const xRing = gsap.quickTo(ring, 'x', { duration: 0.6, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.6, ease: "power3.out" });

    const moveCursor = (e) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);
    };

    const handleHover = () => {
      gsap.to(dot, { scale: 0, opacity: 0, duration: 0.3 });
      gsap.to(ring, { scale: 2.5, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'rgba(255, 255, 255, 0.5)', mixBlendMode: 'screen', duration: 0.3 });
    };

    const handleHoverOut = () => {
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(ring, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(45, 212, 191, 0.5)', mixBlendMode: 'normal', duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);

    // Initial binding
    const initHovers = () => {
      const interactables = document.querySelectorAll('a, button');
      interactables.forEach(el => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    };
    
    // Check periodically for React routing / dynamic DOM changes
    const interval = setInterval(initHovers, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[10000]">
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-400 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(45,212,191,1)]"
      />
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-brand-400/50 rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
