import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, ShieldAlert, X } from 'lucide-react';

const SystemAlert = ({ isOpen, onClose, moduleName }) => {
  // Auto-close after 4 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%', scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
          className="fixed bottom-10 left-1/2 z-[100] w-[90%] max-w-md"
        >
          <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl border border-orange-500/30 rounded-2xl p-4 shadow-[0_0_40px_rgba(249,115,22,0.15)] relative overflow-hidden">
            {/* Background Scanning Effect */}
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"
            />

            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
                <Lock size={20} className="text-orange-500" />
              </div>
              
              <div className="flex-1">
                <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-orange-500 mb-1">
                  Access Restricted
                </h4>
                <p className="text-xs text-white/60 font-mono uppercase tracking-tighter">
                  {moduleName} protocol is under construction.
                </p>
              </div>

              <button onClick={onClose} className="text-white/20 hover:text-white transition-colors">
                <X size={16} />
              </button>
            </div>

            {/* Progress countdown bar */}
            <motion.div 
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
              className="absolute bottom-0 left-0 h-[2px] bg-orange-500/50"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SystemAlert;