import { motion } from "motion/react";
import { Send, Mail, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-8"
            >
              CONNECTONS <br />
              <span className="text-accent italic">NOUS</span>
            </motion.h2>
            
            <p className="text-xl text-white/60 mb-12 max-w-md">
              Actuellement ouvert à de nouvelles opportunités et des collaborations intéressantes. N'hésitez pas à me contacter !
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-white/40">Email</p>
                  <p className="text-xl font-bold">oka270294@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 group-hover:bg-secondary/10 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-white/40">Localisation</p>
                  <p className="text-xl font-bold">Dakar, Sénégal</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <p className="text-xs font-mono uppercase tracking-widest text-white/40 mb-6">Réseaux Sociaux</p>
              <div className="flex gap-4">
                {[
                  { icon: <Github />, href: "https://github.com/kahmancoder" },
                  { icon: <Linkedin />, href: "https://linkedin.com/in/oumar-ka" },
                  { icon: <Twitter />, href: "#" },
                  { icon: <Instagram />, href: "#" }
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:text-primary transition-colors border border-white/5"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-dark p-8 md:p-12 rounded-[40px] border border-white/10 relative"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-2">Votre Nom</label>
                  <input 
                    type="text" 
                    placeholder="Oumar Ka"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-2">Adresse Email</label>
                  <input 
                    type="email" 
                    placeholder="oumar@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-2">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Parlez-moi de votre projet..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-primary rounded-2xl text-black font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-all"
              >
                Envoyer le Message <Send size={20} />
              </motion.button>
            </form>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 glass rounded-full flex items-center justify-center border border-white/10 -rotate-12">
               <span className="text-2xl">✨</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
