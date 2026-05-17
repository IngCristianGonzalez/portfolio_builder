"use client";


import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLocale } from "next-intl";


export default function Contact() {

  const locale = useLocale();

  return (

    <section
      id="contact"
      className="
      py-24
      px-6
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        "
      >

        <div
          className="
          border
          rounded-3xl
          p-10
          "
        >

          <p className="text-cyan-500">

            {
              locale==="es"
              ? "Disponible para proyectos"
              : "Available for projects"
            }

          </p>

          <h2
            className="
            text-5xl
            font-bold
            mt-4
            "
          >

            {
              locale==="es"
              ? "Trabajemos juntos"
              : "Let's work together"
            }

          </h2>

          <p
            className="
            mt-6
            text-zinc-500
            dark:text-zinc-400
            "
          >

            {
              locale==="es"
              ? "¿Tienes una idea o proyecto? Hablemos."
              : "Have an idea or project? Let's talk."
            }

          </p>

          <div
            className="
            mt-10
            grid
            md:grid-cols-2
            gap-8
            "
          >

            <div className="space-y-5">

              <div className="flex gap-3 items-center">
                <Mail size={18}/>
                <span>
                  cristian@email.com
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <MapPin size={18}/>
                <span>
                  Colombia
                </span>
              </div>

            </div>

            <div className="space-y-5">

              <a
                href="#"
                className="
                flex
                gap-3
                items-center
                hover:text-cyan-500
                "
              >
               <FaGithub size={18}/>
    GitHub
              </a>

              <a
                href="#"
                className="
                flex
                gap-3
                items-center
                hover:text-cyan-500
                "
              >
                <FaLinkedin size={18}/>
    LinkedIn
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}