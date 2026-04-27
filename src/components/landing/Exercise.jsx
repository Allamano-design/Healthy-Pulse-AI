import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, ChevronRight } from 'lucide-react';

import neuralImg from "@/assets/exercise/neural.jpg";
import coresyncImg from "@/assets/exercise/coresync.jpg";
import oxygenImg from "@/assets/exercise/oxygen.jpg";
import twitchImg from "@/assets/exercise/twitch.jpg";
import jointImg from "@/assets/exercise/joint.jpg";
import coolingImg from "@/assets/exercise/cooling.jpg";

const exercises = {
  columnA: [
    { id: '01', title: "Neural Stretch", duration: "5m", img: neuralImg, desc: "Reset central nervous system alignment." },
    { id: '02', title: "Core Sync", duration: "12m", img: coresyncImg, desc: "Stabilize mid-section processing units." },
    { id: '03', title: "Oxygen Load", duration: "8m", img: oxygenImg, desc: "Maximize lung capacity via rhythmic cycles." },
  ],
  columnB: [
    { id: '04', title: "Fast Twitch", duration: "15m", img: twitchImg, desc: "Activate high-velocity muscle fibers." },
    { id: '05', title: "Joint Pivot", duration: "10m", img: jointImg, desc: "Lubricate structural hinges for mobility." },
    { id: '06', title: "System Cool", duration: "7m", img: coolingImg, desc: "Thermal regulation and heart rate reset." },
  ]
};

const ExerciseCard = ({ data, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    whileHover={{ y: -5, scale: 1.01 }}
    transition={{ duration: 0.4 }}
    className="relative group cursor-pointer mb-8"
  >
    {/* Flag Card Container - Darker base for better image pop */}
    <div className="relative h-48 md:h-56 w-full flex overflow-hidden rounded-2xl bg-[#050505]/95 border border-white/5 group-hover:border-primary/40 transition-all duration-500 backdrop-blur-3xl shadow-[0_0_20px_rgba(0,0,0,0.3)]">
      
      {/* Image Side (The "Flag") */}
      <div className="w-1/3 relative h-full overflow-hidden border-r border-white/5">
        <img 
          src={data.img} 
          alt={data.title}
          // Starts Clear/Original (opacity 100, no grayscale)
          className="w-full h-full object-cover transition-all duration-700 opacity-100 group-hover:scale-110 group-hover:rotate-1"
        />
        
        {/* --- DYNAMIC COLOR FLASH LAYER --- */}
        {/* Transparent at start, becomes Primary Orange on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/90 transition-all duration-500 mix-blend-color" />
        
        {/* Subtle Darkening Gradient (Static) */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 to-black/70" />
      </div>

      {/* Content Side */}
      <div className="w-2/3 p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-2">
            <span className="text-[10px] font-mono text-primary font-black tracking-widest">{data.id}</span>
            <span className="text-[9px] font-mono text-white/30 uppercase tracking-tighter">{data.duration} // NODE_READY</span>
          </div>
          <h4 className="text-xl font-black italic uppercase text-white tracking-tighter group-hover:text-primary transition-colors">
            {data.title}
          </h4>
          <p className="text-[10px] text-white/50 leading-relaxed mt-2 font-medium max-w-[180px]">
            {data.desc}
          </p>
        </div>

        <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-all">
          Execute Protocol <ChevronRight size={10} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Primary Scanline */}
      <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary shadow-[0_0_10px_#ff6b00] group-hover:h-full transition-all duration-500" />
    </div>
  </motion.div>
);

const ExerciseSection = () => {
  return (
    /* Updated Background: Midnight Navy Gradient */
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-[radial-gradient(circle_at_50%_-20%,#0f172a,transparent)]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />
      
      {/* Grid Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }} 
      />

      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="text-primary w-5 h-5" />
            <span className="text-[10px] font-mono text-primary uppercase tracking-[0.5em]">Neural_Kinetics_v2.0</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black italic text-white uppercase tracking-tighter leading-none">
            Movement <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.15)' }}>Intelligence_</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
          <div className="space-y-4">
            <h3 className="text-[11px] font-mono text-white/30 uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
              <Zap size={12} className="text-primary" /> Load_Physical_Optimization
            </h3>
            {exercises.columnA.map((ex, i) => (
              <ExerciseCard key={ex.id} data={ex} index={i} />
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-[11px] font-mono text-white/30 uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
              <Activity size={12} className="text-primary" /> Load_Recovery_States
            </h3>
            {exercises.columnB.map((ex, i) => (
              <ExerciseCard key={ex.id} data={ex} index={i} />
            ))}
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-white/10 flex justify-between items-center">
          <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.5em]">
            Status: Connection_Stable // Latency: 0.04ms
          </p>
          <div className="flex gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#ff6b00]" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/5" />
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ExerciseSection;