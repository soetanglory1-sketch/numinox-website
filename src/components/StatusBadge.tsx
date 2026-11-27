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
  'Active initiative': {
    wrapper:
      'bg-accent-50 text-accent-800 border-accent-200 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-800/80',
    dot: 'bg-accent-500',
  },
  'Institutional initiative': {
    wrapper:
      'bg-ink-100 text-ink-800 border-ink-200 dark:bg-ink-800/80 dark:text-ink-200 dark:border-ink-700',
    dot: 'bg-accent-600 dark:bg-accent-400',
  },
  'Ongoing research': {
    wrapper:
      'bg-accent-50/70 text-accent-800 border-accent-200/80 dark:bg-accent-950/40 dark:text-accent-300 dark:border-accent-800/70',
    dot: 'bg-teal-500',
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const style = statusStyles[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-medium rounded-full border ${style.wrapper}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  );
}
