import React, { type ReactNode } from 'react';
import { Navbar } from '../components/Navbar';
import { portfolioData } from '../data/portfolio';
import { Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.1a5.25 5.25 0 0 0-1.5-3.8 4.3 4.3 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a4.3 4.3 0 0 0-.1 3.8A5.25 5.25 0 0 0 3 9.6c0 5.7 3.3 6.7 6.5 7.1a4.8 4.8 0 0 0-1 3.03v4"></path><path d="M9 20c-5 1.5-5-2.5-7-3"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { name, primaryTitle, github, linkedin } = portfolioData.personal;

  return (
    <div className="min-h-screen bg-background text-text-primary selection:bg-accent/30 selection:text-text-primary font-sans">
      <Navbar />
      <main className="w-full">
        {children}
      </main>
      <footer className="py-12 border-t border-border/50 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-lg text-text-primary tracking-widest uppercase">{name}</h3>
            <p className="text-sm text-text-muted mt-1">{primaryTitle}</p>
          </div>

          <div className="flex items-center gap-6">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors flex items-center gap-2 text-sm">
                <GithubIcon />
                <span>GitHub</span>
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent transition-colors flex items-center gap-2 text-sm">
                <LinkedinIcon />
                <span>LinkedIn</span>
              </a>
            )}
            <a href="mailto:akashpryrm@gmail.com" className="text-text-muted hover:text-accent transition-colors flex items-center gap-2 text-sm">
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>

          <div className="text-sm text-text-muted text-center md:text-right">
            <p>© {new Date().getFullYear()} {name}.</p>
          </div>

        </div>
      </footer>
    </div>
  );
};
