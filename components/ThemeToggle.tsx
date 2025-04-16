"use client";

import { useThemeMode } from "@/hooks/useThemeMode";

export default function ThemeToggle() {
  const { theme, changeTheme } = useThemeMode();

  return (
    <div className="flex gap-2 items-center text-sm">
      <button
        onClick={() => changeTheme("light")}
        className={`px-3 py-1 rounded ${theme === "light" ? "bg-primary text-white" : "bg-gray-200 dark:bg-gray-700"}`}
      >
        ☀️ Claro
      </button>

      <button
        onClick={() => changeTheme("dark")}
        className={`px-3 py-1 rounded ${theme === "dark" ? "bg-secondary text-white" : "bg-gray-200 dark:bg-gray-700"}`}
      >
        🌙 Oscuro
      </button>

      <button
        onClick={() => changeTheme("system")}
        className={`px-3 py-1 rounded ${theme === "system" ? "bg-gray-800 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
      >
        🖥️ Auto
      </button>
    </div>
  );
}
