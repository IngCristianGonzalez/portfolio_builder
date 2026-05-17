"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Evita errores de hidratación
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark"
            ? "light"
            : "dark"
        )
      }
      className="
      p-2
      border
      rounded-full
      hover:scale-105
      transition
      "
    >
      {
        theme === "dark"
          ? <Sun size={18}/>
          : <Moon size={18}/>
      }
    </button>
  );
}