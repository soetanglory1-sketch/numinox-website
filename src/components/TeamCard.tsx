import type { TeamMember } from '@/data/content';

type TeamCardProps = {
  member: TeamMember;
  compact?: boolean;
};

export function TeamCard({ member, compact = false }: TeamCardProps) {
  return (
    <article className="card card-hover flex flex-col h-full">
      <div className="flex items-start gap-4 mb-5">
        {member.photoUrl ? (
          <img
            src={member.photoUrl}
            alt={member.name}
            className="h-14 w-14 rounded-2xl object-cover border border-ink-200 dark:border-ink-700 shrink-0"
          />
        ) : (
          <div
            className="h-14 w-14 rounded-2xl bg-gradient-to-br from-ink-900 via-ink-800 to-accent-900 dark:from-accent-900/80 dark:to-ink-800
              border border-accent-500/20 dark:border-accent-500/30
              flex items-center justify-center font-display text-base font-semibold text-white shrink-0 shadow-sm"
            aria-hidden="true"
          >
            {member.initials}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-lg font-display font-medium text-ink-900 dark:text-white leading-snug">
            {member.name}
          </h3>
          <p className="text-xs font-mono font-medium text-accent-600 dark:text-accent-400 mt-1">
            {member.role}
          </p>
          {member.institutionNote && (
            <p className="text-xs text-ink-500 dark:text-ink-400 mt-1">
              {member.institutionNote}
            </p>
          )}
        </div>
      </div>

      <p
        className={`text-sm text-ink-600 dark:text-ink-300 leading-relaxed flex-1 ${
          compact ? 'line-clamp-4' : ''
        }`}
      >
        {member.bio}
      </p>

      {!compact && (
        <div className="mt-5 pt-4 border-t border-ink-100 dark:border-ink-800 flex flex-wrap gap-2">
          {member.focusAreas.map((area) => (
            <span
              key={area}
              className="px-2.5 py-1 text-xs font-mono rounded-lg bg-accent-50/80 text-accent-800 border border-accent-200/60 dark:bg-accent-950/50 dark:text-accent-300 dark:border-accent-800/60"
            >
              {area}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
