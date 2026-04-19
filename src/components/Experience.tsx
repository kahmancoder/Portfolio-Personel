import { motion } from "motion/react";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const events = [
  {
    type: "education",
    title: "Étudiant en 2ème année (Génie Informatique)",
    organization: "École Supérieure Polytechnique de Dakar (ESP)",
    period: "2024 - Présent",
    desc: "J'ai intégré l'ESP, l'une des écoles les plus prestigieuses du Sénégal, après l'obtention de mon Baccalauréat avec la mention Très Bien. Je me spécialise aujourd'hui en Génie Logiciel et Système Informatique."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-display font-black tracking-tighter mb-4"
          >
            PARCOURS <span className="text-secondary italic">&</span> CROISSANCE
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-16">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 group"
            >
              {/* Timeline Pin */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-black border-4 border-primary group-hover:scale-150 transition-transform duration-300" />
              
              <div className="glass-dark p-8 rounded-3xl border border-white/5 hover:border-secondary/20 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 glass rounded-xl text-primary">
                      {event.type === "education" ? <GraduationCap size={24} /> : <Briefcase size={24} />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white">{event.title}</h3>
                      <p className="text-secondary font-medium">{event.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-white/40 font-mono text-sm px-4 py-1 glass rounded-full w-fit">
                    <Calendar size={14} />
                    {event.period}
                  </div>
                </div>
                
                <p className="text-white/60 leading-relaxed max-w-3xl">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
