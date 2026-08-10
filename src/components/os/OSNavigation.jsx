import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const SECTIONS = [
  { path: '/', label: '1 - HOME' },
  { path: '/identity', label: '2 - IDENTITY' },
  { path: '/research', label: '3 - RESEARCH' },
  { path: '/projects', label: '4 - PROJECTS' },
  { path: '/certifications', label: '5 - CERTIFICATIONS' },
  { path: '/stack', label: '6 - STACK' },
  { path: '/journey', label: '7 - JOURNEY' },
  { path: '/contact', label: '8 - CONTACT' },
];

const OSNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Keyboard shortcuts
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const num = parseInt(e.key);
      if (num >= 1 && num <= 8) {
        const section = SECTIONS[num - 1];
        if (section) {
          navigate(section.path);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div className="fixed top-0 left-0 w-full z-40 p-4 pointer-events-none">
      <div className="flex justify-between items-start font-mono text-[10px] sm:text-xs text-os-text-primary uppercase tracking-widest pointer-events-auto">

        {/* Left: Branding */}
        <Link to="/" className="flex flex-col gap-1 hover:opacity-80 transition-opacity">
          <span className="text-os-cyan font-bold">KABIR.OS v2.0</span>
          <span className="opacity-50">RESEARCH_ENV // SECURE</span>
        </Link>

        {/* Right: Section Tracker (Desktop) */}
        <div className="hidden md:flex flex-col items-end gap-1">
          {SECTIONS.map((section) => {
            const isActive = location.pathname === section.path;
            return (
              <Link
                key={section.path}
                to={section.path}
                className={`hover:text-os-cyan transition-colors text-right ${isActive ? 'text-os-cyan' : 'opacity-40'}`}
              >
                [{section.label}]
              </Link>
            );
          })}
        </div>

        {/* Mobile menu hint & toggle */}
        <div className="md:hidden flex flex-col items-end">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? '[ CLOSE ]' : 'SYS.MENU [1-8]'}
          </button>

          {isMobileMenuOpen && (
            <div className="flex flex-col items-end gap-2 mt-4 bg-os-bg/90 p-4 border border-os-border backdrop-blur-md">
              {SECTIONS.map((section) => (
                <Link
                  key={section.path}
                  to={section.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`hover:text-os-cyan transition-colors text-right ${location.pathname === section.path ? 'text-os-cyan' : 'opacity-40'}`}
                >
                  [{section.label}]
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default OSNavigation;
