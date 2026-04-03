"use client";

import Header from "@/components/Header";
import Section from "@/components/Section";
import Card from "@/components/Card";
import VoxelCat from "@/components/VoxelCat";
import ScrollToTopRocket from "@/components/ScrollToTopRocket";
import { motion } from "framer-motion";
import {
  CV_PATH,
  HERO_TAGLINE,
  sdetProjects,
  skills,
  webProjects,
} from "@/data/portfolio";

function scrollToContact() {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="pb-8 pt-14">
        <VoxelCat />
        <section id="home" className="px-5 py-12 sm:px-7">
          <div className="mx-auto max-w-2xl">
            <div className="mb-6 rounded-lg craftz-glass-panel text-[16px] leading-6 font-medium text-gray-800 dark:text-white/90">
              {HERO_TAGLINE}
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-start">
              <motion.div
                className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-lg border-2 border-white/80 dark:border-white/30 md:max-w-[280px]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/hero.jpg"
                  alt="Zy Guillermo"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <motion.div
                className="min-w-0 flex-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="mb-1 text-3xl font-bold text-gray-800 dark:text-white/90">
                  Zy Guillermo
                </h2>
                <p className="mb-4 text-gray-700 dark:text-white/80">
                  Software Engineer (SDET / Developer)
                </p>
                <p className="mb-6 text-sm leading-relaxed text-gray-700 dark:text-white/80">
                  Software Engineer with 5 years of experience as an SDET,
                  specializing in building automation
                  solutions.
                  <br />
                  On the side, I work as a freelance web developer, creating
                  clean, modern, and functional websites for clients.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={CV_PATH}
                    download
                    className="craftz-btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-[#319795] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0e7db] dark:focus-visible:ring-offset-[#202023]"
                  >
                    <svg
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download CV
                  </a>
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="craftz-btn-outline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#319795] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0e7db] dark:focus-visible:ring-offset-[#202023]"
                  >
                    Contact Me
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Section id="sdet-projects" title="Projects I worked on as an SDET">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {sdetProjects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                logo={project.logo}
              />
            ))}
          </div>
        </Section>

        <Section id="web-projects" title="Projects I created as a Web Developer">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {webProjects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                link={project.link}
                logo={project.logo}
              />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills & Tools">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                className="rounded-xl border border-white/80 bg-white/50 p-6 shadow-sm backdrop-blur-[10px] dark:border-white/10 dark:bg-white/10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <skill.icon className="h-7 w-7 craftz-text-teal-accent" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                    {skill.category}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {skill.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col items-center text-center"
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="mb-2 h-12 w-12 object-contain"
                      />
                      <span className="text-xs text-gray-700 dark:text-white/75">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact Me">
          <div className="rounded-xl border border-white/80 bg-white/50 p-6 shadow-sm backdrop-blur-[10px] dark:border-white/10 dark:bg-white/10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
                  Get in Touch
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="craftz-bg-teal-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white/90">
                        Email
                      </p>
                      <p className="text-gray-700 dark:text-white/75">
                        zmn.guillermo@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="craftz-bg-teal-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white/90">
                        Phone
                      </p>
                      <p className="text-gray-700 dark:text-white/75">
                        +63 962 233 9810
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="craftz-bg-teal-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white/90">
                        Facebook
                      </p>
                      <a
                        href="https://facebook.com/zymon.guillermo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="craftz-link underline"
                      >
                        Zy Guillermo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">
                  Let&apos;s Connect
                </h3>
                <p className="mb-4 text-sm text-gray-700 dark:text-white/75">
                  I&apos;m always open to discussing new opportunities,
                  collaborations, or just having a chat about technology and
                  testing.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:zmn.guillermo@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="craftz-btn-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-[#319795] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0e7db] dark:focus-visible:ring-offset-[#202023]"
                  >
                    Send Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zyguillermo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="craftz-btn-outline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#319795] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f0e7db] dark:focus-visible:ring-offset-[#202023]"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <footer className="mx-auto mt-12 max-w-2xl px-5 text-center text-sm sm:px-7">
          <div className="flex flex-col items-center gap-6">

            <ScrollToTopRocket />

            <p className="text-gray-700 opacity-40 dark:text-white/60">
              &copy; 2026 Zy Guillermo. All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
