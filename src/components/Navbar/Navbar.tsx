"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
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
          href="/"
          className="
          font-bold
          text-xl
          "
        >
          Cristian.dev
        </Link>

        <div className="flex items-center gap-6">

          <ul className="hidden md:flex gap-6">

            <li>
              <a href="#experience">
                Experience
              </a>
            </li>

            <li>
              <a href="#projects">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact">
                Contact
              </a>
            </li>

          </ul>

          <LanguageSwitcher/>

          <ThemeToggle/>

        </div>
      </div>
    </nav>
  );
}