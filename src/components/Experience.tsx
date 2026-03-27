import { motion } from "framer-motion";

const milestones = [
  {
    year: "Mar 2025 - Present",
    title: "Full Stack Developer - Zoryboard Software Solutions",
    desc: "Developing AI-based Window Analyzer using React Native, Python, OpenCV, and ONNX for automated defect detection and mobile inference.",
  },
  {
    year: "2025",
    title: "AI SaaS & Cloud Integrations",
    desc: "Contributed to BizReview AI platform; handled OAuth 2.0 token lifecycle, Firebase authentication flows, Firestore structuring, and OpenAI API integrations.",
  },
  {
    year: "2025",
    title: "Full Stack Product Development",
    desc: "Built matrimony platform with user onboarding, profile systems, and matchmaking logic using React, Firebase, and Node.js.",
  },
  {
    year: "Oct 2024 - Jan 2025",
    title: "Full Stack Developer Intern - Brillium Tech Solutions",
    desc: "Developed responsive React.js components for enterprise applications and improved performance across UI modules.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-[19px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-accent/50 to-primary/20" />

          {milestones.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex items-start gap-6 mb-12 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-[9px] h-[9px] rounded-full gradient-bg z-10 ring-4 ring-background" />

              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  idx % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8 md:ml-auto"
                }`}
              >
                <span className="text-primary font-mono text-xs">{m.year}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
