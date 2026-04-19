import { motion, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
      style={{ scaleX }}
    />
  );
}

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        if (!loading) {
          document.body.style.overflow = "auto";
        }
      }}
      className={`fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center transition-all ${!loading ? "pointer-events-none" : ""}`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative"
      >
        <div className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white">
          CHARGEMENT<span className="text-primary italic">.</span>
        </div>
        
        <motion.div 
          className="absolute -bottom-4 left-0 h-1 bg-primary"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-white/40 font-mono text-xs uppercase tracking-[0.4em]"
      >
        Interface Futuriste // Expérience UX
      </motion.p>
    </motion.div>
  );
}
