type LogoProps = {
  className?: string;
};

export function Logo({ className = 'h-8 w-8' }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="1.5"
        y="1.5"
        width="37"
        height="37"
        rx="8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.25"
      />
      <path
        d="M12 28V12L20 22L28 12V28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="30" r="1.75" className="fill-accent-600 dark:fill-accent-400" />
    </svg>
  );
}
