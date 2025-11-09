import { motion } from "framer-motion";
import clsx from "clsx";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center"
}: Props) {
  return (
    <motion.div
      className={clsx("max-w-3xl mx-auto", {
        "text-center": align === "center",
        "text-left": align === "left"
      })}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow ? (
        <span className="text-sm tracking-[0.35em] uppercase text-primary/80">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-3 font-display text-4xl md:text-5xl text-neutral">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base md:text-lg text-neutral/70 leading-relaxed">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
