import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React Native / Mobile", pct: 95 },
  { name: "AI & Computer Vision", pct: 88 },
  { name: "Full Stack (MERN)", pct: 85 },
  { name: "TypeScript", pct: 90 },
  { name: "Performance & Architecture", pct: 87 },
];

function SkillBar({ name, pct, delay }: { name: string; pct: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-mono">{pct}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full gradient-bg"
        />
      </div>
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting <span className="gradient-text">AI-Powered</span> Mobile Experiences
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a React Native and Android-focused developer specializing in AI-powered mobile applications.
              </p>
              <p>
                I build production-ready apps integrating YOLO ONNX, OpenCV, real-time camera pipelines, and quality inspection systems.
              </p>
              <p>
                Strong in performance optimization, detection pipelines, and scalable architecture.
              </p>
            </div>
          </div>

          <div className="glass-card gradient-border rounded-2xl p-8 space-y-6">
            {skills.map((s, i) => (
              <SkillBar key={s.name} {...s} delay={i * 0.15} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
