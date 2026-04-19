import { motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 py-10 px-6 bg-white/5 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-wrap gap-10">
          <div className="flex items-center gap-3 group">
            <span className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em] group-hover:text-primary transition-colors">Github</span>
            <span className="text-xs font-black tracking-tight">@kahmancoder</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-white/30 uppercase font-black tracking-[0.3em]">Loc</span>
            <span className="text-xs font-black tracking-tight">Remote / Dakar</span>
          </div>
        </div>
        
        <div className="text-[10px] font-black text-white/30 tracking-[0.4em] uppercase text-center md:text-left">
          © Oumar Ka — 2026 — Tous droits réservés
        </div>
        
        <a 
          href="#contact"
          className="group flex items-center gap-4 hover:scale-105 transition-transform"
        >
          <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary transition-colors">
            <div className="w-1.5 h-1.5 bg-white group-hover:bg-primary rounded-full transition-colors" />
          </div>
          <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">Me Contacter</span>
        </a>
      </div>
    </footer>
  );
}
