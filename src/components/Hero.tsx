import { motion } from "motion/react";
import { ArrowRight, Download, Send } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-mono text-sm tracking-widest uppercase mb-4 flex items-center gap-2"
            >
              <span className="opacity-30">&lt;</span>
              <span>Hello World, je suis</span>
              <span className="opacity-30">/&gt;</span>
            </motion.p>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter leading-[0.85] mb-8">
              OUMAR <span className="text-gradient">KA</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 font-medium max-w-lg mb-10 leading-relaxed">
              Étudiant en <span className="text-white">Génie Logiciel et Système Informatique</span> créant des applications web modernes avec un focus sur l'UI/UX immersive.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-primary transition-colors flex items-center gap-3"
              >
                Voir les Projets
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border border-white/20 bg-white/5 text-white font-black text-xs uppercase tracking-[0.2em] rounded-2xl hover:bg-white/10 transition-colors flex items-center gap-3"
              >
                Télécharger CV
              </motion.a>
            </div>
          </motion.div>
          
          <div className="hidden lg:block relative h-[500px]">
             {/* 3D Visual Element is handled by the fixed Scene background, but we can add a focus point here if needed */}
             <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-80 h-80 rounded-3xl glass backdrop-blur-xl border border-white/20 rotate-12 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="w-16 h-1 w-full bg-primary/30 rounded-full mb-4" />
                    <div className="w-12 h-1 w-full bg-secondary/30 rounded-full mb-4" />
                    <div className="grid grid-cols-2 gap-4 w-full mt-4">
                      <div className="h-20 glass rounded-xl" />
                      <div className="h-20 glass rounded-xl" />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-10 -right-10 w-40 h-40 glass rounded-full border border-primary/20 flex items-center justify-center"
                >
                  <div className="text-primary font-bold text-4xl">&lt;/&gt;</div>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Explorer le portfolio</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
