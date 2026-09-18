import React from 'react';

export const Experience: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-surface/20 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-12 text-center">
          Professional Experience
        </h2>

        <div className="relative border-l border-border/50 ml-3 md:ml-0 md:border-none space-y-12 md:space-y-16">
          
          {/* Current Role */}
          <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-[1fr_2fr] md:gap-8 items-start group">
            <div className="hidden md:flex flex-col text-right pt-1">
              <span className="text-text-primary font-medium">Ai2Gi Pvt. Ltd.</span>
              <span className="text-sm text-text-muted">Jun 2026 – Present</span>
            </div>
            
            {/* Mobile Timeline Node & Company */}
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent md:hidden"></div>
            <div className="md:hidden mb-2">
              <span className="text-text-primary font-medium block">Ai2Gi Pvt. Ltd.</span>
              <span className="text-sm text-text-muted">Jun 2026 – Present</span>
            </div>

            <div className="relative md:pl-8 md:border-l md:border-border/50 group-hover:border-accent/50 transition-colors">
              <div className="hidden md:block absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent transition-transform group-hover:scale-150"></div>
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
                Full-Stack Developer
              </h3>
              <p className="text-text-muted leading-relaxed">
                Building scalable web applications, RESTful APIs, and intelligent systems, leading the development lifecycle from architecture to deployment.
              </p>
            </div>
          </div>

          {/* Previous Role */}
          <div className="relative pl-8 md:pl-0 md:grid md:grid-cols-[1fr_2fr] md:gap-8 items-start group">
            <div className="hidden md:flex flex-col text-right pt-1">
              <span className="text-text-primary font-medium">Ai2Gi Pvt. Ltd.</span>
              <span className="text-sm text-text-muted">Dec 2025 – Jun 2026</span>
            </div>
            
            <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-border md:hidden"></div>
            <div className="md:hidden mb-2">
              <span className="text-text-primary font-medium block">Ai2Gi Pvt. Ltd.</span>
              <span className="text-sm text-text-muted">Dec 2025 – Jun 2026</span>
            </div>

            <div className="relative md:pl-8 md:border-l md:border-border/50 group-hover:border-accent/50 transition-colors">
              <div className="hidden md:block absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-accent transition-colors"></div>
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">
                Flutter Developer Intern
              </h3>
              <p className="text-text-muted leading-relaxed">
                Developed cross-platform mobile applications, integrated REST APIs, and implemented robust UI components following Clean Architecture principles.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
