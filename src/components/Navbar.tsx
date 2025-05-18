'use client';
import { useDarkMode } from '@/hooks/useDarkMode';

export function Navbar() {
  const [isDark, toggleTheme] = useDarkMode();

  return (
    <header className="w-full px-6 py-4 bg-white dark:bg-gray-900 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Travail
        </h1>

        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full"
        >
          {isDark ? '🌙 Dark' : '☀️ Light'}
        </button>
      </div>
    </header>
  );
}
