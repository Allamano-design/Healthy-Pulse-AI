import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Terminal, Activity } from 'lucide-react';


import aminaImg from '@/assets/testimonials/amina.jpg';
import davidImg from '@/assets/testimonials/david.jpg';
import graceImg from '@/assets/testimonials/grace.jpg';
import tracyImg from '@/assets/testimonials/tracy.jpg';

const testimonials = [
  { 
    name: "Amina W.", 
    role: "Health Worker", 
    content: "SYSTEM ANALYSIS: APP HAS RECALIBRATED COMMUNITY OUTREACH. ACCURACY AT 98% FOR LOCAL DIAGNOSTICS.", 
    image: aminaImg 
  },
  { 
    name: "David K.", 
    role: "Teacher", 
    content: "PROTOCOL ALERT: EARLY TYPHOID DETECTION SUCCESSFUL. CLINIC MAPPING MINIMIZED TRANSIT TIME BY 40%.", 
    image: davidImg
  },
  { 
    name: "Grace M.", 
    role: "Parent", 
    content: "SECURITY UPDATE: AI MODULE PROVIDES CRITICAL TRIAGE DATA. REDUCED EMERGENCY ROOM ANXIETY SIGNIFICANTLY.", 
    image: graceImg 
  },
  { 
    name: "Tracy O.", 
    role: "Pharmacist", 
    content: "SUPPLY CHAIN SYNC: PHARMA-PULSE ALLOWS REAL-TIME INVENTORY AND PRICING TRANSPARENCY.", 
    image: tracyImg 
  },
];

const DecryptText = ({ text }) => {
  const [result, setResult] = useState("");
  const characters = "0101X_";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setResult(text.split("").map((char, index) => {
        if (index < iteration) return text[index];
        return characters[Math.floor(Math.random() * characters.length)];
      }).join(""));

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1;
    }, 20);
    return () => clearInterval(interval);
  }, [text]);

  return <p className="font-mono text-[13px] text-cyan-400/90 leading-relaxed tracking-wider break-words">{result}</p>;
};

const TestimonialCard = ({ t, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative bg-slate-950/40 border border-white/5 backdrop-blur-3xl p-8 rounded-2xl group hover:border-cyan-500/40 transition-all duration-500 flex flex-col h-full"
  >
    {/* Decorative Corner Accents */}
    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500/20 rounded-tr-2xl group-hover:border-cyan-500 transition-colors" />
    
    <div className="flex items-center gap-4 mb-6">
      <div className="relative shrink-0">
        <img src={t.image} alt={t.name} className="w-12 h-12 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950 animate-pulse" />
      </div>
      <div className="overflow-hidden">
        <h4 className="font-black text-white text-sm tracking-widest truncate uppercase italic">{t.name}</h4>
        <p className="text-[9px] font-mono text-cyan-500/50 uppercase tracking-[0.2em]">{t.role}</p>
      </div>
      <Terminal size={14} className="ml-auto text-white/10 group-hover:text-cyan-500/40" />
    </div>

    <div className="flex-grow">
      <DecryptText text={t.content} />
    </div>

    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-cyan-500 text-cyan-500" />)}
      </div>
      <span className="text-[8px] font-mono text-white/10 tracking-[0.4em]">VERIFIED_LOG</span>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-16 text-left">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-px w-12 bg-cyan-500" />
             <span className="text-[10px] font-black tracking-[0.5em] text-cyan-500 uppercase">Neural Feed</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black italic text-white tracking-tighter uppercase leading-none">
            User <span className="text-cyan-500">Feedback</span> <br/> Logs_
          </h2>
        </header>

        {/* Organized Grid for Clear Visibility */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;