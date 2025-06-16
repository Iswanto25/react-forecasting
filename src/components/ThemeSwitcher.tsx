"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoSunny, IoMoon } from "react-icons/io5"; // Contoh ikon

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Tampilkan placeholder saat render di server untuk menghindari error
    return <div className="h-9 w-9 animate-pulse rounded-lg bg-slate-700" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg p-2 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700 dark:hover:text-slate-100"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <IoSunny className="h-5 w-5 text-slate-100" />
      ) : (
        <IoMoon className="h-5 w-5 text-slate" />
      )}
    </button>
  );
};
