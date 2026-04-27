import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, EyeOff, Server, Fingerprint, Cpu } from 'lucide-react';

const SecurityPipeline = () => {
  const securityLayers = [
    { icon: Lock, title: "Neural Encryption", desc: "End-to-end 256-bit scrambling." },
    { icon: Fingerprint, title: "Biometric Gating", desc: "Access limited to verified IDs." },
    { icon: EyeOff, title: "Zero-Knowledge", desc: "Your PII remains invisible to us." },
    { icon: Cpu, title: "Isolated Nodes", desc: "Distributed processing for safety." }
  ];

  return (
    <section className="py-32 bg-[#030303] relative overflow-hidden">
      {/* 3D Perspective Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'top',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Content */}
          <div className="lg:w-2/5">
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-[2px] bg-emerald-500" />
               <span className="text-[10px] font-mono font-black uppercase tracking-[0.6em] text-emerald-500">Security Core</span>
            </div>
            
            <h2 className="text-6xl font-black italic text-white uppercase tracking-tighter leading-[0.9] mb-8">
              Data <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px #10b981' }}>Fortress_</span>
            </h2>
            
            <p className="text-white/40 font-mono text-xs leading-relaxed mb-12 max-w-sm">
              Our network architecture treats every data packet as a sensitive biometric signature. Security isn't a feature; it's the foundation.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {securityLayers.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02] rounded-2xl group hover:border-emerald-500/50 transition-all"
                >
                  <item.icon size={20} className="text-emerald-500/50 group-hover:text-emerald-500" />
                  <div>
                    <h4 className="text-[10px] font-bold text-white uppercase tracking-widest">{item.title}</h4>
                    <p className="text-[9px] text-white/30 font-mono">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: The "Vault" Visualization */}
          <div className="lg:w-3/5 w-full relative">
            <div className="relative aspect-square max-w-lg mx-auto flex items-center justify-center">
              
              {/* Spinning Encryption Rings */}
              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 10 * ring, repeat: Infinity, ease: "linear" }}
                  className="absolute border border-emerald-500/10 rounded-full"
                  style={{
                    width: `${ring * 30 + 40}%`,
                    height: `${ring * 30 + 40}%`,
                    borderStyle: ring === 2 ? 'dashed' : 'solid'
                  }}
                />
              ))}

              {/* Central Core */}
              <motion.div 
                animate={{ 
                  boxShadow: ["0 0 20px #10b98133", "0 0 50px #10b98166", "0 0 20px #10b98133"] 
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-48 h-48 bg-emerald-500/10 rounded-3xl border border-emerald-500/50 backdrop-blur-2xl flex items-center justify-center relative overflow-hidden group"
              >
                {/* Floating Shield */}
                <div className="relative z-10 flex flex-col items-center">
                  <Shield size={60} className="text-emerald-500 mb-2 drop-shadow-[0_0_15px_#10b981]" />
                  <span className="text-[8px] font-mono text-emerald-500 font-bold tracking-[0.5em] animate-pulse">ENCRYPTED</span>
                </div>
                
                {/* Internal Scanning Light */}
                <motion.div 
                  animate={{ y: [-100, 200] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-sm"
                />
              </motion.div>

              {/* Data Packet Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -20, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    delay: i * 0.5, 
                    repeat: Infinity 
                  }}
                  className="absolute w-1 h-1 bg-emerald-500 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 3) * 20}%`
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SecurityPipeline;