import React, { useEffect, useRef } from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import gsap from 'gsap';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.1a5.25 5.25 0 0 0-1.5-3.8 4.3 4.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a4.3 4.3 0 0 0-.1 3.8A5.25 5.25 0 0 0 3 9.6c0 5.7 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"></path><path d="M9 20c-5 1.5-5-2.5-7-3"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const Hero: React.FC = () => {
  const { secondaryTitles, resumeUrl } = portfolioData.personal;
  
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && textRef.current && imageRef.current) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo(
        textRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.2 }
      );
      
      tl.fromTo(
        imageRef.current,
        { scale: 0.95, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 },
        "-=1"
      );
    }
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-[100svh] pt-28 pb-12 overflow-hidden flex items-center bg-background"
    >
      {/* Decorative Text Left/Bottom */}
      <div className="absolute left-6 lg:left-12 bottom-12 hidden md:flex items-center gap-4 opacity-70 z-20">
        <div className="w-[18px] h-[30px] rounded-full border border-text-muted flex justify-center p-1">
          <div className="w-1 h-2 bg-text-muted rounded-full animate-bounce" />
        </div>
        <span className="text-xs font-medium tracking-[0.2em] text-text-muted uppercase">
          Scroll to explore
        </span>
      </div>

      {/* Right Decorative Detail - Top */}
      <div className="absolute right-4 lg:right-8 xl:right-16 top-[15%] lg:top-[25%] hidden sm:flex flex-col items-end opacity-80 z-20 pointer-events-none">
        <p className="text-right text-xs md:text-sm font-medium tracking-[0.2em] text-text-muted leading-tight uppercase">
          Same<br />
          Person.<br />
          Bigger<br />
          Possibilities.
        </p>
        <div className="w-8 h-[2px] bg-accent mt-3"></div>
      </div>

      {/* Right Decorative Detail - Bottom */}
      <div className="absolute right-4 lg:right-8 xl:right-16 bottom-[15%] lg:bottom-[20%] hidden lg:flex flex-col items-end opacity-80 z-20 pointer-events-none">
        <p className="text-right text-xs font-medium tracking-[0.2em] text-text-muted leading-tight uppercase">
          Turning<br />
          Ideas Into<br />
          Real Solutions
        </p>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 w-full z-10 relative h-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 mt-4 lg:mt-0">
        
        {/* LEFT: Typography & Content */}
        <div ref={textRef} className="w-full lg:w-[55%] flex flex-col justify-center z-20 xl:max-w-4xl order-2 lg:order-1">
          
          <div className="flex items-center gap-4 mb-6 lg:mb-8">
            <span className="text-sm font-semibold tracking-[0.2em] text-text-muted uppercase">Hi, I'm</span>
            <div className="h-[1px] w-12 bg-border"></div>
          </div>
          
          <h1 className="font-heading font-bold text-6xl sm:text-7xl lg:text-[7rem] xl:text-[8rem] leading-[0.85] tracking-tighter mb-6 lg:mb-8">
            <span className="block text-text-primary drop-shadow-lg">AKASH</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover pb-3 drop-shadow-lg">
              GOPALAN
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium tracking-wide text-text-primary mb-4 uppercase">
            Full-Stack <span className="text-text-muted">Developer</span>
          </h2>
          
          <p className="text-sm md:text-base text-accent font-medium mb-6 lg:mb-8">
            {secondaryTitles.join(' • ')}
          </p>
          
          <p className="text-lg md:text-xl text-text-muted max-w-lg mb-10 lg:mb-12 leading-relaxed">
            I build modern applications across mobile, web, backend and intelligent systems.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-5">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-accent text-background font-bold hover:bg-accent-hover transition-colors flex items-center gap-2 shadow-lg shadow-accent/20"
            >
              View My Work
              <ExternalLink size={18} />
            </a>
            
            {resumeUrl ? (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-border text-text-primary hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
              >
                Download Resume
                <Download size={18} />
              </a>
            ) : (
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); alert('Please add your resume file to public/ and update portfolio.ts'); }}
                className="px-8 py-4 rounded-full border border-border text-text-primary hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
              >
                Download Resume
                <Download size={18} />
              </a>
            )}

            <div className="flex items-center gap-4 mt-2 sm:mt-0 sm:ml-2">
              <a href="https://github.com/Akashpryrm/" target="_blank" rel="noopener noreferrer" 
                 className="p-3.5 rounded-full border border-text-muted/40 bg-surface/30 text-text-primary hover:text-accent hover:border-accent hover:bg-accent/10 transition-colors" 
                 aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href="https://www.linkedin.com/in/akash-gopalan" target="_blank" rel="noopener noreferrer" 
                 className="p-3.5 rounded-full border border-text-muted/40 bg-surface/30 text-text-primary hover:text-accent hover:border-accent hover:bg-accent/10 transition-colors" 
                 aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Portrait Presentation */}
        <div className="w-full lg:w-[40%] xl:w-[42%] h-[400px] sm:h-[500px] lg:h-[75vh] relative z-10 flex items-center justify-center order-1 lg:order-2">
          
          {/* Subtle Cinematic Spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-accent/10 rounded-[100%] blur-[80px] -z-10" />

          {/* Portrait Container with CSS Blending */}
          <div 
            ref={imageRef}
            className="w-full h-full relative"
            style={{
              // Elliptical radial mask safely containing the head while fading the edges
              maskImage: 'radial-gradient(ellipse 65% 70% at 50% 50%, black 40%, transparent 85%)',
              WebkitMaskImage: 'radial-gradient(ellipse 65% 70% at 50% 50%, black 40%, transparent 85%)',
            }}
          >
            <img 
              src="/images/akash-portrait.png" 
              alt="Akash Gopalan" 
              className="w-full h-full object-contain object-center"
              style={{ filter: 'contrast(1.05) brightness(0.95)' }}
            />
          </div>

        </div>

      </div>
    </section>
  );
};
