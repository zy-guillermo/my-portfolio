"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className }: SectionProps) => {
  return (
    <section id={id} className={`py-8 px-5 sm:px-7 ${className || ""}`}>
      <div className="mx-auto max-w-2xl">
        <motion.h2
          className="craftz-section-title"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
