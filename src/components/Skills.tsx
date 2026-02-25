import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { label: "Mobile Dev", pct: 95, color: "hsl(199,89%,48%)" },
  { label: "AI / CV", pct: 88, color: "hsl(270,70%,55%)" },
  { label: "Backend", pct: 85, color: "hsl(153,60%,50%)" },
  { label: "Architecture", pct: 87, color: "hsl(30,90%,55%)" },
  { label: "Problem Solving", pct: 92, color: "hsl(199,89%,48%)" },
];

function CircularProgress({ label, pct, color, delay }: { label: string; pct: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center"
    >
      <div className="relative w-32 h-32 md:w-36 md:h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r={radius} fill="none" stroke="hsl(222,30%,12%)" strokeWidth="6" />
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
            style={{ filter: `drop-shadow(0 0 6px ${color})` }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-foreground font-mono">{pct}%</span>
        </div>
      </div>
      <span className="mt-3 text-sm font-medium text-muted-foreground">{label}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills <span className="gradient-text">Overview</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
          {skillCategories.map((s, i) => (
            <CircularProgress key={s.label} {...s} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
