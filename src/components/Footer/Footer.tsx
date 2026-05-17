"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

export default function Footer() {

  const locale = useLocale();

  return (

    <footer
      className="
      border-t
      border-white/10
      py-8
      px-6
      mt-20
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-6
        "
      >

        <div
          className="
          text-zinc-500
          text-sm
          "
        >
          © {new Date().getFullYear()} Cristian González
        </div>

        <nav>

          <ul
            className="
            flex
            gap-8
            text-sm
            text-zinc-400
            "
          >

            <li>
              <Link
                href={`/${locale}`}
                className="
                hover:text-cyan-500
                transition
                "
              >
                {locale==="es"
                  ? "Inicio"
                  : "Home"}
              </Link>
            </li>

            <li>
              <Link
                href="#experience"
                className="
                hover:text-cyan-500
                transition
                "
              >
                {locale==="es"
                  ? "Experiencia"
                  : "Experience"}
              </Link>
            </li>

            <li>
              <Link
                href="#skills"
                className="
                hover:text-cyan-500
                transition
                "
              >
                {locale==="es"
                  ? "Habilidades"
                  : "Skills"}
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
                {locale==="es"
                  ? "Contacto"
                  : "Contact"}
              </Link>
            </li>

          </ul>

        </nav>

      </div>

    </footer>

  );

}