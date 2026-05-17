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
  SiGit,
  SiNestjs,
  SiAngular,
  SiLinux,
  SiPython
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import {
  PowerBIIcon,
  TableauIcon
} from "@/lib/custom-icons";
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
  | "devops"
  | "datascience";

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
    },
    {
      name: "NestJS",
      icon: SiNestjs,
      className: "text-[#d33e5e]"
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
    },
    {
      name: "Angular",
      icon: SiAngular,
      className: "text-[#DD0031]"
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
    },
    {
      name: "SQL Server",
      icon: TbDatabase,
      className: "text-[#CC2927]"
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
    },
    {
      name: "AWS",
      icon: FaAws,
      className: "text-[#FF9900]"
    },
    {
      name: "Linux",
      icon: SiLinux,
      className: "text-[#707070]"
    }
  ],

  datascience: [
  {
    name: "Python",
    icon: SiPython,
    className: "text-[#3776AB]"
  },
  {
    name: "Power BI",
    icon: PowerBIIcon,
    className: "text-[#F2C811]"
  },
  {
    name: "Tableau",
    icon: TableauIcon,
    className: "text-[#E97627]"
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
    },
    {
      category: "Ciencia de datos",
      items: techItems.datascience
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
    },
    {
      category: "Data Science",
      items: techItems.datascience
    }
  ]
};