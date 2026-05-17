"use client";

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  const code = `const developer = {
  role: "Software Engineer",
  stack: [
    "Laravel",
    "Java",
    "Docker"
  ],
  focus: "Scalable Systems"
};`;

  return (
    <section className="min-h-screen flex items-center justify-center px-8">
      <div className="grid
md:grid-cols-2
gap-16
items-center
max-w-7xl
w-full
mx-auto max-w-7xl w-full">

        <div>
          <p className="text-cyan-500">
            {t("status")}
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            {t("title")}
            <br />

            <span className="text-cyan-400">
              {t("name")}
            </span>
          </h1>

          <p className="mt-6 text-zinc-500 dark:text-zinc-400 text-lg">
            {t("subtitle")}
          </p>


          <div className="flex gap-4 mt-8">

            <button
              className="
px-6
py-3
rounded-xl
bg-cyan-500
text-black
font-semibold
"
            >
              Projects
            </button>

            <button
              className="
px-6
py-3
rounded-xl
border
"
            >
              Download CV
            </button>

          </div>


        </div>

        <div className="rounded-xl border bg-zinc-900 p-6 shadow-lg">

          {/* Barra estilo editor */}
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <pre className="overflow-auto whitespace-pre-wrap text-sm">
            <code className="font-mono text-cyan-300">
              {code}
            </code>
          </pre>

        </div>

      </div>
    </section>
  );
}