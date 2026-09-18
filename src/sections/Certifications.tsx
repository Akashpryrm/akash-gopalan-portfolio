import React from 'react';
import { Award } from 'lucide-react';

export const Certifications: React.FC = () => {
  const items = [
    {
      title: 'Galactic Problem Solver Award',
      organization: 'NASA International Space Apps Challenge',
    },
    {
      title: 'Applied Machine Learning & Deep Learning Workshop',
      organization: 'Kannur University',
    },
    {
      title: 'National Workshop & Add-on Course on Deep Learning Platforms',
      organization: 'Kannur University',
    },
    {
      title: 'Soft Skills Development Professional Certification',
      organization: 'NPTEL',
    },
    {
      title: 'AI/ML for Geodata Analytics',
      organization: 'ISRO / IIRS',
    },
  ];

  return (
    <section id="certifications" className="py-24 md:py-32 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            Certifications & <br />
            <span className="text-accent">Achievements.</span>
          </h2>
          <p className="text-text-muted text-lg">
            Continuous learning and recognition in specialized domains.
          </p>
        </div>

        <div className="md:w-2/3">
          <div className="grid gap-4">
            {items.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-6 p-6 rounded-2xl bg-surface/30 border border-border/50 hover:border-accent/30 hover:bg-surface/50 transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors">
                  <Award size={20} className="text-text-muted group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm">
                    {item.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
