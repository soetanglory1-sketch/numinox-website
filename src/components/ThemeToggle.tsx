import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center h-10 w-10 rounded-lg
        text-ink-500 hover:text-ink-900 hover:bg-ink-100
        dark:text-ink-400 dark:hover:text-white dark:hover:bg-ink-800
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500"
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5" strokeWidth={1.6} />
      ) : (
        <Moon className="h-5 w-5" strokeWidth={1.6} />
      )}
    </button>
  );
}
