"use client";

import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
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

      <div className="max-w-7xl mx-auto">

        <p
          className="
          uppercase
          tracking-[4px]
          text-cyan-500
          text-sm
          "
        >
          {locale==="es"
            ? "Contacto"
            : "Contact"}
        </p>

        <h2
          className="
          text-5xl
          md:text-6xl
          font-bold
          mt-4
          "
        >
          {locale==="es"
            ? "¿Trabajemos juntos?"
            : "Let's work together?"}
        </h2>

        <p
          className="
          mt-8
          max-w-xl
          text-zinc-500
          text-lg
          leading-relaxed
          "
        >
          {locale==="es"
            ? "Siempre estoy abierto a nuevas oportunidades y proyectos interesantes. Si tienes una idea o necesitas ayuda con un proyecto, no dudes en contactarme."
            : "I'm always open to new opportunities and interesting projects. If you have an idea or need help with a project, don't hesitate to contact me."}
        </p>

        <div
          className="
          mt-16
          grid
          md:grid-cols-2
          gap-20
          "
        >

          {/* izquierda */}

          <div className="space-y-8">

            <div className="flex items-center gap-4">

              <div
                className="
                w-12
                h-12
                rounded-full
                bg-white/5
                flex
                items-center
                justify-center
                "
              >
                <Mail size={18}/>
              </div>

              <div>
                <p className="text-xs text-zinc-500 uppercase">
                  Email
                </p>

                <p className="font-medium">
                  correo@email.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4">

              <div
                className="
                w-12
                h-12
                rounded-full
                bg-white/5
                flex
                items-center
                justify-center
                "
              >
                <MessageCircle size={18}/>
              </div>

              <div>
                <p className="text-xs text-zinc-500 uppercase">
                  WhatsApp
                </p>

                <p className="font-medium">
                  +57 300 0000000
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4">

              <div
                className="
                w-12
                h-12
                rounded-full
                bg-white/5
                flex
                items-center
                justify-center
                "
              >
                <MapPin size={18}/>
              </div>

              <div>
                <p className="text-xs text-zinc-500 uppercase">
                  {locale==="es"
                  ?"Ubicación"
                  :"Location"}
                </p>

                <p className="font-medium">
                  Colombia
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4">

              <div
                className="
                w-12
                h-12
                rounded-full
                bg-white/5
                flex
                items-center
                justify-center
                "
              >
                <Clock size={18}/>
              </div>

              <div>
                <p className="text-xs text-zinc-500 uppercase">
                  {locale==="es"
                  ?"Zona horaria"
                  :"Timezone"}
                </p>

                <p className="font-medium">
                  GMT-5
                </p>
              </div>

            </div>

          </div>

          {/* derecha */}

          <div
            className="
            flex
            flex-col
            justify-center
            gap-8
            "
          >

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
              w-fit
              px-6
              py-4
              rounded-full
              bg-white/5
              flex
              items-center
              gap-3
              hover:bg-cyan-500/20
              transition
              "
            >

              <FaLinkedin />

              LinkedIn

            </a>

            <div className="flex items-center gap-3">

              <div
                className="
                w-3
                h-3
                rounded-full
                bg-green-500
                animate-pulse
                "
              />

              <span className="text-zinc-400">

                {locale==="es"
                ? "Disponible para freelance"
                : "Available for freelance"}

              </span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}