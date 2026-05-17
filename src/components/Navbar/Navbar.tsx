"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {

  const locale = useLocale();

  const t = useTranslations("navbar");

  return (

    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      backdrop-blur-md
      border-b
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >

        <Link
          href={`/${locale}`}
          className="
          font-bold
          text-xl
          "
        >
          ingcristiangonzalez.lat
        </Link>

        <div className="flex items-center gap-6">

          <ul className="hidden md:flex gap-6">

            <li>
              <Link
                href="#experience"
                className="
                hover:text-cyan-500
                transition
                "
              >
                {t("experience")}
              </Link>
            </li>

            <li>
              <Link
                href="#projects"
                className="
                hover:text-cyan-500
                transition
                "
              >
                {t("projects")}
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="
                hover:text-cyan-500
                transition
                "
              >
                {t("contact")}
              </Link>
            </li>

          </ul>

          <LanguageSwitcher />

          <ThemeToggle />

        </div>

      </div>

    </nav>

  );

}