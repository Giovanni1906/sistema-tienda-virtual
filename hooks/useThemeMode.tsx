import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export function useThemeMode() {
  const [theme, setTheme] = useState<Theme>("system");

  // aplicar tema
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = saved || "system";
    applyTheme(initialTheme, prefersDark);
    setTheme(initialTheme);
  }, []);

  const applyTheme = (mode: Theme, prefersDark = false) => {
    const root = document.documentElement;

    if (mode === "dark" || (mode === "system" && prefersDark)) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", mode);
  };

  const changeTheme = (mode: Theme) => {
    setTheme(mode);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(mode, prefersDark);
  };

  return { theme, changeTheme };
}
