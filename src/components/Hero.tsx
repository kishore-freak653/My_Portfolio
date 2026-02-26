import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Scene3D = lazy(() => import("./Scene3D"));

const socials = [
  {
    icon: Github,
    href: "https://github.com/kishore-freak653",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/kishore-g-197ba3202?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:kishore08052003@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid bg */}
      <div className="absolute inset-0 tech-grid opacity-30" />

      {/* 3D Scene */}
      <Suspense fallback={null}>
        <Scene3D />
      </Suspense>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background z-[1]" />

      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-primary mb-4 font-mono"> 
            Kishore Gurusamy
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building <span className="gradient-text">AI-Powered Systems</span>
            <br />
            across Mobile, Web
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Mobile. Computer Vision. Full Stack. Production Ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="gradient-bg px-8 py-3.5 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity animate-pulse-glow"
            >
              View Projects
            </a>
            <div className="flex gap-4">
              <a
                href="/resume/Kishore_Resume_SinglePage.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card gradient-border px-6 py-3.5 rounded-lg font-semibold text-foreground hover:bg-muted/50 transition-colors"
              >
                View Resume
              </a>
              <a
                href="/resume/Kishore_Resume_SinglePage.pdf"
                download="Kishore_Resume.pdf"
                className="gradient-bg px-6 py-3.5 rounded-lg font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:neon-border-blue transition-all duration-300"
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="text-muted-foreground animate-float inline-block"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
