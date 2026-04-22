import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const skillGroups = [
  { title: "Languages", skills: ["JavaScript", "Python"] },
  { title: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { title: "Backend", skills: ["Django", "Django REST Framework", "Node.js", "Express.js"] },
  { title: "State Management", skills: ["Redux Toolkit", "RTK Query"] },
  { title: "Cloud & Infra", skills: ["AWS EC2", "ASG", "ALB", "Route 53", "Cloudflare"] },
  { title: "Database", skills: ["PostgreSQL", "MongoDB", "Firebase Firestore"] },
  { title: "Systems", skills: ["Judge0 (self-hosted)", "MSG91 (OTP/DLT)", "Socket.io", "Supabase"] },
  { title: "Tools", skills: ["Git", "GitHub", "Postman", "Vite", "Vercel"] }
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title reveal
      gsap.from('.skills-heading', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        duration: 1
      });

      // Badges stagger entry
      gsap.from('.skill-badge', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        stagger: 0.05,
        ease: 'back.out(1.5)',
        duration: 0.8
      });
      
      // Floating random gravity effect
      gsap.to('.skill-badge', {
        y: 'random(-12, 12)',
        x: 'random(-8, 8)',
        duration: 'random(3, 5)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: { amount: 3, from: 'random' }
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 relative bg-[#050505] border-t border-white/5 overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-indigo-500/10 blur-[150px] mix-blend-screen rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
        <h3 className="skills-heading text-brand-400 font-mono text-sm tracking-widest mb-4 uppercase">Technology Toolkit</h3>
        <h2 className="skills-heading text-6xl md:text-[90px] font-black text-slate-100 mb-24 uppercase tracking-tighter leading-none">
          Deep Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {skillGroups.map(group => (
            <div key={group.title} className="flex flex-col items-center">
              <h4 className="text-slate-400 font-medium mb-8 uppercase tracking-widest text-sm border-b border-brand-400/30 pb-2 inline-block">
                 {group.title}
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {group.skills.map(skill => (
                  <div key={skill} className="skill-badge px-4 py-2 md:px-6 md:py-3 glass-panel hover:bg-white/10 transition-colors cursor-default select-none border-white/10 hover:border-brand-400/80 hover:shadow-[0_0_25px_rgba(45,212,191,0.4)] text-sm md:text-base font-semibold text-slate-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
