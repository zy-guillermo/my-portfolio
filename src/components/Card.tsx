"use client";

import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
  logo?: string;
  link?: string;
}

const cardClass =
  "rounded-xl border border-white/80 bg-white/50 p-6 shadow-sm backdrop-blur-[10px] transition hover:shadow-md dark:border-white/10 dark:bg-white/10";

const Card = ({ title, description, logo, link }: CardProps) => {
  const content = (
    <motion.div
      className={`${cardClass} cursor-pointer`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {logo && (
        <div className="mb-4 flex h-16 w-16 items-center justify-center">
          <img
            src={logo}
            alt={`${title} logo`}
            className="h-full w-full object-contain"
          />
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white/90">
        {title}
      </h3>
      <p className="text-sm text-gray-700 dark:text-white/80">{description}</p>
    </motion.div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default Card;
