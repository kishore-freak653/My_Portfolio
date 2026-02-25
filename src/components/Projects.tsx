import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Based Door & Window Inspection App",
    description:
      "Real-time AI-powered quality inspection system using YOLO object detection and OpenCV metrics for manufacturing quality control.",
    tags: ["React Native", "Kotlin", "YOLOv5 ONNX", "OpenCV", "CameraX"],
    features: [
      "Squareness, Sharpness, Tilt analysis",
      "Sealant Coverage detection",
      "Visual Damage assessment",
      "Live bounding box overlay",
    ],
    gradient: "from-neon-blue/20 to-neon-purple/20",
  },
  {
    title: "Timesheet Management System",
    description:
      "Full-stack MERN application for employee time tracking with admin approval workflows and real-time notifications.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    features: [
      "Employee punch in/out",
      "Admin approval workflow",
      "Calendar review UI",
      "Notifications system",
    ],
    gradient: "from-neon-purple/20 to-neon-blue/20",
  },
  {
    title: "Cricket Analytics Platform",
    description:
      "Data-driven cricket analytics dashboard with historical dataset analysis and performance insights.",
    tags: ["React", "React Query", "Data Analytics", "TypeScript"],
    features: [
      "Top run scorer metrics",
      "Strike rate analysis",
      "Impact scoring",
      "Historical data exploration",
    ],
    gradient: "from-neon-blue/20 to-neon-purple/10",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8, rotateY: 2, rotateX: -2 }}
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              className="glass-card gradient-border rounded-2xl overflow-hidden group"
            >
              {/* Top gradient strip */}
              <div className={`h-1 w-full bg-gradient-to-r ${p.gradient}`} />

              <div className="p-7">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.description}</p>

                <ul className="space-y-1.5 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} /> Co
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
