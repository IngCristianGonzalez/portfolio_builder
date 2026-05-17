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

      backdrop-blur-xl

      bg-white/80
      dark:bg-black/30

      border-b
      border-zinc-200
      dark:border-white/10

      transition-all
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto

        px-8
        h-20

        flex
        items-center
        justify-between
        "
      >

        {/* Logo */}

        <Link
          href={`/${locale}`}
          className="
          text-2xl
          font-bold

          text-zinc-900
          dark:text-white

          hover:scale-105
          transition
          "
        >

          ing

          <span
            className="
            text-cyan-500
            "
          >
            cristiangonzalez
          </span>

          <span
            className="
            text-zinc-500
            dark:text-zinc-400
            "
          >
            .lat
          </span>

        </Link>


        {/* Menú */}

        <div
          className="
          flex
          items-center
          gap-8
          "
        >

          <ul
            className="
            hidden
            md:flex
            items-center
            gap-8
            "
          >

            <li>

              <Link
                href="#experience"
                className="
                relative

                text-zinc-700
                dark:text-zinc-300

                hover:text-cyan-500

                transition-all
                duration-300

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0

                after:bg-cyan-500
                after:transition-all

                hover:after:w-full
                "
              >
                {t("experience")}
              </Link>

            </li>


            <li>

              <Link
                href="#projects"
                className="
                relative

                text-zinc-700
                dark:text-zinc-300

                hover:text-cyan-500

                transition-all
                duration-300

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0

                after:bg-cyan-500
                after:transition-all

                hover:after:w-full
                "
              >
                {t("projects")}
              </Link>

            </li>


            <li>

              <Link
                href="#contact"
                className="
                relative

                text-zinc-700
                dark:text-zinc-300

                hover:text-cyan-500

                transition-all
                duration-300

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0

                after:bg-cyan-500
                after:transition-all

                hover:after:w-full
                "
              >
                {t("contact")}
              </Link>

            </li>

          </ul>


          <div
            className="
            flex
            items-center
            gap-3

            pl-6
            border-l
            border-zinc-200
            dark:border-white/10
            "
          >

            <LanguageSwitcher />

            <ThemeToggle />

          </div>

        </div>

      </div>

    </nav>

  );

}