import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Activity, Menu, X, Shield, Zap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';

import heroImg from '@/assets/hero.jpg';

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const imageVisibility = 80; 

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Healing Foods', href: '#food' },
    { name: 'Nearby Clinics', href: '#clinics' },
  ];

  const badges = [
    { icon: Shield, label: "Privacy", value: "Encrypted", color: "blue" },
    { icon: Zap, label: "Speed", value: "Real-time", color: "orange" },
    { icon: Heart, label: "Trust", value: "Vetted", color: "green" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={heroImg}
          alt="Medical Tech Background"
          className="w-full h-full object-cover"
          style={{ 
            opacity: `${imageVisibility}%`,
            filter: `brightness(${imageVisibility + 10}%) contrast(1.1)` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* --- NAVIGATION (Fixed Mobile Menu Logic) --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/10 bg-background/20 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-[110]">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <Activity className="w-5 h-5 text-primary" />
            <span className="text-white uppercase">Healthly<span className="text-primary italic">Pulse</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors">{link.name}</a>
            ))}
            <Link to="/login"><Button variant="outline" className="border-white/10 text-white bg-white/5 backdrop-blur-md">Sign In</Button></Link>
          </div>

          {/* Hamburger Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 text-white relative z-[120]"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl border-b border-white/10 z-[105] md:hidden"
            >
              <div className="flex flex-col p-8 gap-8 items-center text-center">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-2xl font-black text-white uppercase tracking-tighter hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <Link to="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full py-8 text-lg bg-primary text-white font-black rounded-2xl uppercase tracking-widest">
                    Sign In Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO CONTENT --- */}
      <div className="relative z-40 container mx-auto px-4 text-center flex flex-col items-center pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 mb-6 rounded-full border border-white/10">
          <Sparkles className="w-3 h-3 text-primary animate-pulse" />
          <span className="text-[9px] font-black tracking-[0.3em] uppercase text-white/80">Visionary Health Advisor</span>
        </motion.div>

        <motion.h1 className="text-5xl md:text-9xl font-black mb-6 leading-none tracking-tighter text-white uppercase">
          Visionary <br /> <span className="gradient-text">Intelligence</span>
        </motion.h1>

        <motion.p className="text-base md:text-xl text-white/70 max-w-xl mb-10 font-medium leading-relaxed">
          Identify symptoms and discover healing foods through the lens of advanced AI technology.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12 relative z-50">
          <Link to="/login"><Button className="w-full sm:w-auto px-10 py-7 bg-primary text-white font-black rounded-full uppercase tracking-widest text-xs">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
          <a href="#features"><Button variant="outline" className="w-full sm:w-auto px-10 py-7 border-white/20 text-white bg-white/5 backdrop-blur-md rounded-full uppercase tracking-widest text-xs">Explore Tools</Button></a>
        </div>

        {/* Mobile Trust Bar */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="flex lg:hidden flex-wrap justify-center gap-3 mt-4"
        >
          {badges.map((b) => (
            <div key={b.label} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
              <b.icon className="w-3.5 h-3.5 text-primary" />
              <span className="text-[10px] font-bold text-white/80 uppercase">{b.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Desktop Floating Badges (Hidden on Mobile) */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="absolute top-32 left-10 flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-2xl animate-float">
          <Shield className="w-5 h-5 text-blue-400" />
          <div><p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Privacy</p><p className="text-xs font-bold text-white uppercase">Encrypted</p></div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="absolute top-1/2 right-12 flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
          <Zap className="w-5 h-5 text-orange-400" />
          <div><p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Speed</p><p className="text-xs font-bold text-white uppercase">Real-time AI</p></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;