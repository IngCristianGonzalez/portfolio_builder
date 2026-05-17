"use client";

import { useLocale } from "next-intl";
import { experience } from "@/lib/experience";

export default function Experience() {
  const locale = useLocale();

  const data =
    experience[locale as keyof typeof experience];

  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-16">
          {locale === "es"
            ? "Experiencia"
            : "Experience"}
        </h2>

        <div className="relative border-l">

          {data.map((item, index) => (
            <div
              key={index}
              className="ml-8 mb-12 relative"
            >
              <div
                className="
                absolute
                -left-[42px]
                w-5
                h-5
                rounded-full
                bg-cyan-400
                "
              />

              <p className="text-cyan-500">
                {item.year}
              </p>

              <h3 className="text-2xl font-semibold mt-2">
                {item.role}
              </h3>

              <p className="text-zinc-500 dark:text-zinc-400">
                {item.company}
              </p>

              <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}