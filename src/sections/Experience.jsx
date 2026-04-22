import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const experiences = [
  {
    type: 'work',
    role: 'Full Stack Developer',
    company: '10000 Coders (SRA Edutech Pvt Ltd)',
    date: 'Feb 2025 – Present',
    points: [
      'Engineered self-hosted Judge0 code execution system on AWS EC2 with ALB + ASG for high-concurrency assessment loads',
      'Built full-stack sales CRM (Next.js + Django REST + PostgreSQL) with lead management, student onboarding, payments & referrals',
      'Designed proctored assessment platform with OTP registration, MCQ + coding tests, multi-test-case scoring, and leaderboards',
      'Built LeetCode-style student learning system with daily challenges, timed test centre, and server-synced timers',
      'Developed mentor/admin tools for problem authoring, test-case config, MCQ management, and submission monitoring',
      'Implemented OTP authentication via MSG91 across all public, internal, and referral-facing systems'
    ]
  },
  {
    type: 'edu',
    degree: 'BSc Computer Science',
    institution: 'Master Ji Degree & PG College, Hanamkonda',
    date: '2020 – 2023 | 66%'
  },
  {
    type: 'edu',
    degree: 'Intermediate',
    institution: 'Govt Junior College, Jannaram',
    date: '2018 – 2020 | 66.7%'
  }
];

export default function Experience() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.timeline-item').forEach((item) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        });
      });
      
      gsap.to('.timeline-line-filled', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: true,
        },
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none'
      });
    }, containerRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-[#030303] border-t border-white/5 overflow-hidden relative">
      
      <div className="absolute top-1/4 left-0 w-[50vw] h-[50vw] bg-brand-400/5 blur-[200px] mix-blend-screen rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <h3 className="text-brand-400 font-mono text-sm tracking-widest mb-4 uppercase text-center">Journey</h3>
        <h2 className="text-6xl md:text-[90px] font-black text-slate-100 mb-32 text-center uppercase tracking-tighter leading-none">Experience</h2>
        
        <div className="relative pl-8 md:pl-0">
          
          {/* Base vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5" />
          
          {/* Filled vertical line (Scroll progress) */}
          <div className="timeline-line-filled absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-400 to-indigo-500 scale-y-0 shadow-[0_0_20px_rgba(45,212,191,0.5)]" />
          
          <div className="flex flex-col gap-24">
            {experiences.map((exp, idx) => (
              <div key={idx} className={`timeline-item relative flex flex-col md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''} justify-between items-center w-full group`}>
                <div className="hidden md:block w-5/12" />
                
                {/* Center dot - vertically centered to card; hidden on small screens */}
                <div className="hidden md:block absolute left-1/2 top-1/2 z-10 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-[#030303] bg-[#050505] ring-2 ring-white/10 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(45,212,191,0.6)] group-hover:ring-brand-400">
                  <div className="w-full h-full bg-brand-400/20 rounded-full group-hover:bg-brand-400 transition-colors duration-500" />
                </div>
                
                <div className="w-full md:w-5/12 glass-panel p-12 hover:-translate-y-2 transition-all duration-700 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/5 hover:border-brand-400/30">
                  {exp.type === 'work' ? (
                    <>
                      <div className="mb-6">
                        <span className="inline-block px-4 py-2 bg-brand-400/10 text-brand-400 font-mono text-sm rounded-full border border-brand-400/20 shadow-inner">{exp.date}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">{exp.role}</h3>
                      <h4 className="text-lg md:text-xl text-slate-400 mb-6 font-medium">{exp.company}</h4>
                      <ul className="flex flex-col gap-3">
                        {exp.points.map((pt, i) => (
                          <li key={i} className="text-slate-300 text-sm md:text-base leading-relaxed flex items-start gap-4">
                            <span className="text-brand-400 mt-2 block w-2 h-2 flex-shrink-0 rounded-full bg-brand-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <div className="mb-6">
                         <span className="inline-block px-4 py-2 bg-indigo-500/10 text-indigo-400 font-mono text-sm rounded-full border border-indigo-500/20 shadow-inner">Education</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{exp.degree}</h3>
                      <h4 className="text-brand-400 font-mono text-xs md:text-sm uppercase tracking-wider">{exp.institution}</h4>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
