import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { ThemeToggle } from '@/components/ThemeToggle';

const navLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Work', to: '/our-work' },
  { label: 'Areas of Exploration', to: '/areas-of-exploration' },
  { label: 'VitalLink', to: '/vitallink' },
  { label: 'Our Team', to: '/team' },
  { label: 'Collaborate', to: '/collaborate' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/95 backdrop-blur-lg border-b border-ink-200/80 shadow-sm dark:bg-ink-950/95 dark:border-ink-800'
          : 'bg-white/80 backdrop-blur-md border-b border-ink-200/50 dark:bg-ink-950/80 dark:border-ink-800/60'
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 lg:h-20" aria-label="Primary Navigation">
        <Link to="/" className="flex items-center gap-2.5 group shrink-0" aria-label="Numinox Home">
          <span className="text-accent-600 dark:text-accent-400 group-hover:text-accent-700 dark:group-hover:text-accent-300 transition-colors">
            <Logo className="h-8 w-8" />
          </span>
          <span className="font-display text-xl font-semibold text-ink-900 dark:text-white tracking-tight">
            Numinox
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-accent-600 bg-accent-50 dark:text-accent-400 dark:bg-accent-950/50'
                    : 'text-ink-600 hover:text-ink-900 hover:bg-ink-100/80 dark:text-ink-300 dark:hover:text-white dark:hover:bg-ink-800/60'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contact" className="hidden md:inline-flex btn-primary py-2.5 px-5">
            Contact Us
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="xl:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-ink-200/80 dark:border-ink-800
              text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800 transition"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Drawer */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-page py-5 space-y-1.5 bg-white dark:bg-ink-950 border-t border-ink-100 dark:border-ink-800 shadow-lg">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `block px-4 py-3 text-base font-medium rounded-xl transition ${
                  isActive
                    ? 'text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-950/50'
                    : 'text-ink-700 dark:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-3">
            <Link to="/contact" className="btn-primary w-full justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
