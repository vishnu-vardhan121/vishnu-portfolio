import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const projects = [
  {
    title: 'NTH Platform',
    link: null,
    desc: 'Full-stack mentorship and hiring platform supporting candidates, admins, and interviewers across an end-to-end recruitment workflow. Role-based dashboards, mock interview scheduling, real-time job applications, and live data sync via Supabase Realtime. Complex state managed with Redux Toolkit; animated UI with GSAP and Framer Motion.',
    tech: ['React', 'Redux Toolkit', 'Supabase', 'GSAP', 'Framer Motion']
  },
  {
    title: 'ChatiFy',
    link: 'https://react-chat-app-swart-beta.vercel.app/login',
    desc: 'Real-time chat app with live bidirectional messaging via Socket.io, token-based session auth, and bcrypt password hashing. Responsive React UI backed by Node.js, Express, and MongoDB - built with scalability and security first.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io']
  },
  {
    title: 'Melwi Clicks',
    link: 'https://melwin-clicks.vercel.app/',
    desc: 'Photographer portfolio with structured sections for work, video editing, and detailed gear showcase (Sony Alpha 6600). Framer Motion animations, Vite-optimised build, deployed on Vercel for fast global load times.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion']
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Horizontal Scroll Calculation
      const scrollWidth = scrollRef.current.scrollWidth;
      const windowWidth = window.innerWidth;
      
      gsap.to(scrollRef.current, {
        x: -(scrollWidth - windowWidth + 100), // padding offset
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
        }
      });
      
      // Setup elements for 3D tilt dynamically (no extra GSAP ScrollTrigger needed for hover)
      const cards = document.querySelectorAll('.project-card');
      cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg
          const rotateY = ((x - centerX) / centerX) * 10;
          
          gsap.to(card, {
            rotateX,
            rotateY,
            scale: 1.05,
            transformPerspective: 1000,
            duration: 0.5,
            ease: 'power2.out',
            boxShadow: '0 0 50px rgba(45, 212, 191, 0.3)',
            borderColor: 'rgba(45, 212, 191, 0.5)'
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 1,
            ease: 'elastic.out(1, 0.3)',
            boxShadow: 'none',
            borderColor: 'rgba(255, 255, 255, 0.05)'
          });
        });
      });
      
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen py-20 md:py-32 bg-[#050505] flex flex-col justify-center overflow-hidden relative z-20">
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a192f] via-[#050505] to-[#050505] opacity-30" />

      <div className="container mx-auto px-6 mb-16 relative z-30">
        <h3 className="text-brand-400 font-mono text-sm tracking-widest mb-4 uppercase">Archive</h3>
        <h2 className="text-6xl md:text-[90px] font-black text-slate-100 uppercase tracking-tighter leading-none">Featured Work</h2>
      </div>

      <div className="pl-6 md:pl-20 relative z-30">
        <div ref={scrollRef} className="flex gap-16 w-max pr-16 md:pr-32 pb-16">
          {projects.map((project, i) => (
            <div key={i} className="w-[90vw] md:w-[45vw] lg:w-[40vw] flex-shrink-0 group perspective-[1500px] flex flex-col">
              <div className="project-card glass-panel p-8 md:p-10 h-full min-h-[50vh] flex-1 flex flex-col justify-between transition-colors bg-gradient-to-br from-white/[0.02] to-transparent border-white/5 relative overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
                
                <div className="absolute inset-0 bg-brand-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                
                <div className="relative z-20 flex-1 flex flex-col pt-2">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100 group-hover:text-brand-400 transition-colors duration-500" style={{ transform: 'translateZ(60px)' }}>{project.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-2xl" style={{ transform: 'translateZ(40px)' }}>{project.desc}</p>
                  
                  <div className="flex gap-2 mb-6 flex-wrap" style={{ transform: 'translateZ(30px)' }}>
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-mono px-3 py-1.5 bg-[#050505]/80 rounded-full text-brand-400 border border-white/10 shadow-inner">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-20" style={{ transform: 'translateZ(50px)' }}>
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-8 py-4 border border-white/20 rounded-full text-slate-200 font-semibold hover:bg-brand-400 hover:text-dark-900 transition-all duration-300 hover:border-transparent uppercase tracking-widest text-sm cursor-pointer z-[999999] relative overflow-hidden">
                      View Interactive <span className="group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-4 px-8 py-4 border border-white/5 rounded-full text-slate-500 font-semibold uppercase tracking-widest text-sm">
                      Internal Platform
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
