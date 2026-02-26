import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { Code, Database, Cpu, Wrench } from "lucide-react";

type StackItem = { name: string; color: string; icon?: React.ReactNode };

const stacks: { title: string; items: StackItem[]; icon: React.ReactNode }[] = [
  {
    title: "Frontend",
    icon: <Code className="w-5 h-5" />,
    items: [
      { name: "React Native", color: "hsl(199,89%,48%)" },
      { name: "Next.js", color: "hsl(0,0%,90%)" },
      { name: "React.js", color: "hsl(199,89%,48%)" },
      { name: "TypeScript", color: "hsl(210,80%,55%)" },
      { name: "Tailwind", color: "hsl(199,89%,48%)" },
      { name: "Framer Motion", color: "hsl(300,80%,60%)" },
    ],
  },
  {
    title: "Backend",
    icon: <Database className="w-5 h-5" />,
    items: [
      { name: "Node.js", color: "hsl(120,50%,50%)" },
      { name: "Express", color: "hsl(0,0%,80%)" },
      { name: "Supabase", color: "hsl(153,60%,50%)" },
      { name: "MongoDB", color: "hsl(120,40%,45%)" },
      { name: "Firebase", color: "hsl(25,90%,55%)" },
      { name: "REST APIs", color: "hsl(199,89%,48%)" },
    ],
  },
  {
    title: "AI / Computer Vision",
    icon: <Cpu className="w-5 h-5" />,
    items: [
      { name: "YOLOv5/v8", color: "hsl(270,70%,55%)" },
      { name: "ONNX", color: "hsl(30,90%,55%)" },
      { name: "OpenCV", color: "hsl(0,70%,55%)" },
      { name: "CameraX", color: "hsl(199,89%,48%)" },
      { name: "OpenAI API", color: "hsl(200,80%,60%)" },
      { name: "N8N", color: "hsl(160,70%,50%)" },
    ],
  },
  {
    title: "Other",
    icon: <Wrench className="w-5 h-5" />,
    items: [
      { name: "Git", color: "hsl(10,80%,55%)" },
      { name: "Redux", color: "hsl(270,70%,55%)" },
      { name: "React Query", color: "hsl(0,80%,55%)" },
      { name: "OAuth 2.0", color: "hsl(210,70%,55%)" },
      { name: "Cloud Functions", color: "hsl(180,60%,55%)" },
      { name: "Zod", color: "hsl(45,80%,55%)" },
    ],
  },
];

function TechItem({ item, delay }: { item: StackItem; delay: number }) {
  const controls = useAnimation();
  
  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        scale: [1, 1.05, 1],
        transition: { duration: 1.5, ease: "easeInOut" }
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.12, 
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      animate={controls}
      className="glass-card gradient-border rounded-xl px-5 py-4 text-center cursor-default transition-all duration-300 hover:shadow-[0_0_30px_hsl(199_89%_48%/0.25)] hover:border-primary/50 group"
    >
      <div
        className="w-4 h-4 rounded-full mx-auto mb-3 transition-all duration-300 group-hover:scale-125"
        style={{ 
          backgroundColor: item.color, 
          boxShadow: `0 0 15px ${item.color}, inset 0 0 10px rgba(255,255,255,0.3)` 
        }}
      />
      <span className="text-sm font-medium text-foreground tracking-wide">{item.name}</span>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}

function TechCategory({ group, index }: { group: typeof stacks[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, delay: index * 0.2 }
      });
    }
  }, [inView, controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -30, opacity: 0 }}
      animate={controls}
      className="tech-category"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg glass-card gradient-border">
          <div className="text-primary">
            {group.icon}
          </div>
        </div>
        <h3 className="text-lg font-semibold text-foreground tracking-wide">{group.title}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {group.items.map((item, i) => (
          <TechItem key={item.name} item={item} delay={i * 0.1} />
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="p-3 glass-card gradient-border rounded-2xl">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-400 rounded-lg flex items-center justify-center text-white shadow-lg">
                <Code size={20} />
              </div>
            </div>
          </motion.div>
          <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-4">TECHNOLOGY STACK</p>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            My <span className="gradient-text">Technical Arsenal</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Cutting-edge technologies and frameworks that power my development workflow
          </p>
        </motion.div>

        <div className="space-y-20">
          {stacks.map((group, index) => (
            <TechCategory key={group.title} group={group} index={index} />
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 glass-card gradient-border rounded-full px-8 py-4">
            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-blue-400 animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground">And always learning more...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
