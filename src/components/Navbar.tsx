import { Menu, X, ArrowUpRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = links.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b
        ${scrolled ? 'bg-background/80 backdrop-blur-xl border-border/50 py-3' : 'bg-transparent border-transparent py-6'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Left: Monogram */}
        <div className="flex-shrink-0 flex items-center gap-2">
          <a href="#home" className="flex flex-col leading-none text-text-primary group">
            <span className="font-heading font-bold text-2xl tracking-tighter">
              A<span className="text-accent">G</span>
            </span>
          </a>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center space-x-1 lg:space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3 py-2 text-[13px] font-medium tracking-wide uppercase transition-colors
                  ${activeSection === link.href.substring(1) ? 'text-text-primary' : 'text-text-muted hover:text-text-primary'}
                `}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full" />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Right: CTA */}
        <div className="hidden md:flex flex-shrink-0">
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-surface/50 text-text-primary text-sm font-medium hover:border-accent/50 hover:bg-accent/10 transition-all"
          >
            Let's Connect
            <ArrowUpRight size={16} className="text-accent" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 text-text-muted hover:text-text-primary focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-surface border-b border-border/50 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wide
                ${activeSection === link.href.substring(1) ? 'text-accent' : 'text-text-muted'}
              `}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-border/50">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Let's Connect <ArrowUpRight size={16} className="text-accent" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
