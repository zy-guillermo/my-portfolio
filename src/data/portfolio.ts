import type { LucideIcon } from "lucide-react";
import {
  Code,
  TestTube,
  GitBranch,
  Zap,
  Laptop,
} from "lucide-react";

export const HERO_TAGLINE =
  "SDET with 5 years of experience and a passion for clean web experiences.";

export type ProjectItem = {
  title: string;
  description: string;
  logo: string;
  link?: string;
};

export type SkillItem = { name: string; icon: string };

export type SkillGroup = {
  category: string;
  items: SkillItem[];
  icon: LucideIcon;
};

export const sdetProjects: ProjectItem[] = [
  {
    title: "Axos Bank",
    description:
      "Modernized automation by migrating Appium C# to Testim JS, expanding coverage, and leading Playwright automation for the new web app.",
    logo: "/axos.jpg",
  },
  {
    title: "Australian Taxation Office",
    description: "Delivered functional & system testing automation and supported AWS modernization.",
    logo: "/ato.png",
  },
  {
    title: "Inland Revenue Authority of Singapore",
    description:
      "Prepared UAT data using SQL and Postman, with automation tooling to streamline testing.",
    logo: "/iras.jpg",
  },
  {
    title: "Ciergio",
    description:
      "Led end-to-end QA and introduced automation to reduce regression effort.",
    logo: "/ciergio.png",
  },
  {
    title: "Ahente",
    description:
      "Performed full QA for web & mobile and helped establish automation-friendly testing practices.",
    logo: "/ahente.png",
  },
];

export const webProjects: ProjectItem[] = [
  {
    title: "First Look Publicity",
    description:
      "A full-service publicity and marketing agency that brings brands to life through strategic storytelling, impactful events, and performance-driven digital campaigns.",
    link: "https://www.1stlookpublicity.com",
    logo: "https://www.1stlookpublicity.com/src/flp1.jpg",
  },
  {
    title: "Next project?",
    description:
      "Want to give me your next website? Let’s build something fun — and ship it.",
    logo: "/fallback.png",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Test automation",
    items: [
      {
        name: "Selenium",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg",
      },
      {
        name: "Cypress",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cypressio/cypressio-original.svg",
      },
      {
        name: "Playwright",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/playwright/playwright-original.svg",
      },
      {
        name: "BrowserStack",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/browserstack/browserstack-original.svg",
      },
      {
        name: "Appium",
        icon: "https://appiumpro.com/img/appium-symbol-color.png",
      },
      {
        name: "Postman",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
      },
      {
        name: "Testim",
        icon: "https://avatars.githubusercontent.com/u/14033369?s=200&v=4",
      },
    ],
    icon: TestTube,
  },
  {
    category: "Languages & data",
    items: [
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "Java",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "C#",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      },
      {
        name: "SQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "Git",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
    ],
    icon: Code,
  },
  {
    category: "Frameworks & delivery",
    items: [
      {
        name: "Next.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: ".NET",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg",
      },
      {
        name: "nUnit",
        icon: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Nunit_logo_250.png",
      },
      {
        name: "Azure DevOps",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaf0noJnyGWX1IonIvgKccpswYwuNqAbYX4Q&s",
      },
    ],
    icon: GitBranch,
  },
  {
    category: "IDEs & editors",
    items: [
      {
        name: "VS Code",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
      },
      {
        name: "Cursor AI",
        icon: "https://cdn.simpleicons.org/cursor/0078D4",
      },
      {
        name: "Visual Studio",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg",
      },
    ],
    icon: Laptop,
  },
  {
    category: "Practices",
    items: [
      {
        name: "Agile",
        icon: "https://cdn-icons-png.flaticon.com/512/2784/2784065.png",
      },
      {
        name: "Cross-platform testing",
        icon: "https://cdn-icons-png.flaticon.com/512/10435/10435164.png",
      },
      {
        name: "Automation frameworks",
        icon: "https://cdn-icons-png.freepik.com/512/17756/17756684.png",
      },
    ],
    icon: Zap,
  },
];

export const CV_PATH = "/CV_zyguillermo.pdf" as const;
