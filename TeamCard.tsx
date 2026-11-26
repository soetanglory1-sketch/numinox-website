import type { TeamMember } from '@/data/content';

type TeamCardProps = {
  member: TeamMember;
  compact?: boolean;
};

export function TeamCard({ member, compact = false }: TeamCardProps) {
  return (
    <article className="card card-hover flex flex-col h-full">
      <div className="flex items-center gap-4 mb-5">
        {member.photoUrl ? (
          <img
            src={member.photoUrl}
            alt={member.name}
            className="h-16 w-16 rounded-full object-cover border border-ink-200 dark:border-ink-700 shrink-0"
          />
        ) : (
          <div
            className="h-16 w-16 rounded-full bg-ink-900 dark:bg-ink-800 border border-ink-200 dark:border-ink-700
              flex items-center justify-center font-display text-lg font-medium text-white shrink-0"
            aria-hidden="true"
          >
            {member.initials}
          </div>
        )}
        <div>
          <h3 className="text-lg font-display font-medium text-ink-900 dark:text-white">
            {member.name}
          </h3>
          <p className="text-xs font-mono text-accent-600 dark:text-accent-400 mt-0.5">
            {member.role}
          </p>
          {member.institutionNote && (
            <p className="text-xs text-ink-400 dark:text-ink-500 mt-1">
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
        <div className="mt-5 pt-4 border-t border-ink-100 dark:border-ink-800 flex flex-wrap gap-1.5">
          {member.focusAreas.map((area) => (
            <span
              key={area}
              className="px-2.5 py-1 text-xs font-mono rounded-md bg-ink-100/80 text-ink-600 dark:bg-ink-800 dark:text-ink-300"
            >
              {area}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}