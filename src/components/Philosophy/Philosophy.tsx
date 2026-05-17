"use client";

import { useLocale } from "next-intl";

export default function Philosophy() {

  const locale = useLocale();

  return (

    <section
      id="philosophy"
      className="
      py-24
      px-6
      "
    >

      <div className="max-w-6xl mx-auto">

        <p
          className="
          uppercase
          tracking-[4px]
          text-cyan-500
          text-sm
          mb-8
          "
        >
          {
            locale==="es"
            ? "Mi filosofía"
            : "My Philosophy"
          }
        </p>

        <div
          className="
          border-l-2
          border-cyan-500
          pl-8
          "
        >

          <blockquote
            className="
            text-2xl
            md:text-4xl
            italic
            text-zinc-400
            leading-relaxed
            "
          >

            {
              locale==="es"
              ? "Nunca hay dos proyectos iguales. Cada uno merece una atención única, un enfoque personalizado y el compromiso de entregar algo que realmente haga la diferencia."
              : "No two projects are the same. Each deserves unique attention, a personalized approach, and a commitment to delivering something that truly makes a difference."
            }

          </blockquote>

          <div
            className="
            flex
            items-center
            mt-10
            "
          >

            <div
              className="
              w-12
              h-[1px]
              bg-cyan-500
              mr-4
              "
            />

            <span className="text-zinc-500">
              Cristian González
            </span>

          </div>

        </div>

      </div>

    </section>

  );

}