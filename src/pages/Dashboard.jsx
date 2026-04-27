import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Apple, MapPin, Activity, ArrowRight, 
  Zap, Bell, ShieldCheck, HeartPulse, UserCircle, LineChart 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppStore } from '@/lib/store';

const Dashboard = () => {
  const userName = useAppStore((s) => s.userName);
  const recentChecks = useAppStore((s) => s.recentChecks) || [];

  const quickActions = [
    { 
      title: 'Neural Scan', 
      description: 'AI Diagnosis Node', 
      icon: Stethoscope, 
      to: '/dashboard/symptoms', 
      color: 'text-cyan-400', 
      border: 'border-cyan-500/20' 
    },
    { 
      title: 'Bio-Fuel', 
      description: 'Nutrition Intake', 
      icon: Apple, 
      to: '/dashboard/food', 
      color: 'text-emerald-400', 
      border: 'border-emerald-500/20' 
    },
    { 
      title: 'Geo-Clinics', 
      description: 'Facility Locator', 
      icon: MapPin, 
      to: '/dashboard/clinics', 
      color: 'text-purple-400', 
      border: 'border-purple-500/20' 
    },
    { 
      title: 'Health Tracking', 
      description: 'Biometric Analytics', 
      icon: LineChart, 
      to: '/dashboard/tracking', 
      color: 'text-orange-400', 
      border: 'border-orange-500/20' 
    },
    { 
      title: 'Pharma-Pulse', 
      description: 'Medication Stream', 
      icon: Zap, // Using Zap for a "Pulse" feel, or use Pill if preferred
      to: '/dashboard/pharma', 
      color: 'text-rose-400', 
      border: 'border-rose-500/20' 
    },
    { 
      title: 'Recovery Journey', 
      description: 'Neural Path Tracking', 
      icon: Activity, 
      to: '/dashboard/recovery', 
      color: 'text-blue-400', 
      border: 'border-blue-500/20' 
    },

  ];

  // Animation Variants for the staggered grid entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 }, // Moves in from the left
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    /* pl-0: No extra offset on mobile
       lg:pl-12: Moves content from the left on Desktop
       xl:pl-24: Maximum breathing room on large screens
    */
    <div className="space-y-12 md:space-y-24 pl-0 lg:pl-12 xl:pl-24 transition-all duration-700">
      
      {/* --- HERO HEADER --- */}
      <header className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -100 }} // Heavy movement from left
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-md">
            <Zap className="w-3 h-3 text-cyan-400 fill-current" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-400">Guardian Protocol v2.4</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black italic tracking-tighter uppercase leading-[0.8] mb-2">
            WELCOME!! <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
              {userName || ''}
            </span>
          </h1>
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.8em] ml-2">
            System status: Optimal • Neural Link Active
          </p>
        </motion.div>

        {/* User Status Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-4 w-full sm:w-auto pr-6 lg:pr-12"
        >
          <div className="glass-card flex-1 sm:flex-none p-5 px-8 flex items-center gap-6 border border-white/5 bg-white/[0.02] backdrop-blur-2xl rounded-2xl shadow-2xl">
            <div className="text-right">
              <p className="text-[9px] font-black uppercase text-white/20 tracking-widest">Access Level</p>
              <p className="text-xs font-bold italic tracking-tight text-cyan-400">Standard Node</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <UserCircle className="w-8 h-8 text-white" />
            </div>
          </div>
        </motion.div>
      </header>

{/* --- METRIC GRID --- */}
<motion.div 
  variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="grid grid-cols-1 md:grid-cols-3 gap-6"
>
  {[
    { label: 'Neural Syncs', val: recentChecks.length, icon: Activity, color: 'cyan' },
    { label: 'Latest Protocol', val: recentChecks[0]?.disease || 'INITIALIZE', icon: ShieldCheck, color: 'emerald' },
    { label: 'System Integrity', val: 'STABLE', icon: HeartPulse, color: 'purple' }
  ].map((stat, i) => (
    <motion.div 
      key={i}
      variants={itemVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`glass-card p-8 md:p-10 border border-white/5 bg-white/[0.01] rounded-[40px] group relative overflow-hidden`}
    >
      {/* Large Background Icon Overlay */}
      <stat.icon 
        className={`absolute -right-4 -bottom-4 w-32 h-32 md:w-48 md:h-48 text-white/[0.03] transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:text-white/[0.07]`} 
      />
      
      <div className="relative z-10">
        <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] text-white/20 mb-10 md:mb-14">
          {stat.label}
        </p>
        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase text-white leading-none">
          {stat.val}
        </h2>
      </div>

      {/* Subtle Bottom Glow Line */}
      <div className={`absolute bottom-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-${stat.color}-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </motion.div>
  ))}
</motion.div>

      {/* --- OPERATIONAL MODULES --- */}
      <section className="space-y-12 pb-20">
        <div className="flex items-center gap-6">
          <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20">Operational Modules</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {quickActions.map((action, i) => (
            <motion.div key={action.title} variants={itemVariants}>
              <Link to={action.to} className="group block h-full">
                <div className={`glass-card p-10 h-full border border-white/5 border-l-4 ${action.border} bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-[32px] relative overflow-hidden`}>
                  
                  {/* Internal Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[60px] group-hover:bg-cyan-500/10 transition-colors duration-500" />

                  <action.icon className={`w-14 h-14 ${action.color} mb-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`} />
                  
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4 leading-tight">{action.title}</h3>
                  <p className="text-[11px] text-white/40 font-bold tracking-wider uppercase leading-relaxed mb-12">{action.description}</p>

                  <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                    Execute Node <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Dashboard;