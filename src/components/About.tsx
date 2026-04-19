import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white/5 border border-white/10 rounded-[40px] p-10 flex flex-col items-center justify-center text-center group"
          >
            <div className="w-56 h-72 rounded-[32px] bg-white/5 border border-white/10 p-2 mb-8 group-hover:rotate-3 transition-transform duration-500 relative overflow-hidden">
               <div className="w-full h-full rounded-[24px] bg-neutral-900 flex items-center justify-center overflow-hidden relative">
                  <img 
                    src="/profile.jpg" 
                    alt="Oumar Ka"
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-110 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
            </div>
            <h3 className="text-2xl font-display font-black tracking-tighter uppercase mb-2">Oumar Ka</h3>
            <span className="px-4 py-1.5 glass rounded-full text-[10px] text-primary font-black uppercase tracking-widest mb-6">Étudiant en Génie Logiciel et Système Informatique</span>
            <p className="text-sm text-white/50 leading-relaxed px-4">
              Passionné par le rapprochement entre la logique fonctionnelle et le design immersif.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 h-full flex flex-col justify-center"
          >
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-white/30 mb-8">Profil Système</h2>
            <div className="space-y-8 text-xl md:text-3xl font-medium text-white/80 leading-snug tracking-tight">
              <p>
               Je suis un étudiant en <span className="text-primary italic">génie logiciel et système informatique</span> passionné, dédié à la création d'applications <span className="text-white">robustes, efficaces et innovantes.</span>
              </p>
              <p>
                J'aime transformer des idées complexes en <span className="text-secondary italic">solutions numériques</span> fonctionnelles qui apportent de la valeur et une excellente expérience utilisateur.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-8">
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-primary" />
                 <span className="text-xs font-bold uppercase tracking-widest text-white/50">UI/UX Focused</span>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-secondary" />
                 <span className="text-xs font-bold uppercase tracking-widest text-white/50">Génie Logiciel</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
