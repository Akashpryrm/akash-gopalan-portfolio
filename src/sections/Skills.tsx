import React from 'react';
import { portfolioData } from '../data/portfolio';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-text-primary">
            Technical <span className="text-accent">Arsenal.</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl">
            A carefully curated stack of tools and technologies I use to build robust, scalable, and intelligent applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="py-8 border-b border-border/50 group"
            >
              <h3 className="text-sm font-semibold tracking-[0.15em] text-text-muted uppercase mb-6 group-hover:text-text-primary transition-colors">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 text-sm font-medium rounded-full bg-background border border-border/50 text-text-primary hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
