import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { usePageTitle } from '@/hooks/usePageTitle';

export function NotFoundPage() {
  usePageTitle('Page Not Found');

  return (
    <div className="container-page py-32 text-center">
      <p className="font-mono text-sm text-accent-600 dark:text-accent-400 mb-3">404</p>
      <h1 className="text-4xl font-display font-medium text-ink-900 dark:text-white mb-4">
        This page could not be found.
      </h1>
      <p className="text-ink-500 dark:text-ink-400 mb-8 max-w-md mx-auto">
        The page you are looking for may have been moved or does not exist.
      </p>
      <Link to="/" className="btn-primary">
        <ArrowLeft className="h-4 w-4" /> Return to Home
      </Link>
    </div>
  );
}
