import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, ShieldCheck, Activity } from 'lucide-react';

const stats = [
  { label: "Neural Diagnostics", value: "84.2K", icon: Zap, color: "#ff6b00" },
  { label: "Network Nodes", value: "1,200", icon: Users, color: "#00d1ff" },
  { label: "System Integrity", value: "99.9%", icon: ShieldCheck, color: "#ff6b00" },
];

const HexagonStat = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative w-full aspect-[1/1.1] flex items-center justify-center group cursor-crosshair"
      style={{
        transformStyle: "preserve-3d",
        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
      }}
    >
      {/* Dynamic Border Flicker */}
      <motion.div 
        animate={{ opacity: [0.1, 0.3, 0.1, 0.4, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.2, 0.8, 1] }}
        className="absolute inset-0 bg-white/10 group-hover:bg-orange-500/20 transition-all duration-500" 
      />

      {/* Inner Glass Body */}
      <div 
        className="absolute inset-[2px] bg-[#0a0a0a]/95 backdrop-blur-xl"
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      />

      {/* Pulsing Energy Core */}
      <motion.div
        className="absolute w-20 h-20 rounded-full blur-[40px]"
        style={{ background: stat.color }}
        animate={{ 
          scale: [1, 1.5, 1], 
          opacity: [0.05, 0.15, 0.05] 
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content Layer */}
      <div className="relative z-10 text-center flex flex-col items-center p-6">
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-4"
          style={{ color: stat.color, filter: `drop-shadow(0 0 8px ${stat.color}44)` }}
        >
          <stat.icon size={28} strokeWidth={1.5} />
        </motion.div>

        <h3 className="text-4xl md:text-5xl font-black italic tracking-tighter text-white mb-1">
          {stat.value}
        </h3>
        
        <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/30 group-hover:text-white/60 transition-colors">
          {stat.label}
        </p>

        <div className="mt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[7px] font-mono text-emerald-500/80 tracking-widest uppercase">Syncing...</span>
        </div>
      </div>
    </motion.div>
  );
};

const HiveStats = () => {
  return (
    <section className="py-32 bg-[#020202] relative overflow-hidden border-y border-white/5">
      
      {/* Background Depth Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,transparent_100%)]" />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* The Moving Scanner Line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent z-30"
        animate={{ y: ["0vh", "100vh"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        
        <header className="mb-24 flex flex-col items-center text-center">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            className="h-1 bg-orange-500 mb-8" 
          />
          <h2 className="text-6xl md:text-8xl font-black italic text-white uppercase tracking-tighter leading-none">
            Network <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>Status_</span>
          </h2>
        </header>

        {/* Animated Connection Web (Desktop Only) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block opacity-20">
          <motion.path 
            d="M 35% 65% L 50% 45% L 65% 65%" 
            fill="transparent" 
            stroke="white" 
            strokeWidth="0.5"
            strokeDasharray="4 8"
            animate={{ strokeDashoffset: [0, -24] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* The Hex Grid Container */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
          <div className="md:translate-y-8 md:translate-x-4">
            <HexagonStat stat={stats[0]} index={0} />
          </div>
          <div className="md:scale-110 z-20">
            <HexagonStat stat={stats[1]} index={1} />
          </div>
          <div className="md:translate-y-8 md:-translate-x-4">
            <HexagonStat stat={stats[2]} index={2} />
          </div>
        </div>

        {/* Technical Log Footer */}
        <div className="mt-24 flex flex-col items-center">
          <div className="font-mono text-[8px] text-white/20 tracking-[0.8em] uppercase flex gap-8">
            <span>Lat: 0.02ms</span>
            <span className="text-orange-500/40">Secure_Link: Established</span>
            <span>Node: Primary_Core</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HiveStats;