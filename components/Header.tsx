
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, FileText } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const githubUrl = RESUME_DATA.profile.socials.find(s => s.platform === 'GitHub')?.url || '#';

  return (
    <>
      <header 
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-0 flex justify-center`}
      >
        <div className={`
          relative flex items-center justify-between md:justify-center
          w-full md:w-auto md:min-w-[600px]
          px-6 py-3 
          rounded-2xl border 
          transition-all duration-300
          ${isScrolled 
            ? 'bg-zinc-900/80 backdrop-blur-md border-white/10 shadow-lg shadow-black/50' 
            : 'bg-transparent border-transparent'
          }
        `}>
          
          {/* Logo (Visible on mobile or when not scrolled on desktop for balance) */}
          <a href="#" className="md:hidden text-lg font-bold text-zinc-100 tracking-tight flex items-center gap-2">
            <Code2 className="text-accent-500" size={20} />
            <span>NS</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="w-px h-4 bg-zinc-700 mx-2"></div>
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              GitHub
            </a>
             <a 
              href={RESUME_DATA.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors flex items-center gap-1"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-sm pt-24 px-6 md:hidden">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-2xl font-medium text-zinc-300 hover:text-accent-400 transition-colors"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-zinc-800 w-full my-4"></div>
            <a 
              href={githubUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-medium text-zinc-300 hover:text-white"
            >
              GitHub Profile
            </a>
            <a 
              href={RESUME_DATA.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-medium text-accent-500 flex items-center gap-2"
            >
              <FileText size={24} />
              View Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
};
