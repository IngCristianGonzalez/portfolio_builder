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

import { IconType } from "react-icons";

type SkillItem = {
  name: string;
  icon: IconType;
  className: string;
};

type TechCategory =
  | "backend"
  | "frontend"
  | "database"
  | "devops";

type SkillGroup = {
  category: string;
  items: SkillItem[];
};

const techItems: Record<TechCategory, SkillItem[]> = {
  backend: [
    {
      name: "Laravel",
      icon: SiLaravel,
      className: "text-[#FF2D20]"
    },
    {
      name: "Spring Boot",
      icon: SiSpringboot,
      className: "text-[#6DB33F]"
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      className: "text-[#339933]"
    }
  ],

  frontend: [
    {
      name: "React",
      icon: SiReact,
      className: "text-[#61DAFB]"
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      className: "text-black dark:text-white"
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      className: "text-[#3178C6]"
    }
  ],

  database: [
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      className: "text-[#4169E1]"
    },
    {
      name: "MySQL",
      icon: SiMysql,
      className: "text-[#4479A1]"
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      className: "text-[#47A248]"
    }
  ],

  devops: [
    {
      name: "Docker",
      icon: SiDocker,
      className: "text-[#2496ED]"
    },
    {
      name: "Git",
      icon: SiGit,
      className: "text-[#F05032]"
    }
  ]
};

export const skills: Record<"es" | "en", SkillGroup[]> = {
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