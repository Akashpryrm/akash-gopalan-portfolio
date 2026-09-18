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
  const { secondaryTitles, github, linkedin, resumeUrl } = portfolioData.personal;
  
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only animate if prefers-reduced-motion is false
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion && textRef.current && imageRef.current) {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      // Text fade in
      tl.fromTo(
        textRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, delay: 0.2 }
      );
      
      // Portrait fade and subtle scale
      tl.fromTo(
        imageRef.current,
        { scale: 0.97, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 },
        "-=1"
      );
    }
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen pt-24 pb-12 overflow-hidden flex items-center"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full z-10 relative h-full flex flex-col md:flex-row items-center">
        
        {/* LEFT: Typography & Content */}
        <div ref={textRef} className="flex-1 w-full flex flex-col justify-center pt-10 md:pt-0 z-20">
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-semibold tracking-[0.2em] text-text-muted uppercase">Hi, I'm</span>
            <div className="h-[1px] w-12 bg-border"></div>
          </div>
          
          <h1 className="font-heading font-bold text-6xl md:text-7xl lg:text-[7rem] leading-[0.9] tracking-tighter mb-6">
            <span className="block text-text-primary">AKASH</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover pb-2">
              GOPALAN
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium tracking-wide text-text-primary mb-4 uppercase">
            Full-Stack <span className="text-text-muted">Developer</span>
          </h2>
          
          <p className="text-sm md:text-base text-accent font-medium mb-6">
            {secondaryTitles.join(' • ')}
          </p>
          
          <p className="text-lg text-text-muted max-w-lg mb-10 leading-relaxed">
            I build modern applications across mobile, web, backend and intelligent systems.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-full bg-accent text-background font-semibold hover:bg-accent-hover transition-colors flex items-center gap-2"
            >
              View My Work
              <ExternalLink size={18} />
            </a>
            
            {resumeUrl && (
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full border border-border text-text-primary hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
              >
                Download Resume
                <Download size={18} />
              </a>
            )}

            <div className="flex items-center gap-4 ml-2">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border/50 text-text-muted hover:text-accent hover:border-accent transition-colors" aria-label="GitHub">
                  <GithubIcon />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border/50 text-text-muted hover:text-accent hover:border-accent transition-colors" aria-label="LinkedIn">
                  <LinkedinIcon />
                </a>
              )}
            </div>
          </div>

          {/* Lower Left Decorative: Scroll Indicator */}
          <div className="mt-20 flex items-center gap-4 opacity-70">
            <div className="w-[18px] h-[30px] rounded-full border border-text-muted flex justify-center p-1">
              <div className="w-1 h-2 bg-text-muted rounded-full animate-bounce" />
            </div>
            <span className="text-xs font-medium tracking-[0.2em] text-text-muted uppercase">
              Scroll to explore
            </span>
          </div>
        </div>

        {/* RIGHT: Portrait Presentation */}
        <div className="w-full md:w-[45%] h-[500px] md:h-[80vh] relative mt-12 md:mt-0 z-10 flex items-end md:items-center justify-center">
          
          {/* Subtle Spotlight behind portrait */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-white/5 rounded-full blur-[80px] -z-10" />

          {/* Portrait Container with CSS Blending */}
          <div 
            ref={imageRef}
            className="w-full h-full relative"
            style={{
              // CSS masking to smoothly fade the bottom edge into the dark background
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
            }}
          >
            <img 
              src="/images/akash-portrait.png" 
              alt="Akash Gopalan" 
              className="w-full h-full object-contain object-bottom md:object-center drop-shadow-2xl"
              onError={(e) => {
                // Graceful fallback if image is missing
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNTE1MTU0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UGxhY2UgcG9ydHJhaXQgYXQgL2ltYWdlcy9ha2FzaC1wb3J0cmFpdC5wbmc8L3RleHQ+PC9zdmc+';
              }}
            />
          </div>

          {/* Right Decorative Detail */}
          <div className="absolute right-0 top-1/4 hidden lg:flex flex-col items-end opacity-50">
            <p className="text-right text-sm font-medium tracking-[0.15em] text-text-primary leading-tight uppercase">
              Same<br />
              Person.<br />
              Bigger<br />
              Possibilities.
            </p>
            <div className="w-8 h-[2px] bg-accent mt-3"></div>
          </div>

          {/* Lower Right Decorative Detail */}
          <div className="absolute right-0 bottom-10 hidden lg:block opacity-50">
            <p className="text-right text-xs font-medium tracking-[0.15em] text-text-muted leading-tight uppercase">
              Turning<br />
              Ideas Into<br />
              Real Solutions
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
