import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
  delay?: number;
};

export function MetricCard({
  icon,
  value,
  label,
  description,
  delay = 0
}: Props) {
  return (
    <motion.div
      className="glass-panel p-8 flex flex-col gap-4 text-left"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-primary text-3xl">{icon}</div>
      <div>
        <p className="font-display text-4xl text-neutral">{value}</p>
        <p className="text-sm uppercase tracking-wide text-neutral/60">
          {label}
        </p>
      </div>
      <p className="text-neutral/70 leading-relaxed">{description}</p>
    </motion.div>
  );
}
