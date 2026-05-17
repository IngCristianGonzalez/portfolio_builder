"use client";

import { useLocale } from "next-intl";
import { skills } from "@/lib/skills";

export default function Skills() {

  const locale = useLocale();

  const data =
    skills[
      locale as keyof typeof skills
    ];

  return (

    <section
      id="skills"
      className="
      py-24
      px-6
      "
    >

      <div className="max-w-7xl mx-auto">

        <h2
          className="
          text-4xl
          font-bold
          mb-16
          "
        >
          {
            locale==="es"
            ? "Herramientas"
            : "My Toolbox"
          }
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          "
        >

          {data.map((group,index)=>(

            <div
              key={index}
              className="
              border
              rounded-2xl
              p-6
              "
            >

              <h3
                className="
                text-2xl
                font-bold
                mb-6
                "
              >
                {group.category}
              </h3>

              <div
                className="
                flex
                flex-wrap
                gap-3
                "
              >

                {group.items.map((item)=>(

                  <span
                    key={item}
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-cyan-500/10
                    text-cyan-500
                    "
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}