import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Based Window Inspection System",
    description:
      "Production-grade computer vision system for automated defect detection using YOLO ONNX and OpenCV with real-time mobile inference.",
    tags: ["React Native", "Python", "OpenCV", "YOLO ONNX", "Android"],
    features: [
      "Real-time camera detection pipeline",
      "Sealant gap & visual damage detection",
      "Tilt, squareness & sharpness analysis",
      "Mobile inference using ONNX runtime",
    ],
    gradient: "from-neon-blue/20 to-neon-purple/20",
    github: "https://github.com/your-link",
    live: "#",
  },
  {
    title: "MediCompanion - Medication Tracking App",
    description:
      "Full-stack healthcare tracking platform with dual-role system, real-time alerts, and secure Supabase authentication.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    features: [
      "Patient & caretaker role system",
      "Missed-dose detection engine",
      "Automated caretaker email alerts",
      "Secure auth + input validation",
    ],
    gradient: "from-neon-purple/20 to-neon-blue/20",
    github: "https://github.com/your-link",
    live: "https://medcompanion1.netlify.app",
  },
  {
    title: "PERN Taxi Booking System",
    description:
      "Full-stack taxi booking platform with real-time ride management, authentication, and RESTful APIs built using PostgreSQL, Express, React, and Node.js.",
    tags: ["React", "Node.js", "PostgreSQL", "Express", "Prisma"],
    features: [
      "User & driver authentication system",
      "Ride booking with pickup & drop locations",
      "REST API with Prisma ORM",
      "JWT-based secure login",
      "Backend deployed on Railway",
    ],
    gradient: "from-neon-blue/20 to-neon-purple/20",
    github: "https://github.com/kishore-freak653/Taxi_Booking",
    live: "https://taxi-booking-sable.vercel.app/",
  },
  {
    title: "NutriScan - AI Food & Nutrition Tracker",
    description:
      "AI-powered mobile application for food detection and nutrition analysis using Google Gemini Vision API with real-time tracking.",
    tags: ["React Native", "Node.js", "MongoDB", "Gemini AI", "JWT"],
    features: [
      "AI-based food detection using Gemini Vision API",
      "Real-time nutrition calculation (calories, protein, fat, carbs)",
      "User food history tracking",
      "JWT authentication system",
      "Mobile-first UI with React Native",
    ],
    gradient: "from-neon-purple/20 to-neon-blue/20",
    github: "https://github.com/kishore-freak653/NutriScanner_App",
    live: "https://drive.google.com/file/d/1Y3JLpVZDRPggyHFba1ZPGHVrXQjWTQwl/view?usp=drivesdk",
  },
  {
    title: "Matrimony Web Platform",
    description:
      "Full-stack matchmaking platform with real-time dashboards, profile verification, and Firebase-based secure authentication.",
    tags: ["React", "Firebase", "Firestore", "Node.js"],
    features: [
      "User onboarding & profile system",
      "Match suggestion engine",
      "Admin dashboards",
      "Real-time Firestore data handling",
    ],
    gradient: "from-neon-blue/20 to-neon-purple/10",
    github: "https://github.com/your-link",
    live: "https://srisathyasaidevoteesmatrimony.com/",
  },
  {
    title: "Timesheet Management System",
    description:
      "Enterprise MERN platform for employee tracking, admin approvals, and workflow automation.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    features: [
      "Employee punch in/out",
      "Admin approval workflow",
      "Calendar review interface",
      "Notification system",
    ],
    gradient: "from-neon-purple/20 to-neon-blue/20",
    github: "https://github.com/your-link",
    live: "#",
  },
  {
    title: "HealthTracker - Personal Health Monitoring App",
    description:
      "Full-stack health tracking platform for monitoring daily activities, nutrition, and wellness with secure authentication and real-time data handling.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    features: [
      "User authentication with JWT",
      "Daily health & activity tracking",
      "Nutrition and wellness monitoring",
      "Responsive dashboard UI",
      "Full-stack MERN architecture",
    ],
    gradient: "from-neon-green/20 to-neon-blue/20",
    github: "https://github.com/kishore-freak653/Health-Tracker-Web",
    live: "https://healthtrackerw.netlify.app/login",
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
                    href={p.live}
                    className="flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={p.github}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} /> Code
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
