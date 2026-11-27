type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'max-w-2xl mx-auto text-center px-2' : 'max-w-2xl'}>
      <p className="section-label mb-3">{label}</p>
      <h2 className="text-3xl sm:text-4xl font-display font-medium text-ink-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
