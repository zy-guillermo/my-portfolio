import type { LucideIcon } from "lucide-react";
import {
  Code,
  TestTube,
  GitBranch,
  Zap,
  Laptop,
} from "lucide-react";

const ASSET_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const HERO_QUOTE =
  "I'm the type of person that if you ask me a question and I don't know the answer, I'm gonna tell you that I don't know. But I bet you what, I know how to find the answer and I will find the answer.";

export const HERO_QUOTE_SOURCE = "The Pursuit of Happyness";

export type ProjectItem = {
  id: string;
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
    id: "axos",
    title: "Axos Bank",
    description:
      "Led Playwright automation for the functional team on the OLB 3.0 web application and the UDB 3.0 mobile application.",
    logo: `${ASSET_BASE_PATH}/axos.jpg`,
  },
  {
    id: "axos-sentinel",
    title: "Axos Bank · Sentinel",
    description:
      "Created Sentinel, a QE agent that reports bugs, retests them, and tests PBIs, with integrations to the Playwright framework, Azure DevOps, and Linear. First initiative of its kind in the QE organization.",
    logo: `${ASSET_BASE_PATH}/axos.jpg`,
  },
  {
    id: "ato",
    title: "Australian Taxation Office",
    description: "Delivered functional & system testing automation and supported AWS modernization.",
    logo: `${ASSET_BASE_PATH}/ato.png`,
  },
  {
    id: "iras",
    title: "Inland Revenue Authority of Singapore",
    description:
      "Prepared UAT data using SQL and Postman, with automation tooling to streamline testing.",
    logo: `${ASSET_BASE_PATH}/iras.jpg`,
  },
  {
    id: "ciergio",
    title: "Ciergio",
    description:
      "Led end-to-end QA and introduced automation to reduce regression effort.",
    logo: `${ASSET_BASE_PATH}/ciergio.png`,
  },
  {
    id: "ahente",
    title: "Ahente",
    description:
      "Performed full QA for web & mobile and helped establish automation-friendly testing practices.",
    logo: `${ASSET_BASE_PATH}/ahente.png`,
  },
];

export const webProjects: ProjectItem[] = [
  {
    id: "first-look",
    title: "First Look Publicity",
    description:
      "A full-service publicity and marketing agency that brings brands to life through strategic storytelling, impactful events, and performance-driven digital campaigns.",
    link: "https://www.1stlookpublicity.com",
    logo: "https://www.1stlookpublicity.com/src/flp1.jpg",
  },
  {
    id: "next-project",
    title: "Next project?",
    description:
      "Want to give me your next website? Let’s build something fun — and ship it.",
    logo: `${ASSET_BASE_PATH}/fallback.png`,
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
        name: "SSMS",
        icon: `${ASSET_BASE_PATH}/ssms.png`,
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
        name: "Azure DevOps",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaf0noJnyGWX1IonIvgKccpswYwuNqAbYX4Q&s",
      },
      {
        name: "Linear",
        icon: "https://cdn.simpleicons.org/linear/5E6AD2",
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
        name: "Claude AI",
        icon: "https://cdn.simpleicons.org/claude/D97757",
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
      {
        name: "AI-DLC",
        icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M34 10a22 22 0 1 1-16.2 7.2' fill='none' stroke='%2314b8a6' stroke-width='5' stroke-linecap='round'/%3E%3Cpath d='M14 8v14h14' fill='none' stroke='%2314b8a6' stroke-width='5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M34 24.5l2.4 6.6 6.8 1.6-6.8 1.6L34 41l-2.4-6.7-6.8-1.6 6.8-1.6L34 24.5z' fill='%23f59e0b'/%3E%3C/svg%3E",
      },
    ],
    icon: Zap,
  },
];

export const CV_PATH = `${ASSET_BASE_PATH}/CV_zyguillermo.pdf` as const;
