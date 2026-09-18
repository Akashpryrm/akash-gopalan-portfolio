import React from 'react';
import { portfolioData } from '../data/portfolio';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.1a5.25 5.25 0 0 0-1.5-3.8 4.3 4.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a4.3 4.3 0 0 0-.1 3.8A5.25 5.25 0 0 0 3 9.6c0 5.7 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"></path><path d="M9 20c-5 1.5-5-2.5-7-3"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const Contact: React.FC = () => {
  const { github, linkedin } = portfolioData.personal;

  return (
    <section id="contact" className="py-32 bg-surface/10 border-t border-border/50 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        
        <h2 className="text-5xl md:text-7xl font-heading font-bold text-text-primary mb-6 tracking-tight">
          LET'S BUILD<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">
            SOMETHING GREAT.
          </span>
        </h2>
        
        <p className="text-xl text-text-muted mb-16 max-w-2xl mx-auto">
          Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
          <div className="flex items-center gap-4 text-text-muted hover:text-text-primary transition-colors">
            <Mail className="text-accent" />
            <span className="text-lg">akashpryrm@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-text-muted hover:text-text-primary transition-colors">
            <Phone className="text-accent" />
            <span className="text-lg">+91 9567885698</span>
          </div>
          <div className="flex items-center gap-4 text-text-muted hover:text-text-primary transition-colors">
            <MapPin className="text-accent" />
            <span className="text-lg">Kasaragod, Kerala, India</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:akashpryrm@gmail.com"
            className="px-8 py-4 rounded-full bg-text-primary text-background font-semibold hover:bg-accent hover:text-white transition-colors flex items-center gap-2"
          >
            Email Me
            <ExternalLink size={18} />
          </a>
          
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-border bg-surface/30 text-text-primary hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          )}
          
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-border bg-surface/30 text-text-primary hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
            >
              <GithubIcon />
              GitHub
            </a>
          )}
        </div>

      </div>
    </section>
  );
};
