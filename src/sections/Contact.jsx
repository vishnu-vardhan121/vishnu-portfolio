import MagneticButton from '../components/MagneticButton';

export default function Contact() {
  return (
    <section className="py-20 md:py-32 relative bg-[#030303] overflow-hidden border-t border-brand-400/10">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120vw] md:w-[80vw] h-[80vw] rounded-full bg-brand-400/10 blur-[150px] mix-blend-screen" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-5xl text-center">
        <h3 className="text-brand-400 font-mono text-sm md:text-base tracking-widest mb-6 uppercase border border-brand-400/30 px-6 py-2 rounded-full inline-block bg-brand-400/5">What's Next?</h3>
        
        <h2 className="text-5xl md:text-7xl lg:text-[90px] font-black tracking-tighter text-slate-100 mb-8 md:mb-12 leading-[1.1] uppercase">
          Let’s Build <br/> <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-400 via-indigo-400 to-white">Something That Scales</span>
        </h2>
        
        <p className="text-lg md:text-xl lg:text-2xl text-slate-400 mb-16 md:mb-20 max-w-3xl mx-auto leading-relaxed">
          Open to Full Stack Developer roles and freelance projects. I build things that work in production - not just in demos. Let's talk.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-32 relative z-[9999]">
          <MagneticButton className="px-14 py-6 bg-brand-400 text-[#030303] font-bold rounded-full text-xl w-full md:w-auto shadow-[0_0_40px_rgba(45,212,191,0.4)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] uppercase tracking-wider relative overflow-hidden group">
            <a href="mailto:kottevishnuvardhann@gmail.com" className="relative z-10 block w-full h-full">Hire Me</a>
          </MagneticButton>
          <MagneticButton className="px-14 py-6 glass-panel text-white font-bold rounded-full border border-white/20 text-xl w-full md:w-auto hover:bg-white/10 hover:border-white/40 transition-all duration-300 uppercase tracking-wider">
            <a href="mailto:kottevishnuvardhann@gmail.com" className="relative z-10 block w-full h-full">Contact Me</a>
          </MagneticButton>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 pt-16 border-t border-white/10 uppercase tracking-widest text-sm md:text-base font-mono text-slate-400 relative z-[9999]">
           <a href="mailto:kottevishnuvardhann@gmail.com" className="hover:text-brand-400 hover:scale-110 transition-all duration-300 cursor-none relative group">
             Email
             <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
           </a>
           <a href="https://github.com/vishnu-vardhan121" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 hover:scale-110 transition-all duration-300 cursor-none relative group">
             GitHub
             <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
           </a>
           <a href="https://linkedin.com/in/vishnu-vardhan-kotte" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 hover:scale-110 transition-all duration-300 cursor-none relative group">
             LinkedIn
             <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
           </a>
           <a href="tel:+919100605365" className="hover:text-brand-400 hover:scale-110 transition-all duration-300 cursor-none relative group">
             Phone
             <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
           </a>
        </div>
      </div>
      
      <div className="mt-40 text-center text-slate-600 font-mono text-xs md:text-sm uppercase tracking-widest px-6 relative z-10">
        <p>Built with React, GSAP, and Lenis.</p>
        <p className="mt-3 text-slate-700">© 2026 Vishnu Vardhan Kotte. All rights reserved.</p>
      </div>
    </section>
  );
}
