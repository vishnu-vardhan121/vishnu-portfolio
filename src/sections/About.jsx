import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function About() {
  const containerRef = useRef(null);
  const textContainerRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation 
      const lines = gsap.utils.toArray('.reveal-line');
      
      lines.forEach(line => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: line,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1,
          },
          y: 30,
          opacity: 0,
          rotationX: -20,
          transformOrigin: '0% 50% -50',
          ease: 'power2.out',
        });
      });

      // Simple Parallax on the decoration image
      gsap.to('.about-parallax', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
        y: -100,
        ease: 'none'
      });
    }, containerRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 relative overflow-hidden bg-[#050505] border-y border-white/5 z-20">
      
      {/* Background Ambience matches other sections */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-400/5 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div ref={textContainerRef} className="lg:col-span-7 flex flex-col gap-8 md:gap-10">
            
            <div style={{ perspective: '1000px' }}>
              <div className="inline-block reveal-line">
                <h3 className="text-brand-400 font-mono text-xs md:text-sm tracking-widest mb-6 uppercase border border-brand-400/30 px-5 py-2.5 rounded-full inline-flex items-center gap-3 bg-brand-400/10 shadow-[0_0_20px_rgba(45,212,191,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]"></span>
                  Behind the Code
                </h3>
              </div>
              
              <p className="reveal-line text-lg md:text-xl md:leading-relaxed text-slate-300 font-light">
                I'm a Full Stack Developer who joined 10000 Coders (SRA Edutech Pvt Ltd) in early 2025 and immediately started shipping. In under a year I've built a full-stack sales CRM, a proctored coding assessment platform with a self-hosted Judge0 execution engine on AWS, a LeetCode-style student learning system, and mentor/admin tooling - all in production.
              </p>
            </div>

            <div style={{ perspective: '1000px' }} className="pt-4">
              <p className="reveal-line text-sm md:text-base text-slate-400 mb-6 font-mono uppercase tracking-widest">Specialises in:</p>
              
              <ul className="flex flex-col gap-4 md:gap-5 text-base md:text-lg font-medium text-slate-200">
                <li className="reveal-line flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-2xl hover:bg-white/[0.04] transition-colors shadow-sm">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-400/20 text-brand-400 flex items-center justify-center border border-brand-400/30">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </span>
                  Real-time systems & WebSocket workflows
                </li>
                
                <li className="reveal-line flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-2xl hover:bg-white/[0.04] transition-colors shadow-sm">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                  </span>
                  High-concurrency backend design (Django + Next.js)
                </li>
                
                <li className="reveal-line flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-2xl hover:bg-white/[0.04] transition-colors shadow-sm">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-400/20 text-brand-400 flex items-center justify-center border border-brand-400/30">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                  </span>
                  Cloud infrastructure on AWS (EC2, ALB, ASG, Route 53)
                </li>
                <li className="reveal-line flex items-center gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-2xl hover:bg-white/[0.04] transition-colors shadow-sm">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </span>
                  End-to-end product ownership
                </li>
              </ul>
            </div>

            <div style={{ perspective: '1000px' }} className="mt-4">
              <div className="reveal-line p-6 rounded-3xl glass-panel relative overflow-hidden border border-indigo-500/20 group hover:border-indigo-500/40 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-brand-400/5" />
                <div className="relative font-sans text-base md:text-lg text-slate-300 leading-relaxed flex flex-col md:flex-row md:items-center gap-4">
                  <span className="flex-shrink-0 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold tracking-widest uppercase border border-indigo-500/30 inline-block w-max">Current</span>
                  <div>
                    Building at <strong className="text-white glow-text">10000 Coders</strong> - engineering platforms used daily by students and internal sales teams.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative about-parallax mt-12 lg:mt-0 max-w-md mx-auto w-full">
            <div className="aspect-[4/5] rounded-[40px] glass-panel p-3 relative group overflow-hidden shadow-2xl shadow-indigo-500/10 hover:shadow-brand-400/20 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-[#050505] to-brand-400/20 opacity-80 mix-blend-screen" />
              
              <div className="w-full h-full rounded-[30px] overflow-hidden relative border border-white/10 bg-gradient-to-b from-[#0a0a0a] to-[#050505] flex flex-col items-center justify-center">
                 
                 {/* Glossy overlay */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 z-10 pointer-events-none rounded-[30px]"></div>

                 <div className="relative z-20 flex flex-col items-center gap-8">
                   <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 flex items-center justify-center bg-white/[0.02] backdrop-blur-xl relative group-hover:scale-105 transition-transform duration-700 shadow-[0_0_50px_rgba(45,212,191,0.15)]">
                     <div className="absolute inset-2 rounded-full border-t border-brand-400/50 animate-[spin_8s_linear_infinite]"></div>
                     <div className="absolute inset-0 rounded-full border-b border-indigo-500/50 animate-[spin_12s_linear_infinite_reverse]"></div>
                     <span className="text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400 font-bold drop-shadow-lg">{`</>`}</span>
                   </div>
                   
                   <div className="text-center">
                     <p className="text-slate-300 text-sm md:text-base font-medium tracking-widest uppercase mb-2">Systems Engineer</p>
                     <p className="text-slate-500 text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                        <span className="w-2 h-2 bg-brand-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.8)]"></span>
                        Active Directory
                     </p>
                   </div>
                 </div>

              </div>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-brand-400/10 blur-[120px] rounded-full mix-blend-screen opacity-50" />
          </div>

        </div>
      </div>
    </section>
  );
}

