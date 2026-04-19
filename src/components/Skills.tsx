import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface SkillCardProps {
  name: string;
  icon: string;
  color: string;
}

function SkillCard({ name, icon, color }: SkillCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative bg-white/5 p-6 rounded-[24px] border border-white/5 flex items-center gap-5 group transition-all duration-300 overflow-hidden"
    >
      {/* Dynamic Spotlight Effect */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37, 99, 235, 0.15), transparent 80%)`,
        }}
      />

      <div className="relative z-10 p-3 glass rounded-2xl group-hover:bg-primary/10 transition-all duration-500 group-hover:scale-110">
        <img 
          src={`https://cdn.simpleicons.org/${icon}`} 
          alt={name} 
          className="w-6 h-6 object-contain transition-all"
        />
      </div>
      
      <div className="relative z-10 flex-1">
        <h4 className="text-[11px] font-black uppercase tracking-[0.15em] text-white/70 group-hover:text-white transition-colors">
          {name}
        </h4>
        <div className="w-full h-[1px] mt-2.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full bg-primary/40" 
            style={{ width: "100%", boxShadow: `0 0 10px ${color}44` }} 
          />
        </div>
      </div>
    </motion.div>
  );
}

const MarieeItem = ({ name, icon }: { name: string, icon: string }) => (
  <div className="flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 rounded-full mx-4 whitespace-nowrap group hover:bg-primary/20 hover:border-primary/30 transition-all">
    <img 
      src={`https://cdn.simpleicons.org/${icon}`} 
      alt={name} 
      className="w-4 h-4 object-contain opacity-60 group-hover:opacity-100 transition-opacity"
    />
    <span className="text-[10px] font-black uppercase tracking-widest text-white/60 group-hover:text-white">{name}</span>
  </div>
);

export default function Skills() {
  const allSkills = [
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "Java", icon: "java" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "PHP", icon: "php" },
    { name: "MySQL", icon: "mysql" },
    { name: "GitHub", icon: "github" },
    { name: "Figma", icon: "figma" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Next.js", icon: "nextdotjs" },
  ];

  const skillGroups = [
    {
      title: "Cœur Frontend",
      skills: [
        { name: "React / Next.js", icon: "react", color: "#2563eb" },
        { name: "TypeScript", icon: "typescript", color: "#2563eb" },
        { name: "Tailwind CSS", icon: "tailwindcss", color: "#2563eb" },
        { name: "Framer Motion", icon: "framer", color: "#2563eb" },
      ]
    },
    {
      title: "Ingénierie Backend",
      skills: [
        { name: "Java", icon: "java", color: "#2563eb" },
        { name: "Node.js (API)", icon: "nodedotjs", color: "#2563eb" },
        { name: "MySQL Database", icon: "mysql", color: "#2563eb" },
        { name: "Firebase", icon: "firebase", color: "#2563eb" },
      ]
    },
    {
      title: "Écosystème Design",
      skills: [
        { name: "Figma / UX", icon: "figma", color: "#2563eb" },
        { name: "Git / GitHub", icon: "github", color: "#2563eb" },
        { name: "Three.js / 3D", icon: "threedotjs", color: "#2563eb" },
        { name: "Postman / Dev", icon: "postman", color: "#2563eb" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-32 bg-primary/40 origin-center hidden md:block"
            />
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 ml-1">Expertise Technique</h2>
            <h3 className="text-6xl md:text-9xl font-display font-black tracking-tighter leading-[0.8] mb-4">
              MON <span className="text-primary italic">STACK</span>
            </h3>
          </div>
          <div className="max-w-[300px] text-right">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/30 leading-relaxed">
              Une combinaison de frameworks de pointe et de principes d'architecture robustes pour des solutions scalables.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Marquee 1 */}
      <div className="flex overflow-hidden mb-20 pointer-events-none select-none opacity-50 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div 
          animate={{ x: [0, -1035] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap shrink-0"
        >
          {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
            <MarieeItem key={i} {...skill} />
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillGroups.map((group, groupIdx) => (
            <motion.div 
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIdx * 0.15 }}
              className="group/container relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-[40px] scale-95 group-hover/container:scale-100 transition-transform duration-500 blur-xl opacity-0 group-hover/container:opacity-100" />
              <div className="relative bg-white/[0.03] border border-white/10 rounded-[40px] p-10 backdrop-blur-sm hover:border-primary/20 transition-colors h-full">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-8 h-[2px] bg-primary" />
                  <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/50">
                    {group.title}
                  </h3>
                </div>
                
                <div className="flex flex-col gap-5">
                  {group.skills.map((skill, i) => (
                    <SkillCard 
                      key={skill.name} 
                      {...skill} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Infinite Marquee 2 (Reverse) */}
      <div className="flex overflow-hidden mt-20 pointer-events-none select-none opacity-40 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div 
          animate={{ x: [-1035, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex flex-nowrap shrink-0"
        >
          {[...allSkills, ...allSkills, ...allSkills].map((skill, i) => (
            <MarieeItem key={i} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
