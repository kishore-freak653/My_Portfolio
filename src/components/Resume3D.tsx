import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Html, useTexture, OrbitControls, Environment, PerspectiveCamera, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeData {
  skills: Array<{ name: string; category: string; level: number; color: string; details?: string }>;
  experience: Array<{ title: string; company: string; period: string; description: string; achievements?: string[] }>;
  projects: Array<{ title: string; tech: string[]; description: string; details?: string; link?: string }>;
}

interface DetailModalProps {
  data: any;
  type: 'skill' | 'experience' | 'project';
  onClose: () => void;
}

function DetailModal({ data, type, onClose }: DetailModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="glass-card gradient-border rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground">{data.name || data.title}</h3>
              {type === 'skill' && (
                <p className="text-sm text-muted-foreground">{data.category} • {data.level}% Proficiency</p>
              )}
              {type === 'experience' && (
                <p className="text-sm text-muted-foreground">{data.company} • {data.period}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Description</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{data.description}</p>
            </div>
            
            {type === 'project' && data.tech && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {data.tech.map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {type === 'experience' && data.achievements && (
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements</h4>
                <ul className="space-y-1">
                  {data.achievements.map((achievement: string, idx: number) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const resumeData: ResumeData = {
  skills: [
    { 
      name: "React Native", 
      category: "Mobile", 
      level: 95, 
      color: "#61DAFB",
      details: "Expert in building cross-platform mobile applications with React Native, including camera integration, performance optimization, and native module bridging."
    },
    { 
      name: "Next.js", 
      category: "Frontend", 
      level: 90, 
      color: "#000000",
      details: "Proficient in building server-side rendered and static React applications with Next.js framework."
    },
    { 
      name: "React.js", 
      category: "Frontend", 
      level: 92, 
      color: "#61DAFB",
      details: "Strong expertise in building interactive user interfaces with React and state management."
    },
    { 
      name: "TypeScript", 
      category: "Language", 
      level: 90, 
      color: "#3178C6",
      details: "Strong proficiency in TypeScript for building type-safe applications with comprehensive interfaces."
    },
    { 
      name: "Node.js", 
      category: "Backend", 
      level: 85, 
      color: "#339933",
      details: "Skilled in building scalable backend services with Node.js, Express, and RESTful API design patterns."
    },
    { 
      name: "Firebase", 
      category: "Database", 
      level: 88, 
      color: "#FFCA28",
      details: "Experienced in Firebase Auth, Firestore, Cloud Functions, and real-time database management."
    },
    { 
      name: "OpenCV", 
      category: "AI/CV", 
      level: 85, 
      color: "#614051",
      details: "Experienced in computer vision algorithms including image processing and object detection."
    },
    { 
      name: "ONNX", 
      category: "AI/CV", 
      level: 82, 
      color: "#0078D4",
      details: "Knowledgeable in ONNX runtime for AI model deployment and inference optimization on mobile devices."
    },
  ],
  experience: [
    {
      title: "Full Stack Developer",
      company: "Zoryboard Software Solutions Pvt Ltd",
      period: "Mar 2025 – Present",
      description: "Developed AI-based Window Analyzer with React Native, Python, OpenCV, and ONNX for automated defect detection. Built full-stack matrimony platform and contributed to BizReview AI SaaS platform.",
      achievements: [
        "Developed AI-based window inspection system using ONNX + OpenCV, reducing manual inspection time by 40%",
        "Implemented object detection pipeline (YOLO + OpenCV preprocessing) for identifying defects and quality issues",
        "Enhanced Firebase Cloud Functions authentication logic and OpenAI API integration",
        "Built full-stack matchmaking platform with real-time Firestore data handling and secure authentication"
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Brillium Tech Solutions Pvt Ltd",
      period: "Oct 2024 – Jan 2025",
      description: "Developed responsive React.js frontend components for enterprise applications with optimized performance.",
      achievements: [
        "Developed responsive React.js frontend components for enterprise applications",
        "Optimized application performance and user experience",
        "Implemented modern UI/UX patterns and best practices"
      ]
    }
  ],
  projects: [
    {
      title: "Window Analyzer – AI Quality Inspection",
      tech: ["React Native", "Python", "OpenCV", "ONNX"],
      description: "AI-based window inspection system using ONNX + OpenCV, reducing manual inspection time by 40%.",
      details: "Built AI-based window inspection system using ONNX + OpenCV, reducing manual inspection time by 40%. Implemented object detection pipeline (YOLO + OpenCV preprocessing) for identifying defects, sealant gaps, tilt, and visual damage. Developed mobile inference workflow using React Native + Android (Kotlin) for real-time camera-based analysis.",
      link: "#"
    },
    {
      title: "MediCompanion — Medication Tracking App",
      tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      description: "Full-stack medication tracking app with dual-role system (Patient & Caretaker) using Supabase Auth, Zod validation, and real-time missed-dose detection.",
      details: "Built a full-stack medication tracking app with dual-role system (Patient & Caretaker) using Supabase Auth, Zod validation, input sanitization, and TypeScript strict typing with real-time missed-dose detection and automated caretaker email alerts.",
      link: "#"
    },
    {
      title: "Matrimony Web Platform",
      tech: ["React.js", "Firebase", "Firestore", "Node.js"],
      description: "Full-stack matchmaking platform with real-time Firestore data handling, dynamic dashboards, and secure authentication.",
      details: "Developed full-stack matchmaking platform with real-time Firestore data handling, dynamic dashboards and secure authentication using Firebase Auth and managed real-time user data with Firestore. Developed dynamic dashboards for users and admins with features like interest requests, profile verification, and match suggestions.",
      link: "#"
    }
  ]
};

function SkillNode({ skill, index }: { skill: ResumeData["skills"][0]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(0.8, 0);
    return geo;
  }, []);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        geometry={geometry}
        position={[
          Math.cos((index * Math.PI * 2) / resumeData.skills.length) * 3,
          Math.sin((index * Math.PI * 2) / resumeData.skills.length) * 3,
          0
        ]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          roughness={0.2}
          metalness={0.8}
        />
        <Html center>
          <div className="bg-background/90 backdrop-blur-sm border border-border rounded-lg p-2 text-xs text-center pointer-events-none">
            <div className="font-semibold text-foreground">{skill.name}</div>
            <div className="text-muted-foreground">{skill.category}</div>
            <div className="text-primary font-mono">{skill.level}%</div>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

function ExperienceNode({ exp, index }: { exp: ResumeData["experience"][0]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh
        ref={meshRef}
        position={[
          Math.cos((index * Math.PI * 2) / resumeData.experience.length) * 5,
          0,
          Math.sin((index * Math.PI * 2) / resumeData.experience.length) * 5
        ]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.3 : 1}
      >
        <boxGeometry args={[1.5, 0.8, 0.2]} />
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={hovered ? 0.6 : 0.3}
          roughness={0.3}
          metalness={0.7}
        />
        <Html center>
          <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg p-3 text-xs pointer-events-none max-w-40">
            <div className="font-semibold text-foreground">{exp.title}</div>
            <div className="text-primary font-mono text-xs">{exp.company}</div>
            <div className="text-muted-foreground text-xs mt-1">{exp.period}</div>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

function ProjectNode({ project, index }: { project: ResumeData["projects"][0]; index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh
        ref={meshRef}
        position={[
          0,
          Math.cos((index * Math.PI * 2) / resumeData.projects.length) * 4,
          Math.sin((index * Math.PI * 2) / resumeData.projects.length) * 4
        ]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.4 : 1}
      >
        <torusGeometry args={[0.6, 0.2, 16, 50]} />
        <meshStandardMaterial
          color="#0EA5E9"
          emissive="#0EA5E9"
          emissiveIntensity={hovered ? 0.8 : 0.4}
          roughness={0.2}
          metalness={0.9}
        />
        <Html center>
          <div className="bg-background/90 backdrop-blur-sm border border-border rounded-lg p-2 text-xs pointer-events-none max-w-32">
            <div className="font-semibold text-foreground">{project.title}</div>
            <div className="text-muted-foreground text-xs mt-1">{project.tech.join(", ")}</div>
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

function Resume3DScene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#0EA5E9" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8B5CF6" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#F59E0B" />

      {/* Skills Nodes */}
      {resumeData.skills.map((skill, index) => (
        <SkillNode key={skill.name} skill={skill} index={index} />
      ))}

      {/* Experience Nodes */}
      {resumeData.experience.map((exp, index) => (
        <ExperienceNode key={exp.title} exp={exp} index={index} />
      ))}

      {/* Project Nodes */}
      {resumeData.projects.map((project, index) => (
        <ProjectNode key={project.title} project={project} index={index} />
      ))}

      {/* Central Core */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh>
          <icosahedronGeometry args={[0.5, 1]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#FFFFFF"
            emissiveIntensity={0.3}
            roughness={0.1}
            metalness={1}
          />
        </mesh>
      </Float>

      {/* Connecting Lines */}
      <group>
        {resumeData.skills.map((_, index) => (
          <line key={`skill-line-${index}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[
                  new Float32Array([
                    Math.cos((index * Math.PI * 2) / resumeData.skills.length) * 3,
                    Math.sin((index * Math.PI * 2) / resumeData.skills.length) * 3,
                    0,
                    0, 0, 0
                  ]),
                  3
                ]}
              />
            </bufferGeometry>
            <lineBasicMaterial color="#0EA5E9" transparent opacity={0.3} />
          </line>
        ))}
      </group>
    </>
  );
}

export default function Resume3D() {
  return (
    <section id="resume3d" className="py-24 md:py-32 relative">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Interactive</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            3D <span className="gradient-text">Resume</span> Explorer
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience my portfolio in an immersive 3D environment. Hover over nodes to explore skills, experience, and projects.
          </p>
        </div>
        
        <div className="relative w-full h-[600px] md:h-[800px] rounded-2xl overflow-hidden glass-card gradient-border">
          <Canvas camera={{ position: [0, 0, 15], fov: 60 }} dpr={[1, 1.5]}>
            <PerspectiveCamera makeDefault position={[0, 0, 15]} />
            <OrbitControls 
              enableZoom={true} 
              enablePan={true} 
              enableRotate={true}
              minDistance={5}
              maxDistance={25}
              autoRotate={true}
              autoRotateSpeed={0.5}
            />
            <Environment preset="studio" />
            <Resume3DScene />
          </Canvas>
          
          {/* Overlay Controls */}
          <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
            <div className="glass-card gradient-border rounded-lg p-4 pointer-events-auto backdrop-blur-sm">
              <h3 className="text-lg font-bold gradient-text">3D Resume Explorer</h3>
              <p className="text-sm text-muted-foreground">Interactive portfolio visualization</p>
            </div>
            
            <div className="glass-card gradient-border rounded-lg p-4 pointer-events-auto backdrop-blur-sm">
              <div className="text-xs text-muted-foreground mb-2">Interactive Elements:</div>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-1 bg-primary/20 text-primary rounded">Skills</span>
                <span className="px-2 py-1 bg-accent/20 text-accent rounded">Experience</span>
                <span className="px-2 py-1 bg-secondary/20 text-secondary rounded">Projects</span>
              </div>
              <div className="text-xs text-muted-foreground mt-2">Drag to rotate • Scroll to zoom • Hover for details</div>
            </div>
          </div>
          
          {/* Floating Instructions */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center pointer-events-none">
            <div className="glass-card gradient-border rounded-lg p-3 backdrop-blur-sm">
              <span className="text-xs text-muted-foreground">Tip: Click and drag to explore the 3D space</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
