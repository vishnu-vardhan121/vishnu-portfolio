import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function MagneticButton({ children, className = '', ...props }) {
  const containerRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const element = elementRef.current;

    const xTo = gsap.quickSetter(element, 'x', 'px');
    const yTo = gsap.quickSetter(element, 'y', 'px');

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = container.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      
      xTo(x * 0.4); 
      yTo(y * 0.4);
    };

    const handleMouseLeave = () => {
      gsap.to(element, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block overflow-visible p-2 group">
      <button ref={elementRef} className={`${className} transition-transform duration-100 ease-linear hover:shadow-[0_0_30px_rgba(45,212,191,0.3)]`} {...props}>
        {children}
      </button>
    </div>
  );
}
