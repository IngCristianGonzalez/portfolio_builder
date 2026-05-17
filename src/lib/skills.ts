import {
  SiLaravel,
  SiSpringboot,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGit
} from "react-icons/si";

const techItems = {
  backend: [
    {
      name: "Laravel",
      icon: SiLaravel,
      lightColor: "#FF2D20",
      darkColor: "#FF2D20"
    },
    {
      name: "Spring Boot",
      icon: SiSpringboot,
      lightColor: "#6DB33F",
      darkColor: "#6DB33F"
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      lightColor: "#339933",
      darkColor: "#339933"
    }
  ],

  frontend: [
    {
      name: "React",
      icon: SiReact,
      lightColor: "#61DAFB",
      darkColor: "#61DAFB"
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,

      // negro en claro
      lightColor: "#000000",

      // blanco en oscuro
      darkColor: "#FFFFFF"
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      lightColor: "#3178C6",
      darkColor: "#3178C6"
    }
  ],

  database: [
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      lightColor: "#4169E1",
      darkColor: "#4169E1"
    },
    {
      name: "MySQL",
      icon: SiMysql,
      lightColor: "#4479A1",
      darkColor: "#4479A1"
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      lightColor: "#47A248",
      darkColor: "#47A248"
    }
  ],

  devops: [
    {
      name: "Docker",
      icon: SiDocker,
      lightColor: "#2496ED",
      darkColor: "#2496ED"
    },
    {
      name: "Git",
      icon: SiGit,
      lightColor: "#F05032",
      darkColor: "#F05032"
    }
  ]
};

export const skills = {
  es: [
    {
      category: "Backend",
      items: techItems.backend
    },
    {
      category: "Frontend",
      items: techItems.frontend
    },
    {
      category: "Bases de datos",
      items: techItems.database
    },
    {
      category: "Cloud / DevOps",
      items: techItems.devops
    }
  ],

  en: [
    {
      category: "Backend",
      items: techItems.backend
    },
    {
      category: "Frontend",
      items: techItems.frontend
    },
    {
      category: "Database",
      items: techItems.database
    },
    {
      category: "Cloud / DevOps",
      items: techItems.devops
    }
  ]
};