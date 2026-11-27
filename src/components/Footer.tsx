import { Link } from 'react-router-dom';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { siteConfig } from '@/data/content';

const footerColumns = [
  {
    title: 'Organisation',
    links: [
      { label: 'Home', to: '/' },
      { label: 'About Us', to: '/about' },
      { label: 'Our Work', to: '/our-work' },
      { label: 'Areas of Exploration', to: '/areas-of-exploration' },
    ],
  },
  {
    title: 'Initiatives & People',
    links: [
      { label: 'VitalLink', to: '/vitallink' },
      { label: 'Our Team', to: '/team' },
      { label: 'Collaborate', to: '/collaborate' },
      { label: 'Contact', to: '/contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-ink-200/80 dark:border-ink-800 bg-white dark:bg-ink-950">
      <div className="container-page py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5 text-ink-900 dark:text-white">
              <Logo className="h-8 w-8" />
              <span className="font-display text-xl font-semibold tracking-tight">Numinox</span>
            </Link>
            <p className="text-sm font-medium text-ink-800 dark:text-ink-200">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-ink-500 dark:text-ink-400 max-w-md leading-relaxed">
              {siteConfig.footerPositioning}
            </p>
            <div className="flex items-start gap-2 text-xs text-ink-500 dark:text-ink-400 pt-1">
              <MapPin className="h-3.5 w-3.5 text-accent-600 dark:text-accent-400 shrink-0 mt-0.5" />
              <span>{siteConfig.locationNote}</span>
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="md:col-span-3">
              <h4 className="text-xs font-mono font-medium tracking-widest uppercase text-ink-400 dark:text-ink-500 mb-4">
                {column.title}
              </h4>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-ink-600 dark:text-ink-300 hover:text-accent-600 dark:hover:text-accent-400 transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-ink-100 dark:border-ink-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-xs text-ink-600 dark:text-ink-400 hover:text-accent-600 dark:hover:text-accent-400 transition"
            >
              <Mail className="h-3.5 w-3.5" /> {siteConfig.email}
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 text-xs text-ink-600 dark:text-ink-400 hover:text-accent-600 dark:hover:text-accent-400 transition"
            >
              <Phone className="h-3.5 w-3.5" /> {siteConfig.phone}
            </a>
            <a
              href={siteConfig.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-ink-600 dark:text-ink-400 hover:text-accent-600 dark:hover:text-accent-400 transition"
            >
              <Globe className="h-3.5 w-3.5" /> {siteConfig.website}
            </a>
          </div>

          <p className="text-xs font-mono text-ink-400 dark:text-ink-500">
            Emerging research &amp; innovation organisation • Concepts in exploration
          </p>
        </div>

        <div className="mt-6">
          <p className="text-xs text-ink-400 dark:text-ink-500">
            &copy; {new Date().getFullYear()} Numinox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
