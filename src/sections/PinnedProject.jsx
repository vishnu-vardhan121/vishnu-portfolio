import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PinnedProject() {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      
      // Pin right panel ONLY on desktop
      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          pin: rightPanelRef.current,
          scrub: true,
        });
      });

      // Background transition on scroll
      gsap.to(containerRef.current, {
        backgroundColor: '#0a192f', // Deep cinematic blue transition
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        }
      });
      
      const items = gsap.utils.toArray('.pinned-feature');
      items.forEach((item) => {
        gsap.fromTo(item, 
          { opacity: 0, y: 150 }, 
          { 
            opacity: 1, 
            y: 0,
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              end: 'top 40%',
              scrub: true
            }
          }
        );
      });

    }, containerRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#050505] border-y border-brand-400/10 transition-colors duration-1000 z-30">
      <div className="container mx-auto px-6 h-full flex flex-col md:flex-row relative z-10 w-full max-w-7xl">
        
        {/* Left Scrollable Content */}
        <div ref={leftPanelRef} className="w-full md:w-1/2 py-20 md:py-[20vh] flex flex-col gap-12 md:gap-[20vh]">
          
          <div className="pinned-feature glass-panel p-10 rounded-[30px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-400/5 blur-[50px]"></div>
            <h4 className="relative z-10 text-brand-400 font-mono text-sm tracking-widest mb-4 uppercase">Execution</h4>
            <h3 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-6">Multi-language code runner</h3>
            <p className="relative z-10 text-base md:text-lg text-slate-300 leading-relaxed">Self-hosted Judge0 on EC2 processes concurrent submissions across languages with per-test-case precision scoring and instant feedback.</p>
          </div>

          <div className="pinned-feature glass-panel p-10 rounded-[30px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-500/5 blur-[50px]"></div>
            <h4 className="relative z-10 text-indigo-400 font-mono text-sm tracking-widest mb-4 uppercase">Infrastructure</h4>
            <h3 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-6">Auto-scaling AWS stack</h3>
            <p className="relative z-10 text-base md:text-lg text-slate-300 leading-relaxed">EC2 + Application Load Balancer + Auto Scaling Groups absorb traffic spikes without manual intervention - engineered for peak exam-day concurrency.</p>
          </div>

          <div className="pinned-feature glass-panel p-10 rounded-[30px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute inset-0 bg-rose-500/5 blur-[50px]"></div>
            <h4 className="relative z-10 text-brand-400 font-mono text-sm tracking-widest mb-4 uppercase">Security</h4>
            <h3 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-6">Proctored test environment</h3>
            <p className="relative z-10 text-base md:text-lg text-slate-300 leading-relaxed">Access-code gating, tab-switch tracking, server-synced timers, and controlled test windows - integrity at scale across thousands of concurrent sessions.</p>
          </div>

          <div className="pinned-feature glass-panel p-10 rounded-[30px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute inset-0 bg-emerald-500/5 blur-[50px]"></div>
            <h4 className="relative z-10 text-brand-400 font-mono text-sm tracking-widest mb-4 uppercase">Product</h4>
            <h3 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-6">Full evaluation pipeline</h3>
            <p className="relative z-10 text-xl text-slate-300 leading-relaxed">OTP registration (MSG91), MCQ + coding test workflows, leaderboards, scholarship hiring logic, and mentor/admin tooling for problem authoring and submission monitoring.</p>
          </div>

        </div>

        {/* Right Pinned Panel (Hero) */}
        <div className="flex w-full md:w-1/2 min-h-[50vh] md:h-screen md:fixed-anchor md:right-0 justify-center order-first md:order-last mt-16 md:mt-0 relative z-20">
          <div ref={rightPanelRef} className="h-full w-full flex items-center justify-center p-4 md:p-12 relative perspective-[1000px]">
            <div className="w-full md:w-[500px] aspect-auto md:aspect-square rounded-3xl md:rounded-full flex flex-col items-center justify-center text-center p-8 md:p-14 relative glow-accent" style={{ transform: 'rotateX(5deg) rotateY(-5deg)' }}>
               <div className="absolute inset-0 bg-[#050505]/60 backdrop-blur-3xl border border-white/10 rounded-[40px] shadow-[0_0_80px_rgba(0,0,0,0.8)] z-10" />
               <div className="relative z-20">
                  <h2 className="text-brand-400 font-mono text-xs tracking-widest mb-4 md:mb-6 uppercase border border-brand-400/30 px-4 py-2 rounded-full inline-block bg-brand-400/10">Deep Dive</h2>
                  <h3 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 leading-tight flex flex-col gap-1 md:gap-2">
                    Assessment Platform
                    <span className="text-xl md:text-3xl font-normal text-slate-400">+ Judge0 Execution Engine</span>
                  </h3>
                  <p className="text-base md:text-lg text-slate-300 leading-relaxed md:max-w-xl">Engineered a full-scale coding evaluation platform from scratch - OTP registration, MCQ + coding tests, multi-language real-time execution via self-hosted Judge0 on AWS EC2, proctored test windows, and live leaderboards.</p>
               </div>
            </div>
            
            {/* Ambient Background Flare */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-400/10 blur-[150px] mix-blend-screen pointer-events-none rounded-full" />
          </div>
        </div>

      </div>
    </section>
  );
}
