"use client";

import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { skills } from "@/lib/skills";

export default function Skills() {
  const locale = useLocale();

  const { resolvedTheme } = useTheme();

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

  text-zinc-900
  dark:text-white
  "
        >
          {
            locale === "es"
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

          {data.map((group, index) => (

            <div
              key={index}
              className="
              border
              border-zinc-200
              dark:border-white/10

              bg-white
              dark:bg-transparent

              rounded-2xl
              p-6

              shadow-sm
              dark:shadow-none
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
                gap-6
                "
              >

                {group.items.map((item) => {

                  const Icon = item.icon;

                  return (

                    <div
                      key={item.name}
                      className="
  group

  flex
  flex-col
  items-center
  justify-center

  w-28
  h-28

  rounded-xl

  border
  border-transparent

  bg-zinc-50
  dark:bg-white/[0.02]

  hover:bg-zinc-100
  dark:hover:bg-white/[0.05]

  hover:border-cyan-500
  hover:shadow-md

  transition-all
  duration-300

  hover:-translate-y-2
  hover:scale-105
  "
                    >

                      <Icon
                        size={50}
                        className="
  transition-all
  duration-300
  group-hover:scale-125
  "
                        style={{
                          color:
                            resolvedTheme === "dark"
                              ? item.darkColor
                              : item.lightColor
                        }}
                      />

                      <span
                        className="
  mt-3
  text-sm
  font-medium

  text-zinc-700
  dark:text-zinc-300

  group-hover:text-zinc-900
  dark:group-hover:text-white

  transition-colors
  "
                      >
                        {item.name}
                      </span>

                    </div>

                  );

                })}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}