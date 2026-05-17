"use client";

import { useLocale } from "next-intl";
import { projects } from "@/lib/project";

export default function Projects() {

  const locale = useLocale();

  const data =
    projects[
      locale as keyof typeof projects
    ];

  return (

    <section
      id="projects"
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
            ? "Proyectos"
            : "Projects"
          }
        </h2>

        <div
          className="
          grid
          md:grid-cols-2
          gap-8
          "
        >

          {data.map((project,index)=>(

            <div
              key={index}
              className="
              border
              rounded-2xl
              p-6
              hover:-translate-y-2
              transition
              shadow-lg
              "
            >

              <h3
                className="
                text-2xl
                font-bold
                "
              >
                {project.title}
              </h3>

              <p
                className="
                mt-4
                text-zinc-500
                dark:text-zinc-400
                "
              >
                {project.description}
              </p>

              <div
                className="
                flex
                gap-2
                flex-wrap
                mt-6
                "
              >

              {project.stack.map((tech)=>(

                <span
                  key={tech}
                  className="
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  bg-cyan-500/10
                  text-cyan-500
                  "
                >
                  {tech}
                </span>

              ))}

              </div>

              <div
                className="
                mt-6
                flex
                gap-4
                "
              >

                <a
                  href={project.github}
                  target="_blank"
                  className="
                  underline
                  "
                >
                  Github
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="
                  underline
                  "
                >
                  Demo
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}