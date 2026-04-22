import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Impact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Glow pulse on scroll
      gsap.to('.impact-bg', {
        opacity: 0.8,
        scale: 1.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      });

      gsap.from('.metric-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out',
        duration: 1
      });
      
      const counters = document.querySelectorAll('.counter-val');
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target'));
        if(target > 0) {
          gsap.to(counter, {
            innerHTML: target,
            duration: 2.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
            },
            snap: { innerHTML: 1 },
          });
        }
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#050505] relative z-20 border-y border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden">
      <div className="impact-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%] bg-brand-400/10 blur-[120px] pointer-events-none mix-blend-screen opacity-0" />
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="metric-card flex flex-col items-center justify-center text-center px-4 group py-6 md:py-0">
            <div className="text-6xl md:text-7xl font-bold font-mono text-slate-100 flex items-center mb-4 group-hover:text-brand-400 transition-colors duration-500 glow-text">
              <span className="counter-val" data-target="1">0</span>
              <span className="text-brand-400 ml-1">+</span>
            </div>
            <span className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider leading-relaxed">Year Production Experience</span>
          </div>

          <div className="metric-card flex flex-col items-center justify-center text-center px-4 group py-6 md:py-0">
            <div className="text-6xl md:text-7xl font-bold font-mono text-slate-100 flex items-center mb-4 group-hover:text-brand-400 transition-colors duration-500 glow-text">
              <span className="counter-val" data-target="4">0</span>
              <span className="text-brand-400 ml-1">+</span>
            </div>
            <span className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider leading-relaxed">Production Systems Shipped</span>
          </div>

          <div className="metric-card flex flex-col items-center justify-center text-center px-4 group py-6 md:py-0">
            <div className="text-3xl md:text-5xl font-bold font-mono text-slate-100 flex items-center mb-4 group-hover:text-brand-400 transition-colors duration-500 glow-text">
              High-Concurrency
            </div>
            <span className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider leading-relaxed">Backend Architecture</span>
          </div>

          <div className="metric-card flex flex-col items-center justify-center text-center px-4 group py-6 md:py-0">
            <div className="text-3xl md:text-5xl font-bold font-mono text-slate-100 flex items-center mb-4 group-hover:text-brand-400 transition-colors duration-500 glow-text">
              Real-Time
            </div>
            <span className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-widest leading-relaxed">Systems Engineered</span>
          </div>

        </div>
      </div>
    </section>
  );
}
