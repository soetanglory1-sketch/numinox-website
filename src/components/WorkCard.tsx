import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { WorkItem } from '@/data/content';
import { StatusBadge } from '@/components/StatusBadge';

type WorkCardProps = {
  item: WorkItem;
};

export function WorkCard({ item }: WorkCardProps) {
  const destination = item.slug === 'vitallink' ? '/vitallink' : `/our-work#${item.slug}`;

  return (
    <Link to={destination} className="card card-hover group flex flex-col h-full">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
        <span className="text-xs font-mono text-ink-500 dark:text-ink-400 uppercase tracking-wider">
          {item.category}
        </span>
        <StatusBadge status={item.status} />
      </div>

      <h3 className="text-2xl font-display font-medium text-ink-900 dark:text-white mb-1.5 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
        {item.name}
      </h3>
      <p className="text-sm font-medium text-accent-600 dark:text-accent-400 mb-4">
        {item.tagline}
      </p>

      <p className="text-sm text-ink-600 dark:text-ink-300 leading-relaxed flex-1">
        {item.summary}
      </p>

      <div className="mt-6 pt-4 border-t border-ink-100 dark:border-ink-800 flex items-center justify-between">
        <span className="text-xs font-mono text-ink-400 dark:text-ink-500">
          {item.originContext}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-ink-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors shrink-0 ml-2">
          {item.slug === 'vitallink' ? 'Explore VitalLink' : 'Read details'}
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
