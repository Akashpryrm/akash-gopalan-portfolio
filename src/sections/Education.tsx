import React from 'react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-surface/20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-12 text-center">
          Academic Background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 rounded-2xl bg-background border border-border/50 hover:border-accent/30 transition-colors">
            <span className="text-sm font-mono text-text-muted tracking-wider block mb-4">2024–2026</span>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
              MCA (Master of Computer Applications)
            </h3>
            <p className="text-text-muted mb-6">Kannur University Campus, Mangattuparamba</p>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface text-sm font-medium text-text-primary border border-border">
              82.5% — Distinction
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-background border border-border/50 hover:border-accent/30 transition-colors">
            <span className="text-sm font-mono text-text-muted tracking-wider block mb-4">2021–2024</span>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
              B.Sc. Computer Science
            </h3>
            <p className="text-text-muted mb-6">Government College Kasaragod</p>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface text-sm font-medium text-text-primary border border-border">
              73.39% — First Class
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
