import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  image: string;
  category: "Web" | "Java" | "3D" | "Mobile";
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "EspaceEtudiant",
    desc: "Un lieu pensé pour vous accompagner tout au long de votre parcours académique. Retrouvez vos cours, ressources, actualités et outils en un seul endroit, pour apprendre, échanger et progresser à votre rythme.",
    tech: ["Next.js", "Tailwind CSS", "Vercel"],
    category: "Web",
    image: "https://picsum.photos/seed/student-portal/800/600",
    demo: "https://espace-etudiant-seven.vercel.app"
  },
  {
    title: "JavaMobileMoney",
    desc: "Un système de simulation de mobile money développé en Java et MySQL, permettant d'envoyer, recevoir et gérer des transactions numériques en toute sécurité.",
    tech: ["Java", "MySQL", "JDBC"],
    category: "Java",
    image: "https://picsum.photos/seed/finance/800/600",
    github: "#",
    demo: "#"
  },
  {
    title: "SamaTechnicien",
    desc: "L'artisanat réinventé. SamaTechnicien connecte les foyers dakarois aux meilleurs experts certifiés, garantissant qualité, sécurité et transparence pour tous vos travaux électriques.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    category: "Web",
    image: "/sama.png",
    github: "#",
    demo: "#"
  },
  {
    title: "SenSanté",
    desc: "Un assistant de pré-diagnostic médical utilisant le Machine Learning pour identifier les maladies courantes (paludisme, grippe, typhoïde) à partir des symptômes fournis par le patient.",
    tech: ["Python", "Flask", "Scikit-Learn", "React"],
    category: "Web",
    image: "https://picsum.photos/seed/medical-ai/800/600",
    github: "#",
    demo: "#"
  }
];

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative min-h-[500px] w-full rounded-[40px] bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-8 flex flex-col shadow-2xl transition-all duration-500 hover:border-primary/40 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale scale-110 group-hover:scale-100 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div 
          className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700"
        />
        
        <div className="flex justify-between items-start mb-6">
          <span className="text-[10px] font-mono text-primary uppercase tracking-[0.2em] font-bold">
            0{index + 1} // {project.tech[0]}
          </span>
          <div className="flex gap-3">
            {project.github && project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm hover:bg-white hover:text-black transition-all">
                <Github size={18} />
              </a>
            )}
            {project.demo && project.demo !== "#" && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm hover:bg-white hover:text-black transition-all">
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>

        <h4 className="text-3xl font-display font-black mb-4 tracking-tighter group-hover:text-primary transition-colors">{project.title}</h4>
        <p className="text-sm text-white/60 mb-8 leading-relaxed max-w-sm">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map(t => {
            const slug = t.toLowerCase()
              .replace("next.js", "nextdotjs")
              .replace("tailwind css", "tailwindcss")
              .replace("scikit-learn", "scikitlearn")
              .replace("node.js", "nodedotjs")
              .replace(" / ", "")
              .replace(" ", "");
            
            return (
              <span key={t} className="px-4 py-1.5 bg-white/5 rounded-full text-[9px] border border-white/10 font-bold uppercase tracking-wider text-white/70 flex items-center gap-2 group-hover:border-primary/30 transition-colors">
                <img 
                  src={`https://cdn.simpleicons.org/${slug}/ffffff`} 
                  alt="" 
                  className="w-3 h-3 object-contain opacity-50 group-hover:opacity-100 transition-opacity"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("Tout");
  const [limit, setLimit] = useState(4);

  const categories = ["Tout", "Web", "Java", "3D", "Mobile"];
  
  const filteredProjects = projects.filter(p => 
    activeCategory === "Tout" ? true : p.category === activeCategory
  );

  const displayProjects = filteredProjects.slice(0, limit);
  const hasMore = filteredProjects.length > limit;

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/30 mb-4 ml-1">Réalisations</h2>
            <h3 className="text-5xl md:text-8xl font-display font-black tracking-tighter">
              PROJETS <span className="text-primary italic">RÉCENTS</span>
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-4 bg-white/5 p-2 rounded-2xl border border-white/5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setLimit(4); }}
                className={cn(
                  "px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                  activeCategory === cat ? "bg-primary text-black" : "text-white/40 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {displayProjects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </motion.div>

        {hasMore && (
          <div className="mt-20 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLimit(prev => prev + 4)}
              className="px-12 py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] text-white font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all flex items-center gap-4"
            >
              Charger Plus de Projets <ArrowUpRight size={18} />
            </motion.button>
          </div>
        )}

        {!hasMore && filteredProjects.length > 4 && (
          <div className="mt-20 flex justify-center">
             <button 
               onClick={() => setLimit(4)}
               className="text-[10px] text-white/30 font-black uppercase tracking-widest hover:text-white transition-colors"
             >
               Afficher Moins
             </button>
          </div>
        )}
      </div>
    </section>
  );
}
