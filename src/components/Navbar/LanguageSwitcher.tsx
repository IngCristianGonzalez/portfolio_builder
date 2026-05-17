"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  // Detectar idioma actual
  const currentLocale =
    pathname.startsWith("/en")
      ? "en"
      : "es";

  // Cambiar idioma
  const nextLocale =
    currentLocale === "es"
      ? "en"
      : "es";

  // Construir nueva ruta
  const newPath = pathname.replace(
    `/${currentLocale}`,
    `/${nextLocale}`
  );

  return (
    <Link
      href={newPath}
      className="
      px-4
      py-2
      border
      rounded-full
      hover:scale-105
      transition
      "
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}