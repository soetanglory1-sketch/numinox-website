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
        rx="9"
        className="fill-ink-900 dark:fill-ink-800"
      />
      <path
        d="M9.5 27V13L18.5 27V13"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 13L30.5 27M30.5 13L22.5 27"
        stroke="#38bdf8"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
