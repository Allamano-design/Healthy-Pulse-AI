import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, CheckCircle2, Clock, Zap, ShieldAlert, Heart, Users, RefreshCcw } from 'lucide-react';

import Navbar from '../components/Navbar';
import Footer from '../components/landing/Footer';

const GuardianJourney = () => {
  const [steps, setSteps] = useState([
    { id: 1, day: "Day 1", title: "Crisis Control", desc: "Initiate primary treatment and focus on intensive ORS hydration.", status: "active" },
    { id: 2, day: "Day 2", title: "Biometric Sync", desc: "Monitor temperature stability and check for secondary symptoms.", status: "upcoming" },
    { id: 3, day: "Day 3", title: "Thermal Check", desc: "Fever should be breaking. Update symptoms in Neural Scan.", status: "upcoming" },
    { id: 4, day: "Day 5", title: "System Recovery", desc: "Reintroduce solid nutrition and evaluate energy levels.", status: "upcoming" },
    { id: 5, day: "Day 7", title: "Dose Completion", desc: "Final day of protocol. Essential to finish all medicine to prevent relapse.", status: "upcoming" },
  ]);

  const completedCount = steps.filter(s => s.status === "completed").length;
  const progressPercent = Math.round((completedCount / steps.length) * 100);

  const handleUpdateProgress = () => {
    const activeIndex = steps.findIndex(s => s.status === "active");
    if (activeIndex === -1) return;

    const newSteps = [...steps];
    newSteps[activeIndex].status = "completed";
    if (activeIndex + 1 < newSteps.length) {
      newSteps[activeIndex + 1].status = "active";
    }
    setSteps(newSteps);
  };

  return (
    <>
      <Navbar />

      {/* Increased pt-32 to prevent Navbar overlap and added pb-20 for bottom spacing */}
      <div className="min-h-screen bg-[#020617] text-white p-6 md:p-12 pt-32 pb-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto">
          
          <header className="mb-16 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <Zap className="w-4 h-4 text-cyan-400 fill-current" />
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400">Guardian Protocol v2.4</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4 leading-none">
                Guardian <span className="text-cyan-400 font-normal underline decoration-cyan-500/30">Journey</span>
              </h1>
            </div>

            <div className="flex gap-4">
              <div className="glass-card p-6 border-b-2 border-cyan-500 min-w-[160px]">
                <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest mb-1 text-center">Protocol Progress</p>
                <p className="text-5xl font-black tracking-tighter text-center">{progressPercent}%</p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* TIMELINE COLUMN */}
            <div className="lg:col-span-2 relative">
              {/* Timeline Line hiding on mobile for cleaner look */}
              <div className="hidden md:block absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-cyan-500/20 to-transparent" />
              
              <div className="space-y-10">
                {steps.map((step) => (
                  <motion.div 
                    key={step.id} 
                    layout 
                    className="relative md:pl-16 group"
                  >
                    <div className={`hidden md:flex absolute left-0 top-0 w-10 h-10 rounded-full items-center justify-center border-2 z-10 bg-[#020617] transition-all duration-500 ${
                      step.status === 'completed' ? 'border-cyan-500 text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 
                      step.status === 'active' ? 'border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-110' : 
                      'border-white/10 text-white/10'
                    }`}>
                      {step.status === 'completed' ? <CheckCircle2 className="w-6 h-6" /> : <Clock className="w-5 h-5" />}
                    </div>

                    <div className={`glass-card p-6 md:p-8 transition-all duration-500 ${
                      step.status === 'active' ? 'border-cyan-500/50 bg-cyan-500/5' : 
                      step.status === 'completed' ? 'opacity-40 grayscale-[50%]' : 'opacity-20 blur-[1px]'
                    }`}>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em]">{step.day}</p>
                        {step.status === 'active' && (
                          <span className="animate-pulse text-[8px] font-black bg-cyan-500 text-black px-2 py-0.5 rounded">LOCKED PHASE</span>
                        )}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase italic mb-3 tracking-tighter">{step.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">
              <div className="glass-card p-6 border-t-4 border-cyan-500 lg:sticky lg:top-32">
                <h4 className="text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-cyan-400" /> Neural Protocol
                </h4>
                <div className="space-y-4">
                  <button 
                    onClick={handleUpdateProgress}
                    disabled={progressPercent === 100}
                    className="group relative w-full py-5 bg-cyan-500 text-black font-black text-[10px] uppercase tracking-widest rounded-xl overflow-hidden transition-all hover:bg-white disabled:bg-white/10 disabled:text-white/20"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <RefreshCcw className={`w-4 h-4 ${progressPercent < 100 ? 'group-hover:rotate-180 transition-transform duration-700' : ''}`} />
                      {progressPercent === 100 ? "Journey Complete" : "Sync Next Phase"}
                    </span>
                  </button>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[8px] font-black text-white/30 uppercase mb-2 text-left">Current Instruction</p>
                    <p className="text-sm italic leading-snug text-left">
                      {progressPercent === 100 
                        ? "Recovery protocol finished." 
                        : steps.find(s => s.status === 'active')?.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </>
  );
};

export default GuardianJourney;