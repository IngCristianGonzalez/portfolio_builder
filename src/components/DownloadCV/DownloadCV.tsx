"use client";

import { useLocale } from "next-intl";

export default function DownloadCV() {

  const locale = useLocale();

  const cvFile =
    locale === "es"
      ? "/cv/cristian-gonzalez-es.pdf"
      : "/cv/cristian-gonzalez-en.pdf";

  return (

    <a
      href={cvFile}
      download
      className="
      px-6
      py-3

      rounded-xl

      border
      border-zinc-200
      dark:border-white/10

      text-zinc-800
      dark:text-white

      hover:border-cyan-500
      hover:text-cyan-500

      transition-all
      duration-300
      "
    >

      {
        locale === "es"
          ? "Descargar CV"
          : "Download CV"
      }

    </a>

  );

}