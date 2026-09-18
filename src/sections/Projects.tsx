import React from 'react';
import { ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.1a5.25 5.25 0 0 0-1.5-3.8 4.3 4.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a4.3 4.3 0 0 0-.1 3.8A5.25 5.25 0 0 0 3 9.6c0 5.7 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"></path><path d="M9 20c-5 1.5-5-2.5-7-3"></path></svg>
);

export const Projects: React.FC = () => {
  // Enhance projects with specific data from prompt since it wasn't fully detailed in portfolio.ts
  const detailedProjects = [
    {
      id: 'proj-1',
      title: 'ExamAIR',
      subtitle: 'AI-Powered OMR Evaluation System',
      description: 'A live product-based mobile application utilizing computer vision and CNNs for automated OMR grading and evaluation, built with Clean Architecture.',
      technologies: ['Flutter', 'Riverpod', 'Django REST API', 'Python', 'OpenCV', 'CNN', 'MySQL'],
    },
    {
      id: 'proj-2',
      title: 'Fingerprint-Based Exam Hall Entry System',
      description: 'A secure biometric authentication system for controlling and logging exam hall access.',
      technologies: ['React', 'Django', 'PostgreSQL', 'C#', 'Biometric SDK'],
    },
    {
      id: 'proj-3',
      title: 'NASA Space Apps Challenge',
      subtitle: 'Exoplanet Hunter AI',
      description: 'Award-winning AI model designed to process and analyze space data for exoplanet discovery.',
      technologies: ['Python', 'Random Forest', 'Flask', 'React'],
    },
    {
      id: 'proj-4',
      title: 'Fake And Real Image Detection',
      description: 'Deep learning solution for identifying tampered or AI-generated images using convolutional neural networks.',
      technologies: ['Python', 'CNN', 'OpenCV', 'Flask', 'Firebase Storage'],
    },
    {
      id: 'proj-5',
      title: 'ResFeast',
      subtitle: 'Restaurant Service System',
      description: 'Comprehensive restaurant management platform integrating seamless frontend ordering with a robust backend.',
      technologies: ['React', 'Django REST Framework', 'PostgreSQL', 'Context API'],
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 bg-background border-t border-border/50">
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
              className={`flex flex-col gap-12 group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              
              {/* Visual Area (Placeholder for actual project imagery) */}
              <div className="flex-1 w-full aspect-[4/3] lg:aspect-auto lg:h-[500px] bg-surface rounded-2xl border border-border overflow-hidden relative group-hover:border-accent/50 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-surface to-background flex items-center justify-center">
                  <span className="font-heading text-9xl font-bold text-text-muted/10 select-none">
                    0{index + 1}
                  </span>
                </div>
                {/* Overlay gradient for cinematic feel */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col justify-center">
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
                  {/* GitHub link placeholder if available */}
                  <a href="#" className="text-text-muted hover:text-accent transition-colors">
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
