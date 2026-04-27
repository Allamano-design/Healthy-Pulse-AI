import React, { useState } from 'react';
import { Heart, Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SystemAlert from '@/components/ui/system-alert';

import footerImg from '@/assets/footer.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [alert, setAlert] = useState({ show: false, name: '' });

  // Helper to trigger the "Under Construction" alert
  const triggerAlert = (e, name) => {
    e.preventDefault();
    setAlert({ show: true, name });
  };

return (
    <footer className="relative bg-background border-t border-white/5 pt-24 pb-12 overflow-hidden">
      
      {/* --- VISIONARY IMAGE BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src={footerImg} 
          alt="Medical Tech"
          className="w-full h-full object-cover opacity-[0.4] grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Glow Accents */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <h3 className="text-3xl font-black tracking-tighter gradient-text uppercase group-hover:tracking-normal transition-all duration-500">
                Healthly Pulse
              </h3>
            </Link>
            <p className="text-white/50 text-base max-w-sm leading-relaxed mb-8 font-medium">
              Next-generation AI advisor for community health. Engineering a future where localized medical intelligence is accessible to everyone.
            </p>
            
            {/* Real Social Links */}
            <div className="flex gap-4">
              {[
                { Icon: Twitter, href: "https://x.com/bitsmanor", label: "Twitter" },
                { Icon: Github, href: "https://github.com/Allamano-design", label: "Github" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/allamano kinyahwe", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:allamanojoseph00@gmail.com", label: "Email" }
              ].map(({ Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-500/50 transition-all backdrop-blur-md"
                  title={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links: Product (Existing Pages) */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight uppercase text-xs tracking-[0.2em]">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Features</a></li>
              <li><Link to="/diagnosis" className="text-white/40 hover:text-white transition-colors text-sm font-medium">AI Diagnosis</Link></li>
              <li><Link to="/food-guide" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Food Intelligence</Link></li>
              <li><Link to="/clinics" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Clinic Locator</Link></li>
              <li><Link to="/pharma-pulse" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Pharma Pulse</Link></li>
              <li><Link to="/recovery-journey" className="text-white/40 hover:text-white transition-colors text-sm font-medium">Recovery Journey</Link></li>
            </ul>
          </div>

          {/* Links: Resources (Mocked) */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight uppercase text-xs tracking-[0.2em]">Resources</h4>
            <ul className="space-y-4">
              {['Documentation', 'Community Forum', 'Health API', 'Support Center'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    onClick={(e) => triggerAlert(e, item)}
                    className="text-white/40 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    {item} {item === 'Health API' && <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-all" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Legal (Mocked) */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight uppercase text-xs tracking-[0.2em]">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Use', 'Data Ethics', 'Medical Disclaimer'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    onClick={(e) => triggerAlert(e, item)}
                    className="text-white/40 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[11px] font-black uppercase tracking-[0.3em]">
            © {currentYear} Healthly Pulse Labs || ALLAMANO
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
            <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">for the community</span>
          </motion.div>
        </div>
      </div>

      {/* Global Alert for empty links */}
      <SystemAlert 
        isOpen={alert.show} 
        onClose={() => setAlert({ ...alert, show: false })} 
        moduleName={alert.name} 
      />
    </footer>
  );
};

export default Footer;