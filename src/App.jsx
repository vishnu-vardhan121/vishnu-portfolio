import LenisProvider from './components/LenisProvider';
import CustomCursor from './components/CustomCursor';
import Hero from './sections/Hero';
import Impact from './sections/Impact';
import About from './sections/About';
import PinnedProject from './sections/PinnedProject';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function BackgroundSystem() {
  return (
    <>
      <div className="noise-bg" />
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] min-w-[600px] min-h-[600px] rounded-full bg-brand-400/5 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] min-w-[500px] min-h-[500px] rounded-full bg-indigo-500/5 blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
      </div>
    </>
  );
}

export default function App() {
  return (
    <LenisProvider>
      <CustomCursor />
      <div className="bg-[#030303] min-h-screen selection:bg-brand-400/30 selection:text-brand-400 font-sans text-slate-100 overflow-hidden relative">
        <BackgroundSystem />
        <div className="relative z-10 hidden md:block">
           <Hero />
           <Impact />
           <About />
           <PinnedProject />
           <Projects />
           <Skills />
           <Experience />
           <Contact />
        </div>
        
        {/* On mobile, we avoid intense pinning/parallax conflicts by wrapping simply */}
        <div className="relative z-10 md:hidden">
           <Hero />
           <Impact />
           <About />
           <PinnedProject />
           <Projects />
           <Skills />
           <Experience />
           <Contact />
        </div>
      </div>
    </LenisProvider>
  );
}
