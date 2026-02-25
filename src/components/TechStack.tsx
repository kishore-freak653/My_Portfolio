import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type StackItem = { name: string; color: string };

const stacks: { title: string; items: StackItem[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "React Native", color: "hsl(199,89%,48%)" },
      { name: "Next.js", color: "hsl(0,0%,90%)" },
      { name: "React.js", color: "hsl(199,89%,48%)" },
      { name: "TypeScript", color: "hsl(210,80%,55%)" },
      { name: "Tailwind", color: "hsl(199,89%,48%)" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", color: "hsl(120,50%,50%)" },
      { name: "Express", color: "hsl(0,0%,80%)" },
      { name: "Supabase", color: "hsl(153,60%,50%)" },
      { name: "MongoDB", color: "hsl(120,40%,45%)" },
    ],
  },
  {
    title: "AI / Computer Vision",
    items: [
      { name: "YOLOv5/v8", color: "hsl(270,70%,55%)" },
      { name: "ONNX", color: "hsl(30,90%,55%)" },
      { name: "OpenCV", color: "hsl(0,70%,55%)" },
      { name: "CameraX", color: "hsl(199,89%,48%)" },
      { name: "TensorFlow", color: "hsl(30,90%,55%)" },
    ],
  },
  {
    title: "Other",
    items: [
      { name: "Git", color: "hsl(10,80%,55%)" },
      { name: "REST APIs", color: "hsl(199,89%,48%)" },
      { name: "Redux", color: "hsl(270,70%,55%)" },
      { name: "React Query", color: "hsl(0,80%,55%)" },
    ],
  },
];

function TechItem({ item, delay }: { item: StackItem; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="glass-card gradient-border rounded-xl px-5 py-4 text-center cursor-default transition-shadow hover:shadow-[0_0_30px_hsl(199_89%_48%/0.15)]"
    >
      <div
        className="w-3 h-3 rounded-full mx-auto mb-3"
        style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}
      />
      <span className="text-sm font-medium text-foreground">{item.name}</span>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tech" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Arsenal</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {stacks.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold text-muted-foreground mb-5">{group.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {group.items.map((item, i) => (
                  <TechItem key={item.name} item={item} delay={i * 0.08} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
