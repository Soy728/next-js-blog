"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function ThemeSwitcher() {
  const [currnetTheme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (!("theme" in localStorage)) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const nextTheme = isDark ? "light" : "dark";
      applyTheme(nextTheme);
    }
    const currentColor = localStorage.getItem("theme") as Theme;
    applyTheme(currentColor);
  }, []);

  const applyTheme = (nextTheme: Theme) => {
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const handleToggle = () => {
    const nextTheme = currnetTheme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
  };
  return (
    <button cursor-pointer onClick={handleToggle}>
      <ThemeIcon theme={currnetTheme}></ThemeIcon>
    </button>
  );
}

export default ThemeSwitcher;

type Props = {
  theme: Theme;
};

const ThemeIcon = ({ theme }: Props) => {
  switch (theme) {
    case "light":
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      );
    case "dark":
      return (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      );
  }
};
