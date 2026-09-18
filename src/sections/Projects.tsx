import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.1a5.25 5.25 0 0 0-1.5-3.8 4.3 4.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a4.3 4.3 0 0 0-.1 3.8A5.25 5.25 0 0 0 3 9.6c0 5.7 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"></path><path d="M9 20c-5 1.5-5-2.5-7-3"></path></svg>
);

export const Projects: React.FC = () => {
  const detailedProjects = [
    {
      id: 'proj-1',
      title: 'ExamAIR',
      subtitle: 'AI-Powered OMR Evaluation System',
      description: 'A live product-based mobile application utilizing computer vision and CNNs for automated OMR grading and evaluation, built with Clean Architecture.',
      technologies: ['Flutter', 'Riverpod', 'Django REST API', 'Python', 'OpenCV', 'CNN', 'MySQL'],
      image: '/images/projects/examair.png',
      alt: 'ExamAIR AI-powered OMR evaluation system project visual',
    },
    {
      id: 'proj-2',
      title: 'Fingerprint-Based Exam Hall Entry System',
      description: 'A secure biometric authentication system for controlling and logging exam hall access.',
      technologies: ['React', 'Django', 'PostgreSQL', 'C#', 'Biometric SDK'],
      image: '/images/projects/fingerprint-exam-entry.png',
      alt: 'Fingerprint-based exam hall entry system project visual',
    },
    {
      id: 'proj-3',
      title: 'NASA Space Apps Challenge',
      subtitle: 'Exoplanet Hunter AI',
      description: 'Award-winning AI model designed to process and analyze space data for exoplanet discovery.',
      technologies: ['Python', 'Random Forest', 'Flask', 'React'],
      image: '/images/projects/exoplanet-hunter.png',
      alt: 'NASA Space Apps Exoplanet Hunter AI project visual',
    },
    {
      id: 'proj-4',
      title: 'Fake And Real Image Detection',
      description: 'Deep learning solution for identifying tampered or AI-generated images using convolutional neural networks.',
      technologies: ['Python', 'CNN', 'OpenCV', 'Flask', 'Firebase Storage'],
      image: '/images/projects/fake-real-image-detection.png',
      alt: 'Fake and Real Image Detection project visual',
    },
    {
      id: 'proj-5',
      title: 'ResFeast',
      subtitle: 'Restaurant Service System',
      description: 'Comprehensive restaurant management platform integrating seamless frontend ordering with a robust backend.',
      technologies: ['React', 'Django REST Framework', 'PostgreSQL', 'Context API'],
      image: '/images/projects/resfeast.png',
      alt: 'ResFeast restaurant service system project visual',
    }
  ];

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      projectRefs.current.forEach((projectEl) => {
        if (!projectEl) return;
        
        const imageEl = projectEl.querySelector('.project-image-container');
        const contentEl = projectEl.querySelector('.project-content-container');
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: projectEl,
            start: 'top 85%',
            toggleActions: 'play none none none',
          }
        });
        
        tl.fromTo(imageEl, 
          { y: 40, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        ).fromTo(contentEl,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          "-=0.4"
        );
      });
    } else {
      // Basic fade for reduced motion
      projectRefs.current.forEach((projectEl) => {
        if (!projectEl) return;
        
        gsap.fromTo(projectEl,
          { opacity: 0 },
          { 
            opacity: 1, 
            duration: 1,
            scrollTrigger: {
              trigger: projectEl,
              start: 'top 90%',
            }
          }
        );
      });
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32 bg-background border-t border-border/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary">
              Featured <span className="text-accent">Work.</span>
            </h2>
          </div>
          <p className="text-text-muted text-lg max-w-md">
            A selection of intelligent systems, platforms, and products I've engineered.
          </p>
        </div>

        <div className="space-y-32">
          {detailedProjects.map((project, index) => (
            <div 
              key={project.id}
              ref={(el) => { projectRefs.current[index] = el; }}
              className={`flex flex-col gap-10 lg:gap-16 group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}
            >
              
              {/* Visual Area */}
              <div className="project-image-container w-full lg:w-[50%] aspect-[16/9] bg-[#0c0c0e] rounded-2xl border border-border/50 overflow-hidden relative group-hover:border-accent/40 shadow-xl shadow-black/40 transition-colors duration-500 flex-shrink-0">
                <img 
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNTE1MTU0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UGxhY2UgSW1hZ2UgQXQ6IC9pbWFnZXMvcHJvamVjdHMvLi4uPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                {/* Subtle hover overlay effect */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 mix-blend-overlay transition-colors duration-500 pointer-events-none" />
              </div>

              {/* Content Area */}
              <div className="project-content-container w-full lg:w-[45%] flex flex-col justify-center">
                <span className="text-accent font-mono text-sm tracking-widest mb-4">
                  0{index + 1} / {String(detailedProjects.length).padStart(2, '0')}
                </span>
                
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-2">
                  {project.title}
                </h3>
                
                {project.subtitle && (
                  <h4 className="text-xl text-text-muted mb-6 font-medium">
                    {project.subtitle}
                  </h4>
                )}

                <p className="text-lg text-text-muted leading-relaxed mb-10">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.technologies.map((tech, tIndex) => (
                    <span 
                      key={tIndex}
                      className="px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-md bg-surface border border-border/50 text-text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  <a href="#" className="flex items-center gap-2 text-text-primary hover:text-accent font-medium transition-colors">
                    View Project <ExternalLink size={18} />
                  </a>
                  <a href="#" className="text-text-muted hover:text-accent transition-colors" aria-label="GitHub Repository">
                    <GithubIcon />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
