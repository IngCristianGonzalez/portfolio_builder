"use client";

import { useLocale } from "next-intl";
import { FiDownload } from "react-icons/fi";

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
      group

      inline-flex
      items-center
      gap-3

      px-6
      py-3

      rounded-xl

      border
      border-zinc-200
      dark:border-white/10

      bg-white
      dark:bg-white/[0.03]

      text-zinc-800
      dark:text-white

      shadow-sm

      hover:border-cyan-500
      hover:text-cyan-500

      hover:shadow-lg
      hover:shadow-cyan-500/10

      hover:-translate-y-1

      transition-all
      duration-300
      "
    >

      <FiDownload
        size={18}
        className="
        transition-transform
        duration-300
        group-hover:translate-y-[2px]
        "
      />

      <span>

        {
          locale === "es"
            ? "Descargar CV"
            : "Download CV"
        }

      </span>

    </a>

  );

}