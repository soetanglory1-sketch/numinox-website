import type { StatusType } from '@/data/content';

type StatusBadgeProps = {
  status: StatusType;
};

const statusStyles: Record<StatusType, { wrapper: string; dot: string }> = {
  'In development': {
    wrapper:
      'bg-teal-50 text-teal-800 border-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800/80',
    dot: 'bg-teal-500',
  },
  'Early-stage initiative': {
    wrapper:
      'bg-accent-50 text-accent-800 border-accent-200 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-800/80',
    dot: 'bg-accent-500',
  },
  'Concept / Proposal': {
    wrapper:
      'bg-ink-100 text-ink-700 border-ink-200 dark:bg-ink-800/80 dark:text-ink-300 dark:border-ink-700',
    dot: 'bg-ink-500 dark:bg-ink-400',
  },
  'Under exploration': {
    wrapper:
      'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/70',
    dot: 'bg-amber-500',
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const style = statusStyles[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-full border ${style.wrapper}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  );
}