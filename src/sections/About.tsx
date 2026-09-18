import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Code2, MonitorSmartphone, Server } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative bg-surface/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Intro */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-text-primary">
              Engineering with <span className="text-accent">Purpose.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                As a {portfolioData.personal.primaryTitle}, I bridge the gap between complex backend architectures and intuitive mobile/web interfaces. My foundation is built on solid engineering principles, Clean Architecture, and an enthusiasm for AI/ML integration.
              </p>
              <p>
                My development philosophy centers on creating maintainable, scalable solutions. Whether crafting smooth cross-platform applications with Flutter or architecting robust REST APIs with Django, I focus on delivering real value through technology.
              </p>
            </div>
          </div>

          {/* Right Column: Focus Areas */}
          <div className="flex-1 lg:max-w-md">
            <div className="grid gap-6">
              
              <div className="p-6 rounded-2xl bg-background border border-border/50 hover:border-accent/50 transition-colors group">
                <MonitorSmartphone className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-semibold text-text-primary mb-2">Mobile & Frontend</h3>
                <p className="text-sm text-text-muted">Building seamless cross-platform experiences using Flutter, Dart, and React.</p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/50 hover:border-accent/50 transition-colors group">
                <Server className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-semibold text-text-primary mb-2">Backend Architecture</h3>
                <p className="text-sm text-text-muted">Designing robust APIs and database structures with Python, Django, and PostgreSQL.</p>
              </div>

              <div className="p-6 rounded-2xl bg-background border border-border/50 hover:border-accent/50 transition-colors group">
                <Code2 className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-semibold text-text-primary mb-2">Intelligent Systems</h3>
                <p className="text-sm text-text-muted">Integrating AI/ML capabilities, computer vision with OpenCV, and predictive modeling.</p>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
