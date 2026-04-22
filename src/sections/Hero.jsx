import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import MagneticButton from '../components/MagneticButton';

export default function Hero() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Zoom out effect on scroll
      gsap.to(wrapperRef.current, {
        scale: 0.8,
        opacity: 0,
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true,
        },
      });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Image fade + scale
      tl.fromTo('.hero-img', 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 1.5 },
        0
      );

      // Stagger text reveal
      tl.fromTo('.hero-text span', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        0.3
      );
      
      tl.fromTo('.hero-button',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
        0.8
      );
    }, containerRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-transparent z-10 transition-colors duration-1000">
      <div ref={wrapperRef} className="container relative z-10 mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
        
        <div className="relative z-10 max-w-5xl flex flex-col items-center">
          <div className="hero-img mb-8 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-brand-400/30 shadow-[0_0_50px_rgba(45,212,191,0.2)] relative">
            <div className="absolute inset-0 bg-brand-400/20 mix-blend-overlay z-10 pointer-events-none"></div>
            <img src="/Gemini_Generated_Image_n5mn99n5mn99n5mn.png" alt="Vishnu Vardhan" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
            
            {/* Floating code UI elements */}
            <div className="absolute top-6 left-6 flex items-center justify-center w-6 h-6 bg-dark-900/80 backdrop-blur-md rounded-full border border-white/20 animate-bounce z-20 shadow-[0_0_10px_rgba(255,255,255,0.2)]">
               <span className="text-[8px] text-brand-400 font-mono">{'</>'}</span>
            </div>
            <div className="absolute bottom-6 right-6 flex items-center justify-center w-8 h-8 bg-brand-400/20 backdrop-blur-md rounded-lg border border-brand-400/50 animate-pulse z-20 shadow-[0_0_15px_rgba(45,212,191,0.5)]" style={{ animationDuration: '3s' }}>
            </div>
          </div>
          
          <h3 className="hero-text text-brand-400 font-mono text-sm md:text-base tracking-widest mb-4 uppercase">
            <span className="inline-block">Hi, I'm Vishnu Vardhan</span>
          </h3>
          <h1 className="hero-text text-6xl md:text-[90px] font-black tracking-tighter mb-4 text-slate-100 uppercase leading-[1.1]">
            <span className="inline-block">Full Stack</span> <br /> <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-brand-400 to-indigo-400">Developer</span>
          </h1>
          <h2 className="hero-text text-2xl md:text-4xl font-medium text-slate-300 mt-4 mb-8">
            <span className="inline-block">I Build the Infrastructure Behind the Product</span>
          </h2>
          
          <p className="hero-text text-lg md:text-xl text-slate-400 mb-12 max-w-3xl leading-relaxed">
            <span className="inline-block">From self-hosted code execution engines on AWS to real-time CRM platforms - I engineer full-stack systems that handle production load from day one.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <div className="hero-button">
              <MagneticButton onClick={() => window.scrollTo({top: window.innerHeight * 3, behavior: 'smooth'})} className="px-10 py-5 bg-brand-400 text-dark-900 font-bold rounded-full border border-transparent shadow-[0_0_30px_rgba(45,212,191,0.4)] transition-all hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.6)]">
                View Work
              </MagneticButton>
            </div>
            <div className="hero-button">
              <MagneticButton onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})} className="px-10 py-5 glass-panel text-white font-bold rounded-full border border-white/20 transition-all duration-300 hover:bg-white/10 hover:border-white/40">
                Contact Me
              </MagneticButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
