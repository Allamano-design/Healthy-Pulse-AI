import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Encrypted', href: '#features' },
    { name: 'Get Started', href: '#features' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] border-b border-white/10 bg-background/20 backdrop-blur-xl">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-[110]">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tighter">
          <Activity className="w-5 h-5 text-primary" />
          <span className="text-white uppercase tracking-tighter">
            Healthly<span className="text-primary italic">Pulse</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Link to="/login">
            <Button variant="outline" className="border-white/10 text-white bg-white/5 backdrop-blur-md">
              Sign In
            </Button>
          </Link>
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
  );
};

export default Navbar;